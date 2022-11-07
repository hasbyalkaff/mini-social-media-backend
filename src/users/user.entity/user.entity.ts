import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 25 })
    username: string;

    @Column()
    password: string;

    @Column()
    email: string;
}