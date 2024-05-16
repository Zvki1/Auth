const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const messageSchema = new mongoose.Schema({
  sender: { type: Schema.Types.ObjectId, ref: "User", required: true },
  recipient: { type: Schema.Types.ObjectId, ref: "User" },
  content: { type: String },
  encryptedcontent: { iv: String, encryptedData: String },
  timestamp: { type: Date, default: Date.now },
});

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;
