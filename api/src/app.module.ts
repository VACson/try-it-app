import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';

const dbConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 33033,
  username: 'admin',
  password: 'admin',
  database: 'try-it-app',
  entities: [User],
  synchronize: true,
};

@Module({
  imports: [TypeOrmModule.forRoot(dbConfig), UsersModule],
})
export class AppModule {}
