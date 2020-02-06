import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'
import { AccountsModule } from './accounts/accounts.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://develop:develop@helionogueir-taskmanager-mongodb:27017/admin', {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true
    }),
    AccountsModule
  ]
})
export class AppModule { }
