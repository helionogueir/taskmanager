import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { JwtUseCase, JwtGuard, JwtConstants } from './application/Token'

@Module({
  imports: [
    JwtModule.register({
      secret: JwtConstants.SECRET
    })
  ],
  providers: [
    JwtUseCase, JwtGuard
  ],
  exports: [
    JwtUseCase, JwtGuard
  ]
})
export class AuthModule { }
