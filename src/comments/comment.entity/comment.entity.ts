import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CommentEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    user_id: number;

    @Column()
    content_id: number;

    @Column()
    comment: string;

    @Column('date')
    created_at: Date;
}
