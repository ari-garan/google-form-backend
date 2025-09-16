import mongoose from "mongoose";

const formSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  description: { 
    type: String, 
    required: true, 
    trim: true,
  },
  isDisabled: { type: Boolean, default: false },
  questions: [
    {
      id: { type: Number, required: true },
      name: { type: String, required: true },
      question: { type: String, required: true, trim: true },
      component: { type: String, required: true },
      type: {type: String},
      options: [{ type: String }]
    }
  ],
  createdAt: { type: Date, default: Date.now }
},{strict:true});

const FormModel = mongoose.model('Form', formSchema);

export default FormModel;