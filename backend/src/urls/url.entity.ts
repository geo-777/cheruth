import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Url {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({
    type: 'varchar',
    length: 500,
  })
  originalUrl!: string;

  @Column({
    type: 'varchar',
    length: 200,
    nullable: true,
  })
  title?: string;

  @Column({
    type: 'timestamp',
    nullable: true,
  })
  expiresAt?: Date;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  @Column({
    type: 'varchar',
    length: 10,
    unique: true,
  })
  shortCode!: string;

  @Column({
    default: true,
  })
  isActive!: boolean;
}
