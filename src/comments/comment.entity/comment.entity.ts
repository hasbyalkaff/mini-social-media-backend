import { ContentEntity } from 'src/contents/content.entity/content.entity';
import { UserEntity } from 'src/users/user.entity/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class CommentEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    comment: string;

    @Column('date')
    created_at: Date;

    @ManyToOne(type => UserEntity, user => user.comment)
    user: UserEntity;

    @ManyToOne(type => ContentEntity, content => content.comment)
    content: ContentEntity;
}
