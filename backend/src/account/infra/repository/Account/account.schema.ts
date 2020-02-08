import * as mongoose from 'mongoose'

export const AccountSchema = new mongoose.Schema(
  {
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    username: { type: String, required: true, lowercase: true, index: { unique: true } },
    password: { type: String, required: true },
    createdAt: { type: Date, required: true },
    updatedAt: { type: Date, required: true }
  },
  {
    versionKey: false,
    timestamps: true
  }
)
