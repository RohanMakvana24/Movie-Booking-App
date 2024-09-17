import mongoose from "mongoose";
import bcrypt from "bcryptjs";
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

// ⁡⁣⁢⁣Add Virtual Field⁡ //
UserSchema.virtual("bookings", {
  ref: "Bookings",
  localField: "_id",
  foreignField: "userId",
  count: true,
  justOne: false,
});

// ⁡⁣⁢⁣Password Hashing⁡ //
UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  try {
    this.password = await bcrypt.hash(this.password, 10);
    next();
  } catch (error) {
    console.log(error);
    next(error);
  }
});

const UserModel = new mongoose.model("Users", UserSchema);

export default UserModel;
