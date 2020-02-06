import { Injectable, BadRequestException } from '@nestjs/common'
import { ValidationError, validate } from 'class-validator'
import { AccountRepository } from '../../domain/Account'
import { AccountStructure } from '../../domain/Account'
import { SignUpInput, SignUpOutput } from '.'

@Injectable()
export class SignUpUseCase {
  public constructor (
    private readonly accountRepository: AccountRepository
  ) { }
  public async create (data: SignUpInput): Promise<SignUpOutput> {
    const errors: Array<ValidationError> = await validate(data)
    if (errors.length) throw new BadRequestException()
    const row: AccountStructure = {
      firstname: data.firstname,
      lastname: data.lastname,
      username: data.username,
      password: data.password,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    const accountObject = await this.accountRepository.save(row)
    console.log(accountObject)
    return Promise.resolve({
      id: "1",
      firstname: "Joaquim",
      lastname: "Silva",
      username: "jsilva",
      createdAt: new Date(),
      updatedAt: new Date()
    })
  }
}
