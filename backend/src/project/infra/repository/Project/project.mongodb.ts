import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model, Document } from 'mongoose'
import { ProjectStructure, ProjectRepository } from '../../../domain/Project'

@Injectable()
export class ProjectMongoDb implements ProjectRepository {
  constructor (@InjectModel('Project') private readonly model: Model<ProjectStructure & Document>) { }

  public async save (account: ProjectStructure): Promise<ProjectStructure> {
    return new this.model(account).save()
  }

  public async findAllByAccountId (accountId: string): Promise<ProjectStructure[]> {
    return this.model.find({ accountId })
  }

  public async updateNameById (projectId: string, name: string): Promise<Boolean> {
    return this.model.update(
      { _id: projectId },
      { $set: { name } }
    )
  }

  public async deleteById (projectId: string): Promise<any> {
    this.model.findOneAndDelete({ _id: projectId }).exec()
    return
  }
}
