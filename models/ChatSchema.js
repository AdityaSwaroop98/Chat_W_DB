const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const chatSchema = new Schema({
    room: {
        type: String
    },
    sender: {
        type: String
    },
    message: {
        type: String
    },
    // location: {
    //     type: String
    // }
}, {
    timestamps: true
});

let Chat = mongoose.model("Chat", chatSchema);
module.exports = Chat;