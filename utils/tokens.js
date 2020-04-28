const prod = process.env.NODE_ENV === "production";

export const createCookie = (token, maxAge) =>
  `token=${token}; Max-Age=${maxAge.toString()}; SameSite=Lax; Path=/; HttpOnly${
    prod ? "; Secure" : ""
  }`;

export const removeCookie = () => createCookie("", 0);
