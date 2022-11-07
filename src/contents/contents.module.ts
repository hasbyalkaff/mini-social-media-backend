import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContentsService } from './contents.service';
import { ContentsController } from './contents.controller';
import { ContentEntity } from './content.entity/content.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ContentEntity])],
  providers: [ContentsService],
  controllers: [ContentsController]
})
export class ContentsModule {}
