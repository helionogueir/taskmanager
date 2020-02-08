import { ProjectStructure } from '.'

export abstract class ProjectRepository {
  abstract save (account: ProjectStructure): Promise<ProjectStructure>
  abstract findAllByAccountId (accountId: string): Promise<ProjectStructure[]>
  abstract updateNameById (projectId: string, name: string): Promise<any>
  abstract deleteById (projectId: string): Promise<Boolean>
}
