import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common'
import { Request } from 'express'
import { JwtUseCase } from '.'

@Injectable()
export class JwtGuard implements CanActivate {
  public constructor (private readonly jwtUseCase: JwtUseCase) { }
  public async canActivate (context: ExecutionContext): Promise<boolean> {
    const req: Request = context.switchToHttp().getRequest()
    const authorization = req.get('authorization') || ''
    const token = authorization.replace(/^(Bearer )(.*)$/i, '$2')
    const accountObject = await this.jwtUseCase.verify(token)
    if (accountObject) {
      req.params.accountId = accountObject._id
      return true
    } else {
      throw new UnauthorizedException()
    }
  }
}
