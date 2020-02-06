import { Injectable, InternalServerErrorException } from '@nestjs/common'
import { AccountRepository } from '../../domain/Account'
import { AccountStructure } from '../../domain/Account'
import { SignUpInput, SignUpOutput } from '.'

@Injectable()
export class SignUpUseCase {
  public constructor (
    private readonly accountRepository: AccountRepository
  ) { }
  public async create (data: SignUpInput): Promise<SignUpOutput> {
    try {
      const row: AccountStructure = {
        firstname: data.firstname,
        lastname: data.lastname,
        username: data.username,
        password: data.password,
        createdAt: new Date(),
        updatedAt: new Date()
      }
      const accountObject = await this.accountRepository.save(row)
      return Promise.resolve({
        id: accountObject._id,
        firstname: accountObject.firstname,
        lastname: accountObject.lastname,
        username: accountObject.username,
        createdAt: accountObject.createdAt,
        updatedAt: accountObject.updatedAt
      })
    } catch (err) {
      throw new InternalServerErrorException(err.message)
    }
  }
}
