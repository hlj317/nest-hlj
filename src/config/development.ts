import * as redisStore from 'cache-manager-redis-store';
export default {
    // 端口
    port:  parseInt(process.env.PORT, 10) || 3000,
    // 数据库配置
    DATABASE_CONFIG: {
        type: 'mysql',
        host: 'rm-bp1105f7q5o9ed6hk.mysql.rds.aliyuncs.com',
        port: 3306,
        username: 'hlj317',
        password: 'Xhym0821',
        database: 'nest',
        timezone: 'UTC',
        charset: 'utf8mb4',
        synchronize: true,
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        logging: true,
    },
    // 缓存配置
    REDIS_CONFIG: {
        store: redisStore,
        port: 6379,
        host: 'localhost',
        ttl: 60 * 60 * 24 * 30
    }
};