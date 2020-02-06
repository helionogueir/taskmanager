import * as mongoose from 'mongoose'

export const AccountSchema = new mongoose.Schema(
  {
    id: { type: String, index: { unique: true } },
    firstname: { type: String, required: true },
    lastname: { type: String, lowercase: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    createdAt: { type: Date, required: true },
    updatedAt: { type: Date, required: true }
  },
  {
    versionKey: false,
    timestamps: true
  }
)
