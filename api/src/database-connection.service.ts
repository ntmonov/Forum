import { Injectable } from '@nestjs/common';
import { TypeOrmOptionsFactory } from '@nestjs/typeorm';

@Injectable()
export class DatabaseConnectionService implements TypeOrmOptionsFactory {
  createTypeOrmOptions(
    connectionName?: string,
  ):
    | ({
        retryAttempts?: number;
        retryDelay?: number;
        autoLoadEntities?: boolean;
        keepConnectionAlive?: boolean;
      } & Partial<
        import('typeorm/driver/mysql/MysqlConnectionOptions').MysqlConnectionOptions
      >)
    | ({
        retryAttempts?: number;
        retryDelay?: number;
        autoLoadEntities?: boolean;
        keepConnectionAlive?: boolean;
      } & Partial<
        import('typeorm/driver/postgres/PostgresConnectionOptions').PostgresConnectionOptions
      >)
    | ({
        retryAttempts?: number;
        retryDelay?: number;
        autoLoadEntities?: boolean;
        keepConnectionAlive?: boolean;
      } & Partial<
        import('typeorm/driver/cockroachdb/CockroachConnectionOptions').CockroachConnectionOptions
      >)
    | ({
        retryAttempts?: number;
        retryDelay?: number;
        autoLoadEntities?: boolean;
        keepConnectionAlive?: boolean;
      } & Partial<
        import('typeorm/driver/sqlite/SqliteConnectionOptions').SqliteConnectionOptions
      >)
    | ({
        retryAttempts?: number;
        retryDelay?: number;
        autoLoadEntities?: boolean;
        keepConnectionAlive?: boolean;
      } & Partial<
        import('typeorm/driver/sqlserver/SqlServerConnectionOptions').SqlServerConnectionOptions
      >)
    | ({
        retryAttempts?: number;
        retryDelay?: number;
        autoLoadEntities?: boolean;
        keepConnectionAlive?: boolean;
      } & Partial<
        import('typeorm/driver/sap/SapConnectionOptions').SapConnectionOptions
      >)
    | ({
        retryAttempts?: number;
        retryDelay?: number;
        autoLoadEntities?: boolean;
        keepConnectionAlive?: boolean;
      } & Partial<
        import('typeorm/driver/oracle/OracleConnectionOptions').OracleConnectionOptions
      >)
    | ({
        retryAttempts?: number;
        retryDelay?: number;
        autoLoadEntities?: boolean;
        keepConnectionAlive?: boolean;
      } & Partial<
        import('typeorm/driver/cordova/CordovaConnectionOptions').CordovaConnectionOptions
      >)
    | ({
        retryAttempts?: number;
        retryDelay?: number;
        autoLoadEntities?: boolean;
        keepConnectionAlive?: boolean;
      } & Partial<
        import('typeorm/driver/nativescript/NativescriptConnectionOptions').NativescriptConnectionOptions
      >)
    | ({
        retryAttempts?: number;
        retryDelay?: number;
        autoLoadEntities?: boolean;
        keepConnectionAlive?: boolean;
      } & Partial<
        import('typeorm/driver/react-native/ReactNativeConnectionOptions').ReactNativeConnectionOptions
      >)
    | ({
        retryAttempts?: number;
        retryDelay?: number;
        autoLoadEntities?: boolean;
        keepConnectionAlive?: boolean;
      } & Partial<
        import('typeorm/driver/sqljs/SqljsConnectionOptions').SqljsConnectionOptions
      >)
    | ({
        retryAttempts?: number;
        retryDelay?: number;
        autoLoadEntities?: boolean;
        keepConnectionAlive?: boolean;
      } & Partial<
        import('typeorm/driver/mongodb/MongoConnectionOptions').MongoConnectionOptions
      >)
    | ({
        retryAttempts?: number;
        retryDelay?: number;
        autoLoadEntities?: boolean;
        keepConnectionAlive?: boolean;
      } & Partial<
        import('typeorm/driver/aurora-data-api/AuroraDataApiConnectionOptions').AuroraDataApiConnectionOptions
      >)
    | ({
        retryAttempts?: number;
        retryDelay?: number;
        autoLoadEntities?: boolean;
        keepConnectionAlive?: boolean;
      } & Partial<
        import('typeorm/driver/expo/ExpoConnectionOptions').ExpoConnectionOptions
      >)
    | Promise<import('@nestjs/typeorm').TypeOrmModuleOptions> {
    return {
      name: 'default',
      type: 'mysql',
      host: process.env.DATABASE_HOST,
      port: +process.env.DATBASE_PORT,
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_DB,
      synchronize: true,
      dropSchema: false,
      logging: false,
      entities: ['dist/**/*.entity.js'],
    };
  }
}
