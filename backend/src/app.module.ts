import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { AccountModule } from './account/account.module'
import { AuthModule } from './auth/auth.module'
import { ProjectModule } from './project/project.module'

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://develop:develop@helionogueir-taskmanager-mongodb:27017/admin', {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true
    }),
    AccountModule,
    AuthModule,
    ProjectModule
  ]
})
export class AppModule { }
