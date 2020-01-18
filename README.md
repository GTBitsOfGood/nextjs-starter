# nextjs-starter

## Stack
* React.js: Front-end
* Next.js: API routes and server-side rendering
* MongoDB: Permanently storing info
* Zeit Now: Hosting and automatic GitHub build hooks
* eslint: Automatically identifying and fixing code errors
* prettier: Setting a common code style and fixing any issues

## Setup

### Zeit Now Install

- [Create a Zeit Now account](https://zeit.co)
- Run `npm i -g now`, then type `now login`
- On your dashboard, click `New Project` then `From GitHub` and select this project

### Updating Env Vars
- For dev, update `.env` and `next.config.js`
- For production, install Now using the instructions above, then
- For production, to add, use `now secrets add <secret-name> <secret-value>`
- For production, to remove, use `now secrets rm <secret-name>`

## Running

### MongoDB

A running instance of MongoDB is required this project.
- By default, development uses MongoDB on your computer, if you would like to use an external database, enter `export MONGO_DEV_DB='URLHERE'` (macOS/Linux) or `setx MONGO_DEV_DB URLHERE` (Windows) and skip the instructions below.
- [Download MongoDB Community Server](https://www.mongodb.com/download-center/community)
- Go through the installation instructions.
  - Atlas is recommended for basic testing.
  - Leave the port at default 27017
- Create the `nextjs` database. (or choose another name, but make sure to change it in `utils/urls.js`)
- You're done!

### Development
- Setup MongoDB with the instructions above
- Clone this project to your computer
- Navigate to this project in terminal and enter `npm install`
- Rename `example.env` to `.env` and fill it out with the dev config
- Run the dev version of this project by entering `npm run dev`

### Styling
- By default, this repository uses Next `9.2.0` for styles, which includes native support for global CSS and CSS modules
- However, this version only allows global css to be in `pages/_app.js`, which can cause issues with external packages
- If you face this error, the solution is installing [`@zeit/next-css` and adding it to `next.config.js`](https://github.com/zeit/next-plugins/tree/master/packages/next-css), however you cannot use css modules and global css together with this package (and it defaults to global).
