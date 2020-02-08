import { IsDefined, IsString, IsLowercase, IsAlphanumeric, MinLength, MaxLength } from 'class-validator'

export class SignInInput {
  @IsDefined()
  @IsString()
  @MinLength(3)
  @MaxLength(25)
  @IsLowercase()
  @IsAlphanumeric()
  readonly username: string
  @IsDefined()
  @IsString()
  @MinLength(6)
  @MaxLength(25)
  readonly password: string
}
