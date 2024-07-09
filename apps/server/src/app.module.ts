import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { SwaggerModule } from "@nestjs/swagger";
import { MainModule } from "./apps/app.module";
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [".env"],
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async () => {
        return {
          uri: `mongodb://localhost:27017`,
          dbName: "examples",
        };
      },
      inject: [ConfigService],
    }),
    SwaggerModule,
    MainModule,
  ],
})
export class AppModule {}
