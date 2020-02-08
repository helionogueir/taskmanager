import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { JwtModule } from '@nestjs/jwt'
import { SignUpUseCase, PasswordUseCase } from './application/SignUp'
import { SignInUseCase } from './application/SignIn'
import { SignUpController } from './input/signup.controller'
import { SignInController } from './input/signin.controller'
import { AccountRepository } from './domain/Account'
import { AccountSchema, AccountMongoDb } from './infra/repository/Account'
import { JwtUseCase, JwtConstants } from '../auth/application/Token'

@Module({
  imports: [MongooseModule.forFeature([
    { name: 'Account', schema: AccountSchema }
  ]),
  JwtModule.register({
    secret: JwtConstants.SECRET
  })],
  controllers: [
    SignUpController,
    SignInController
  ],
  providers: [
    SignUpUseCase,
    SignInUseCase,
    PasswordUseCase,
    JwtUseCase,
    { provide: AccountRepository, useClass: AccountMongoDb }
  ]
})
export class AccountModule { }
