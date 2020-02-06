import { AccountStructure } from '.'

export abstract class AccountRepository {
  abstract save (account: AccountStructure): Promise<AccountStructure>
  abstract findByUsername (username: string): Promise<AccountStructure>
}
