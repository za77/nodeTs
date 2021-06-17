import mongoose from "mongoose";

const user = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
    },
   mobile:{
     type:String,
   },
    password:{
        type:String,
    },
    status: {
      type: Boolean,
      default: true,
    },
    createdBy: {
      type: String,
    },
    updatedBy: {
      type: String,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model('user', user);
