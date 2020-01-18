import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import mongoDB from "../index";
import User from "../models/User";

export async function login(username, password) {
  await mongoDB();

  return User.findOne({ username })
    .then(user => {
      if (user) {
        return bcrypt.compare(password, user.password).then(result => {
          if (result) return Promise.resolve(user);

          return Promise.reject(
            new Error("The password you entered is incorrect.")
          );
        });
      }

      return Promise.reject(new Error("The username does not exist."));
    })
    .then(user =>
      jwt.sign(
        {
          id: user._id,
          username: user.username
        },
        process.env.JWT_SECRET,
        {
          expiresIn: "7d"
        }
      )
    );
}

export async function signUp(username, password) {
  await mongoDB();

  return User.countDocuments({ username })
    .then(count => {
      if (count) {
        return Promise.reject(new Error("The username has already been used."));
      }

      return bcrypt.hashSync(password, 10);
    })
    .then(hashedPassword =>
      User.create({
        username,
        password: hashedPassword
      })
    )
    .then(user =>
      jwt.sign(
        {
          id: user._id,
          name: user.name,
          isAdmin: user.isAdmin
        },
        process.env.JWT_SECRET,
        {
          expiresIn: "7d"
        }
      )
    );
}

export async function verifyToken(token) {
  return jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (decoded) return Promise.resolve(decoded);

    return Promise.reject(new Error("Invalid token!"));
  });
}
