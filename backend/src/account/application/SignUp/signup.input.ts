import { IsDefined, IsString, MinLength, MaxLength } from 'class-validator'
import { SignInInput } from '../SignIn'

export class SignUpInput extends SignInInput {
  @IsDefined()
  @IsString()
  @MinLength(3)
  @MaxLength(25)
  readonly firstname: string
  @IsDefined()
  @IsString()
  @MinLength(3)
  @MaxLength(25)
  readonly lastname: string
}
