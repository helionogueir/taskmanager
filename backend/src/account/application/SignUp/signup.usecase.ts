import { Injectable, InternalServerErrorException } from '@nestjs/common'
import { AccountRepository } from '../../domain/Account'
import { AccountStructure } from '../../domain/Account'
import { SignInUseCase } from '../SignIn'
import { PasswordUseCase, SignUpInput, SignUpOutput } from '.'

@Injectable()
export class SignUpUseCase {
  public constructor (
    private readonly accountRepository: AccountRepository,
    private readonly signInUseCase: SignInUseCase
  ) { }
  public async create (data: SignUpInput): Promise<SignUpOutput> {
    try {
      const row: AccountStructure = {
        firstname: data.firstname,
        lastname: data.lastname,
        username: data.username,
        password: (new PasswordUseCase()).encrypt(data.password),
        createdAt: new Date(),
        updatedAt: new Date()
      }
      await this.accountRepository.save(row)
      return this.signInUseCase.create(data)
    } catch (err) {
      throw new InternalServerErrorException([err.message])
    }
  }
}
