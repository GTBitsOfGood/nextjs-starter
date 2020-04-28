import { removeCookie } from "../../../../utils/tokens";

// @route   GET api/user/logout
// @desc    Logout current user
// @access  Public
const handler = (req, res) => {
  res.setHeader("Set-Cookie", removeCookie());

  return res.status(200).json({
    success: true,
  });
};

export default handler;
