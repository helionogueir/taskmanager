import { Controller, Post, Body, HttpCode } from '@nestjs/common';
import { SignUpUseCase, SignUpInput, SignUpOutput } from '../application/SignUp';

@Controller()
export class SignUpController {
  constructor (
    private readonly signUpUseCase: SignUpUseCase
  ) { }

  @Post('v1/accounts/signup')
  @HttpCode(204)
  public async create (@Body() bodyObject: SignUpInput): Promise<SignUpOutput> {
    return this.signUpUseCase.create(bodyObject)
  }
}
