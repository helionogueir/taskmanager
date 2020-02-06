import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model, Document } from 'mongoose'
import { AccountStructure, AccountRepository } from '../../../domain/Account'

@Injectable()
export class AccountMongoDb implements AccountRepository {
  constructor (@InjectModel('Account') private readonly model: Model<AccountStructure & Document>) { }

  public async save (account: AccountStructure): Promise<AccountStructure> {
    return new this.model(account).save()
  }
}
