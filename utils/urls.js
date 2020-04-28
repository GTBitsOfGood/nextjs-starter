const prod = process.env.NODE_ENV === "production";

export default {
  baseUrl: prod ? process.env.PROD_URL : "http://localhost:3000",
  dbUrl: process.env.MONGO_DB ?? "mongodb://localhost:27017",
  dbName: process.env.DB_NAME,
  pages: {
    index: "/",
    ssr: "/ssr",
  },
  api: {
    example: "/api/example",
  },
};
