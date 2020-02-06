import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { SignUpUseCase } from './application/SignUp';
import { SignUpController } from './input/signup.controller'
import { AccountRepository } from './domain/Account'
import { AccountSchema, AccountMongoDb } from './infra/repository/Account'

@Module({
  imports: [MongooseModule.forFeature([
    { name: 'Account', schema: AccountSchema }
  ])],
  controllers: [SignUpController],
  providers: [
    SignUpUseCase,
    { provide: AccountRepository, useClass: AccountMongoDb }
  ]
})
export class AccountsModule { }
