import { Schema } from 'mongoose';
import ICar from './ICar';

const carSchema = new Schema<ICar>(
  {
    model: String,
    year: Number,
    color: String,
    status: Boolean,
    buyValue: Number,
    doorsQty: Number,
    seatsQty: Number,
  },
  { versionKey: false },
);

export default carSchema;