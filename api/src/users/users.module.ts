import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Unique, User } from './entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User], 'default')],
  controllers: [UsersController],
  providers: [UsersService, Unique],
  exports: [UsersService],
})
export class UsersModule {}
