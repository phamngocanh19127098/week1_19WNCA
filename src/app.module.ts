import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ActorsModule } from './actors/actors.module';
import {Actor} from "./actors/entities/actor.entity";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'mysql_db',
      port: 3306,
      username: 'root',
      password:'19WNCA',
      database:'data',
      entities: [Actor],
      synchronize: false,
    }),
    ActorsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
