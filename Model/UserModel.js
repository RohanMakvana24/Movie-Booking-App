import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      min: [3, "Name Must be three character long"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    phoneNo: {
      type: String,
      max: 10,
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
    profile: [
      {
        public_id: {
          type: String,
        },
        url: {
          type: String,
        },
      },
    ],
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    timestamps: true,
  }
);

//Add Virtual Field
UserSchema.virtual("bookings", {
  ref: "Bookings",
  localField: "_id",
  foreignField: "userId",
  count: true,
  justOne: false,
});

const UserModel = new mongoose.model("Users", UserSchema);

export default UserModel;
