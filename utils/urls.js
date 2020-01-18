const prod = process.env.NODE_ENV === "production";

export default {
  baseUrl: prod
    ? "https://nextjs-starter-flax-sigma.now.sh"
    : "http://localhost:3000",
  dbUrl: prod
    ? process.env.MONGO_DB
    : process.env.MONGO_DEV_DB || "mongodb://localhost:27017",
  dbName: "nextjs",
  pages: {
    index: "/",
    ssr: "/ssr"
  },
  api: {
    example: "/api/example"
  }
};
