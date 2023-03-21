import { Module } from '@nestjs/common';
import { ChatroomService } from './chatroom.service';
import { ChatroomController } from './chatroom.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChatroomEntity } from 'src/entities/chatroom.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ChatroomEntity])],
  providers: [ChatroomService],
  controllers: [ChatroomController],
})
export class ChatroomModule {}
