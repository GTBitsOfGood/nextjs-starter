import { login } from "server/mongodb/actions/User";
import { withSessionRoute } from "src/utils/lib/session";

// @route   POST api/user/login
// @desc    Login Request
// @access  Public
const handler = async (req, res) => {
  try {
    const user = await login(req.body);
    req.session.user = {
      ...user,
      isLoggedIn: true,
    };
    await req.session.save();

    return res.status(200).json({
      success: true,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export default withSessionRoute(handler);
