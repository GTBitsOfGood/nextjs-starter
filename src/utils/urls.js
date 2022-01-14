export default {
  baseUrl: process.env.BASE_URL ?? "http://localhost:3000",
  pages: {
    index: "/",
    ssr: "/ssr",
    login: "/login",
    app: {
      home: "/app",
    },
  },
  api: {
    example: "/api/example",
    user: {
      signUp: "/api/user/sign-up",
      login: "/api/user/login",
      logout: "/api/user/logout",
      getCurrent: "/api/user",
    },
  },
};
