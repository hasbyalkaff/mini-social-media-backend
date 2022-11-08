import { CommentEntity } from 'src/comments/comment.entity/comment.entity';
import { ContentEntity } from 'src/contents/content.entity/content.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

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

    @OneToMany(type => ContentEntity, content => content.user)
    content: ContentEntity[];

    @OneToMany(type => CommentEntity, comment => comment.user)
    comment: CommentEntity[];
}
