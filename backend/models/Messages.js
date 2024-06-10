import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    text: { type: String, required: true },
    date: { type: Date, default: Date.now },
    position: { type: String, required: true }
});

export default mongoose.model('Message', messageSchema);