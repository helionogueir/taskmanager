import { Controller, Post, Body } from '@nestjs/common'
import { SignInUseCase, SignInInput, SignInOutput } from '../application/SignIn'

@Controller()
export class SignInController {
  constructor (
    private readonly signInUseCase: SignInUseCase
  ) { }

  @Post('v1/accounts/signin')
  public async create (@Body() bodyObject: SignInInput): Promise<SignInOutput> {
    return this.signInUseCase.create(bodyObject)
  }
}
