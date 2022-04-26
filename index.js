// const { default: mongoose } = require("mongoose");
// const mongoos = require("mongoose");
// const { mainModule } = require("process");
import mongoose from "mongoose";

main().catch((err) => console.log(err));
const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  age: Number,
});
const User = mongoose.model("User", userSchema);

async function main() {
  const localConnection = "mongodb://localhost:27017/practice-1";
  const remoteConnection =
    "mongodb+srv://hayat_dci:wanewane23@cluster0.dpje9.mongodb.net/practice-1?retryWrites=true&w=majority";
  await mongoose.connect(remoteConnection);
  await User.findByIdAndUpdate("62669be6e24a943359dce84a", { age: 26 }).exec();
  const newUser = new User({
    firstName: "Rodi",
    lastName: "Bijoo",
    age: 30,
  });
  const tempUser = await newUser.save();

  const users = await User.find().exec();
  for (const user of users) {
    console.log(user);
  }
  await User.findByIdAndDelete(tempUser._id);
  process.exit(0);
}
