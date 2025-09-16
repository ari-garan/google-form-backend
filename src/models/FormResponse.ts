import { array } from "joi";
import mongoose from "mongoose";

const formResponseSchema = new mongoose.Schema({
  // userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  formId: { type: mongoose.Schema.Types.ObjectId, ref: 'Form', required: true },
  title: { type: String, required: true},
  description: { type: String, required: true},
  isDisabled: { type: Boolean },
  questions: [
    {
      id: { type: Number, required: true },
      name: { type: String, required: true },
      question: { type: String, required: true},
      answer: { type: mongoose.Schema.Types.Mixed, trim: true, default: ''},
      component: { type: String, required: true }
    }
  ],
  createdAt: { type: Date, default: Date.now }
},{strict:true});

const FormResponseModle = mongoose.model('FormResponse', formResponseSchema);

export default FormResponseModle;