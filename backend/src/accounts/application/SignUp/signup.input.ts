import { IsString } from 'class-validator'

export class SignUpInput {
  @IsString()
  readonly firstname: string
  @IsString()
  readonly lastname: string
  @IsString()
  readonly username: string
  @IsString()
  readonly password: string
}
