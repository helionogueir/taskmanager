import * as mongoose from 'mongoose'

export const ProjectSchema = new mongoose.Schema(
  {
    accountId: { type: String, required: true },
    name: { type: String, required: true },
    createdAt: { type: Date, required: true },
    updatedAt: { type: Date, required: true }
  },
  {
    versionKey: false,
    timestamps: true
  }
)
