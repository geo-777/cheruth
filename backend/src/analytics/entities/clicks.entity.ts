import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Url } from '../../urls/url.entity';
@Entity('clicks')
@Index(['url', 'createdAt'])
export class Click {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => Url, (url) => url.clicks, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  @Index()
  url!: Url;

  @Column({ type: 'varchar', length: 300, nullable: true })
  userAgent!: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  browser!: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  device!: string;

  @CreateDateColumn()
  @Index()
  createdAt!: Date;
}
