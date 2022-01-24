import Joi from "joi";

const schema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().alphanum().min(6).max(10).required(),
});

export const regLogValidate = async (req, res, next) => {
  try {
    await schema.validateAsync(req.body);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
  next();
};
