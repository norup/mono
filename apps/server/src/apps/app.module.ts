import { Module } from "@nestjs/common";
import { MainController } from "./app.controller";
import { ConfigModule } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import { Example, ExampleSchema } from "src/schemas/example.schema";

@Module({
  controllers: [MainController],
  imports: [
    ConfigModule,
    MongooseModule.forFeature([{ name: Example.name, schema: ExampleSchema }]),
  ],
})
export class MainModule {}
