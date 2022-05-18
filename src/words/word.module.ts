import { Module } from '@nestjs/common';
import { WordService } from './word.service';
import { WordController } from './word.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Word } from './word.entity';
import { WordRepo } from './word.repository';
import { WordProfile } from './DTO/word.profile';
import { UserKnowlegeModule } from '../userKnowleges/userKnowlege.module';
import { UserModule } from '../users/user.module';
import { CustomJwtModule } from '../auth/jwt.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Word]),
    UserKnowlegeModule,
    UserModule,
    CustomJwtModule,
  ],
  providers: [WordService, WordRepo, WordProfile],
  controllers: [WordController],
  exports: [WordRepo],
})
export class WordModule {}
