import { JwtService } from '@nestjs/jwt'
import { Injectable } from '@nestjs/common'
import { AccountStructure } from '../../../account/domain/Account'

@Injectable()
export class JwtUseCase {
  public constructor (
    private readonly jwtService: JwtService
  ) { }

  public async encrypt (account: AccountStructure): Promise<string> {
    const payload: AccountStructure = {
      _id: account._id,
      firstname: account.firstname,
      lastname: account.lastname,
      username: account.username,
      createdAt: account.createdAt,
      updatedAt: account.updatedAt
    }
    return this.jwtService.signAsync(payload, { expiresIn: '12h' })
  }

  public async verify (token: string): Promise<AccountStructure> {
    return this.jwtService.verify<AccountStructure>(token)
  }
}
