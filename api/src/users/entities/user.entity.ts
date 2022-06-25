import { Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/typeorm';
import {
  IsEmail,
  MinLength,
  Validate,
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import {
  Column,
  Connection,
  Entity,
  ObjectType,
  PrimaryGeneratedColumn,
  EntitySchema,
} from 'typeorm';

interface UniqueValidationArguments<E> extends ValidationArguments {
  constraints: [
    ObjectType<E> | EntitySchema<E> | string,
    ((validationArguments: ValidationArguments) => any) | keyof E,
  ];
}

export abstract class UniqueValidator implements ValidatorConstraintInterface {
  protected constructor(protected readonly connection: Connection) {}

  public async validate<E>(value: string, args: UniqueValidationArguments<E>) {
    const [EntityClass, findCondition = args.property] = args.constraints;
    return (
      (await this.connection.getRepository(EntityClass).count({
        where:
          typeof findCondition === 'function'
            ? findCondition(args)
            : {
                [findCondition || args.property]: value,
              },
      })) <= 0
    );
  }

  public defaultMessage(args: any) {
    const [EntityClass] = args.constraints;
    const entity = EntityClass.name || 'Entity';
    return `${entity} with the same ${args.property} already exist`;
  }
}

@ValidatorConstraint({ name: 'unique', async: true })
@Injectable()
export class Unique extends UniqueValidator {
  constructor(@InjectConnection() protected readonly connection: Connection) {
    super(connection);
  }
}

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  nickname: string;

  @Column()
  @Validate(Unique, [User])
  @IsEmail()
  email: string;

  @MinLength(8)
  @Column()
  password?: string;

  @Column({ nullable: true })
  bio?: string;

  // picture?: Attachment;
}
