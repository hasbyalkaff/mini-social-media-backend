import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "socialmedia",
    entities: ["src/**/**.entity{.ts,.js}"],
    synchronize: true
};

module.exports = typeOrmConfig;