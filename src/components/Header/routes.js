import urls from "src/utils/urls";

const routes = [
  {
    name: "Home",
    link: urls.pages.index,
    auth: false,
    atEnd: false,
  },
  {
    name: "SSR",
    link: urls.pages.ssr,
    auth: false,
    atEnd: false,
  },
  {
    name: "App Home",
    link: urls.pages.app.home,
    auth: true,
  },
  {
    name: "Login",
    link: urls.pages.login,
    auth: false,
    atEnd: true,
  },
];

export default routes;
