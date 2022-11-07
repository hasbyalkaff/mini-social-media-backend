import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { typeOrmConfig } from './ormconfig';
import { ContentsModule } from './contents/contents.module';
import { CommentsModule } from './comments/comments.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "",
      database: "socialmedia",
      entities: ["dist/**/**.entity.js"],
      synchronize: true
  }),
  UsersModule,
  ContentsModule,
  CommentsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
