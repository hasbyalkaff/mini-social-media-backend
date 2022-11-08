import { CommentEntity } from 'src/comments/comment.entity/comment.entity';
import { UserEntity } from 'src/users/user.entity/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn, ManyToOne } from 'typeorm';

@Entity()
export class ContentEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    image: string;

    @Column()
    caption: string;

    @Column('date')
    created_at: Date;

    @ManyToOne(type => UserEntity, user => user.content)
    user: UserEntity;

    @OneToMany(type => CommentEntity, comment => comment.content)
    comment: CommentEntity[];
}
