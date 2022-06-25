import { PickType } from '@nestjs/swagger';
import { User } from '../entities/user.entity';
// import { CreateProfileDto } from './create-profile.dto';

export enum Permission {
  SUPER_ADMIN = 'Super admin',
  STORE_OWNER = 'Store owner',
  STORE_MANAGER = 'Store manager',
  STAFF = 'Staff',
  CUSTOMER = 'Customer',
}

export class CreateUserDto extends PickType(User, [
  'name',
  'nickname',
  'email',
  'password',
]) {
  //   address?: CreateAddressDto[];
  // profile?: CreateProfileDto;
  // permission: Permission = Permission.CUSTOMER;
}
