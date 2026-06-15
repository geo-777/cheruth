import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from '../users/user.entity';
import { Click } from '../analytics/entities/clicks.entity';
import { OneToMany } from 'typeorm';
@Entity('urls')
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

  @Column({
    type: 'varchar',
    nullable: true,
    length: 100,
  })
  password?: string;
  @ManyToOne(() => User, (user) => user.urls, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  user!: User;

  @OneToMany(() => Click, (click) => click.url)
  clicks!: Click[];
}
