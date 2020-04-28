import { signUp } from "../../../../server/mongodb/actions/User";
import { createCookie } from "../../../../utils/tokens";

// @route   POST api/user/sign-up
// @desc    SignUp Request
// @access  Public
const handler = (req, res) =>
  signUp(req.body)
    .then((token) => {
      res.setHeader("Set-Cookie", createCookie(token, 604800));

      return res.status(200).json({
        success: true,
        payload: token,
      });
    })
    .catch((error) =>
      res.status(400).json({
        success: false,
        message: error.message,
      })
    );

export default handler;
