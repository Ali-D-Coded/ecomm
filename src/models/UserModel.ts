import * as mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
		name: {
		  type: String,
		  required: true,
		  unique: true
		},
		age: {
			type: Number,
			required: true
		}
  },
);

export type User = mongoose.InferSchemaType<typeof userSchema>;
export const User = mongoose.model('User', userSchema);
