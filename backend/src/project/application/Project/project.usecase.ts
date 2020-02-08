import { Injectable, InternalServerErrorException } from '@nestjs/common'
import { ProjectRepository, ProjectStructure } from '../../domain/Project'

@Injectable()
export class ProjectUseCase {
  public constructor (
    private readonly projectRepository: ProjectRepository
  ) { }
  public async create (accountId: string, name: string): Promise<ProjectStructure> {
    try {
      const row: ProjectStructure = {
        accountId: accountId,
        name: name,
        createdAt: new Date(),
        updatedAt: new Date()
      }
      return this.projectRepository.save(row)
    } catch (err) {
      throw new InternalServerErrorException([err.message])
    }
  }
  public async findAllByAccountId (accountId: string): Promise<ProjectStructure[]> {
    try {
      return this.projectRepository.findAllByAccountId(accountId)
    } catch (err) {
      throw new InternalServerErrorException([err.message])
    }
  }
}
