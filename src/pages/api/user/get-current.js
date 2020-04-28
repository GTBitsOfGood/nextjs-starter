import { getUserFromToken } from "../../../../server/mongodb/actions/User";
import { removeCookie } from "../../../../utils/tokens";

// @route   GET api/user/get-current
// @desc    Get current user from cookie
// @access  Public
const handler = (req, res) =>
  getUserFromToken(req.cookies?.token)
    .then((user) =>
      res.status(200).json({
        success: true,
        payload: user,
      })
    )
    .catch((error) => {
      res.setHeader("Set-Cookie", removeCookie());

      return res.status(400).json({
        success: false,
        message: error.message,
      });
    });

export default handler;
