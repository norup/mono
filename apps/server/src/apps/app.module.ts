import { Module } from "@nestjs/common";
import { MainController } from "./app.controller";
import { ConfigModule } from "@nestjs/config";

@Module({
  controllers: [MainController],
  imports: [ConfigModule],
})
export class MainModule {}
