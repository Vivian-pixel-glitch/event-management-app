// const mongoose = require('mongoose');

// const UserSchema = new mongoose.Schema(
//     {
//         name: {
//             type: String,
//             required: true,
//         },
//         email: {
//             type: String,
//             required: true,
//             unique: true,
//         },
//         password: {
//             type: String,
//             required: true,
//         },
//     },
//     {timestamps: true}
// );

// module.exports = mongoose.model("User",UserSchema)



const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true, // ✅ always store in lowercase
      trim: true       // ✅ remove spaces before/after
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);

