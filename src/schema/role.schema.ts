import mongoose from "mongoose";

const role = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
   display:{
     type:String,
   }
  },
  { timestamps: true },
);

module.exports = mongoose.model('role', role);
