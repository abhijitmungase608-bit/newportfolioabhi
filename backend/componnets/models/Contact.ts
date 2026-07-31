import mongoose, { Schema, Document } from 'mongoose';

export interface IContact extends Document {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service: string;
  budget?: string;
  message: string;
  status: 'pending' | 'reviewed' | 'contacted';
  createdAt: Date;
}

const ContactSchema = new Schema<IContact>({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    minlength: [2, 'Name must be at least 2 characters']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email']
  },
  phone: {
    type: String,
    trim: true
  },
  company: {
    type: String,
    trim: true
  },
  service: {
    type: String,
    required: [true, 'Service is required'],
    enum: ['mobile-app', 'startup-mvp', 'custom-software', 'web-development', 'other']
  },
  budget: {
    type: String,
    enum: ['under-10k', '10k-25k', '25k-50k', '50k-100k', '100k+']
  },
  message: {
    type: String,
    required: [true, 'Message is required'],
    minlength: [10, 'Message must be at least 10 characters']
  },
  status: {
    type: String,
    enum: ['pending', 'reviewed', 'contacted'],
    default: 'pending'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model<IContact>('Contact', ContactSchema);