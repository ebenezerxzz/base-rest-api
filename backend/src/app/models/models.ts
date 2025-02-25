import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class UserRegisters {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  pass: string;

  @Column()
  email: string;

  @Column()
  phone: string;
}