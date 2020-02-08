import { Controller, Get, Post, Body, UseGuards, Param } from '@nestjs/common'
import { ProjectUseCase } from '../application/Project'
import { JwtGuard } from '../../auth/application/Token'
import { ProjectStructure } from '../domain/Project'

@Controller()
export class ProjectController {
  constructor (
    private readonly projectUseCase: ProjectUseCase
  ) { }

  @Post('v1/projects')
  @UseGuards(JwtGuard)
  public async create (@Param('accountId') accountId, @Body('name') name: string): Promise<ProjectStructure> {
    return this.projectUseCase.create(accountId, name)
  }

  @Get('v1/projects')
  @UseGuards(JwtGuard)
  public async findAll (@Param('accountId') accountId): Promise<ProjectStructure[]> {
    return this.projectUseCase.findAllByAccountId(accountId)
  }
}
