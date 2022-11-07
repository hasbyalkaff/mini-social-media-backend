import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ContentEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    user_id: number;

    @Column()
    image: string;

    @Column()
    caption: string;

    @Column('date')
    created_at: Date;
}
