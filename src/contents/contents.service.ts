import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm'
import { ContentEntity } from './content.entity/content.entity';
import { pick as _pick } from 'lodash'

@Injectable()
export class ContentsService {
    constructor(@InjectRepository(ContentEntity) private contentRepository: Repository<ContentEntity>){}

    async getAllContents(): Promise<ContentEntity[]> {
        return await this.contentRepository.find({
            order: {
                created_at: "DESC"
            },
            relations: {
                user: true
            }
        });
    }

    async updateContent(content: ContentEntity) {
        this.contentRepository.save(content);
    }

    async getOneContent(_id: number): Promise<ContentEntity> {
        return await this.contentRepository.findOne({
            where: [{ "id": _id}],
            relations: {
                user: true,
                comment: {
                    user: true
                }
            }
        });
    }
}
