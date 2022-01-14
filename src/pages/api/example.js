import { exampleAction } from "server/example/actions/example";

export const exampleServerCall = async () => {
  try {
    const text = await exampleAction();
    return {
      success: true,
      payload: text,
    };
  } catch (e) {
    return {
      success: false,
      message: "Failed to run action!",
    };
  }
};

// @route   POST api/example
// @desc    Example API
// @access  Public
const handler = (req, res) =>
  exampleServerCall().then((payload) => {
    if (payload.success) res.status(201);
    else res.status(500);
    res.json(payload);
  });

export default handler;
