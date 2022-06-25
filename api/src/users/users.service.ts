import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

export class TokenData {
  accessToken: string;
  expiresIn: string;
}
export interface JwtPayload {
  email: string;
}
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<{ accessToken: string }> {
    const payload = await this.usersRepository.save(createUserDto);
    return this._createToken(payload);
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  private _createToken({ email }: User): TokenData {
    const payload: JwtPayload = { email };
    const accessToken = this.jwtService.sign(payload);
    return {
      expiresIn: '15min' || process.env.JWT_EXPIRESIN,
      accessToken,
    };
  }
}
