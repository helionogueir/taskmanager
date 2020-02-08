import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { JwtModule } from '@nestjs/jwt'
import { ProjectUseCase } from './application/Project'
import { ProjectController } from './input/project.controller'
import { ProjectRepository } from './domain/Project'
import { ProjectSchema, ProjectMongoDb } from './infra/repository/Project'
import { JwtConstants, JwtUseCase } from '../auth/application/Token'

@Module({
  imports: [MongooseModule.forFeature([
    { name: 'Project', schema: ProjectSchema }
  ]),
  JwtModule.register({
    secret: JwtConstants.SECRET
  })],
  controllers: [
    ProjectController
  ],
  providers: [
    ProjectUseCase,
    JwtUseCase,
    { provide: ProjectRepository, useClass: ProjectMongoDb }
  ]
})
export class ProjectModule { }
