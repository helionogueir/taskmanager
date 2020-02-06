import { Controller, Post, Body } from '@nestjs/common'
import { SignUpUseCase, SignUpInput, SignUpOutput } from '../application/SignUp'

@Controller()
export class SignUpController {
  constructor (
    private readonly signUpUseCase: SignUpUseCase
  ) { }

  @Post('v1/accounts/signup')
  public async create (@Body() bodyObject: SignUpInput): Promise<SignUpOutput> {
    console.log(bodyObject)
    return this.signUpUseCase.create(bodyObject)
  }
}
