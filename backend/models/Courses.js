import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
    title: String,
    description: String,
    instructor: String,
    price: Number,
    language: String,
    logo_language: String
});

export default mongoose.model('Course', courseSchema);
