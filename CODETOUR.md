# Code Tour

A quick introduction to the folders and files in this repo. Keep in mind that in Next files can be imported from the root base directory.

## Source Organization: [`src/`](src)

To keep things modular, the resources are divided into folders namely `/screens`, `/pages`, `/components`, `/actions`, and `utils`.

- ### [`/screens`](src/screens): Contains Next.js pages along with their necessary styles and any extra files.

  * While it's possible to create Next.js pages in `/src/pages` directly, several problems occur.
    Pages are able to import CSS modules like any other component, but CSS cannot be placed in the `/src/pages` directory.
  * To work, CSS files must be placed in another directory away from the page, leading to messy code.
    Similarly, any other files or utils must be placed in a separate directory.
  * To fix this, screens are placed in a separate directory from pages, and each in their own directory.
    This makes it very simple to keep the logic, styles, and utilities for each page in their separate space.
  * Each screen behaves as a page, so `getInitialProps` and other Next.js helpers can be used.
  * Each screen is also passed the prop `currentUser`, which is either null or an object containing the user's data from the database.
  * The one caveat to this is the special SSR functions like `getServerSideProps` and `getStaticProps` can not be called from the `screens` directory, as they are framework specific to `pages`. The workaround to this is maintaining these initial data calls in a `page`, and drilling the props down a level to `screens`.

- ### [`/pages`](src/pages): Used for creating file-system routing to screens and creating API routes.

  * The `/src/pages` directory acts as file-system routing for our screens and for API routes.
  * For regular pages, `import` and `export default` the screen directly.
  * **External** API routes are placed in the [src/pages/api](src/pages/api) directory.
    * Every API route must return a HTTP status code and body matching the template:  
      ```
      res.status(201).json({
        success: true,
        payload: ...,
      })
      ```
      for successful requests, and:  
      ```
      res.status(500).json({
        success: false,
        message: "...",
      })
      ```
      for errors. This makes processing the results much easier.
    * The request body can be accessed with `req.body` and cookies with `req.cookies`.
  * To simplify API routes and promote code reuse, server-side actions are used from the `/server/actions` directory.

- ### [`/components`](src/components): Contains reusable React components.

  * Each reusable component is placed in this directory with a similar structure to screens.
  * Create a directory for each component,
    and include any necessary styles and utils for this component only in the same directory.
  * Each directory must include a `index.jsx` file that imports and export defaults the component.
    This makes it easier to import the component from `/componentDir` instead of `/componentDir/component`.
  * Any sub-components that are used by, and only by, this component, should be placed within their
    own sub-directory within the component's directory.

- ### [`/actions`](src/actions): Contains functions for calling API routes.

  * Each file in this directory contains multiple functions for interacting with a group of API routes.
  * Each function should return a fetch request matching the template:
    ```
    fetch(urls.baseUrl + urls.api.example, {
      method: "get",
      mode: "same-origin",
      credentials: "include",
    })
      .then((response) => response.json())
      .then((json) => {
        if (json == null) {
          throw new Error("Could not connect to API!");
        } else if (!json.success) {
          throw new Error(json.message);
        }
    
        return json.payload;
      });
    ```
  * **IMPORTANT** Calling an internal API route while using SSR for initial data fetching is an antipattern. These actions should only be used on the client side.
    * Instead, if access to server-side actions are required for SSR initial page load, directly import resolve asynchronous calls from the `/server/actions` directory into `/src/pages`.

- ### [`utils/`](utils): Contains custom hooks, path configuration, SWR setup, and iron-session configuration.

### [`urls.js`](utils/urls.js): Exports an object containing the urls for each page and API route.

  * After creating a page or API route, the path needs to be added to `urls.js` immediately.
  * This makes it easy use urls in the project, because the urls object only needs to be imported,
    and then urls can be changed at a later date without needing to search the code to replace urls as strings.
  * Plain strings should **NEVER** be used to reference pages/API routes, **ALWAYS** import the urls object.
  * If a dynamic route is needed format it as `pageKey: "/somePage/[aKey]"` (with the corresponding page route being `/pages/somePage/[aKey].jsx`),
    then use the [`NavLink`](src/components/NavLink/NavLink.jsx) component to navigate to this page:
    `<NavLink href={pages.pageKey} hrefParts={{ aKey: 123 }}>Link</NavLink>`.

## Server Organization: [`server/`](server)

The server directory includes the backend actions used in API routes separated by their type.

- ### [`/mongodb`](server/mongodb): Contains backend Mongoose models and actions for interacting with MongoDB.

  * Mongoose models should be placed within the `server/mongodb/models` directory.
    * The export for each model should follow the template:
      `export default mongoose.models.User ?? mongoose.model("User", UserSchema);`
  * MongoDB (using Mongoose) actions (i.e. queries and operations) should be placed within the `server/mongodb/actions` directory.
    * Each file should use the same name as the model, and include all related actions.
    * Each file needs to import `import mongoDB from "../index";`,
      and each function needs to include `await mongoDB();` (once per function) before any interactions are made with the database.

## Public Organization: [`public/`](public)

The public directory hosts any included files on the website.
* [`/public`](public): Files placed in this directory can be accessed at `baseUrl/file`.
  Be **VERY** careful to not include a file with the same name as a page!
* [`/public/static`](public/static): Files placed in this directory can be accessed at `baseUrl/static/file`.

## Project Management: [`.github/`](.github)

The hidden directory contains the configuration needed for CI/CD through Vercel as well as other GitHub related artifacts.
* [`/.github/pull_request_template.md`](.github/pull_request_template.md): A Markdown file that is automatically loaded into a PR.
* [`/.github/ISSUE_TEMPLATES`](.github/ISSUE_TEMPLATES): Markdown files placed in this directory describe issue templates for the repository. When using your preferred project management system, this may expedite and formalize how issues are created.
* [`/.github/workflows`](.github/workflows): GitHub Actions workflows. These are often used for CI/CD. The `main.yml` workflow that currently exists in this repository is a Vercel actions that creates preview deployments depending on branch.
* [https://stackoverflow.com/questions/60507097/is-there-an-overview-of-what-can-go-into-a-github-dot-github-directory](Link to additional items that can be configured in .github)
