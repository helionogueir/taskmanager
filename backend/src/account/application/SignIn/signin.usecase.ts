import { Injectable, InternalServerErrorException, BadRequestException } from '@nestjs/common'
import { AccountRepository } from '../../domain/Account'
import { SignInInput, SignInOutput } from '.'
import { PasswordUseCase } from '../SignUp'
import { JwtUseCase } from '../../../auth/application/Token'

@Injectable()
export class SignInUseCase {
  public constructor (
    private readonly accountRepository: AccountRepository,
    private readonly jwtUseCase: JwtUseCase
  ) { }
  public async create (data: SignInInput): Promise<SignInOutput> {
    try {
      const accountObject =
        await this.accountRepository.findByUsername(data.username)
      if (!(new PasswordUseCase()).validate(accountObject, data.password))
        throw new BadRequestException('Password Invalid')
      return Promise.resolve({
        id: accountObject._id,
        firstname: accountObject.firstname,
        lastname: accountObject.lastname,
        username: accountObject.username,
        createdAt: accountObject.createdAt,
        updatedAt: accountObject.updatedAt,
        authorization: await this.jwtUseCase.encrypt(accountObject)
      })
    } catch (err) {
      throw new InternalServerErrorException(err.message)
    }
  }
}
