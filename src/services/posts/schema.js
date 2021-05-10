import mongoose from "mongoose";

const { Schema, model } = mongoose;

const PostSchema = new Schema(
  {
    text: {
      type: String,
      required: true,
      trim: true,
    },
    username: {
      type: String,
      required: true,
      trim: true,
    },
    user: {},
    image: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

PostSchema.post("validate", function (error, doc, next) {
  if (error) {
    error.httpStatusCode = 400;
    next(error);
  } else {
    next();
  }
});
export default model("Post", PostSchema);
