import { Injectable } from '@nestjs/common';
import { CreateActorDto } from './dto/create-actor.dto';
import { UpdateActorDto } from './dto/update-actor.dto';
import {Actor} from "./entities/actor.entity";
import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";

@Injectable()
export class ActorsService {
  constructor(
      @InjectRepository(Actor)
      private readonly actorsRepository: Repository<Actor>
  ) {
  }
  async create(createActorDto: CreateActorDto) {
    try {
      let actor : Actor = await this.actorsRepository.save(createActorDto);
      return {
        message: "User created successfully!",
        data : actor,
      }
    }
    catch (e) {
      return {
        message : "Something went wrong!",
        error : e.message
      }
    }
  }

  async findAll() {
    try {
      let actors : Actor[] = await this.actorsRepository.find({
        order:{
          actorId: "DESC"
        }
      });
      return {
        message : "Get actor list successfully",
        data : actors
      }
    }
    catch (e) {
      return {
        message: "Some thing went wrong!",
        error : e.message,
      }
    }

  }

  findOne(id: number) {
    return `This action returns a #${id} actor`;
  }

  update(id: number, updateActorDto: UpdateActorDto) {
    return `This action updates a #${id} actor`;
  }

  remove(id: number) {
    return `This action removes a #${id} actor`;
  }
}
