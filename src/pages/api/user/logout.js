import { withSessionRoute } from "src/utils/lib/session";

// @route   GET api/user/logout
// @desc    Logout current user
// @access  Public
const handler = async (req, res) => {
  req.session.destroy();
  return res.status(200).json({
    success: true,
  });
};

export default withSessionRoute(handler);
