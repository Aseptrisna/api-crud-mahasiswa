// src/model/users-model.js
const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    guid: {
      type: String,
      required: true,
      unique: true,
    },
    nama: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    telp: {
      type: String,
    },
    jenis_kelamin: {
      type: String,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
