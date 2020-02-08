import { Injectable } from '@nestjs/common'
import { createHash, createHmac } from 'crypto'
import { AccountStructure } from '../../domain/Account'

@Injectable()
export class PasswordUseCase {

  public validate (account: AccountStructure, password: string): boolean {
    const hash = this.encrypt(password)
    return account.password === hash
  }

  public encrypt (password: string): string {
    if (password) {
      const salt = createHash('md5')
        .update(password)
        .digest('hex')
      const hash = createHmac('sha512', salt)
        .update(password)
        .digest('hex')
      return `${hash}`
    }
    return ''
  }
}
