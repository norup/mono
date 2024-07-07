import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { SwaggerModule } from "@nestjs/swagger";
import { MainModule } from "./apps/app.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [".env"],
    }),
    SwaggerModule,
    MainModule,
  ],
})
export class AppModule {}
