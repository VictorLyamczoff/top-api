import { Base, TimeStamps } from "@typegoose/typegoose/lib/defaultClasses";
import { prop } from "@typegoose/typegoose";

export interface ReviewModel extends Base {
}

export class ReviewModel extends TimeStamps {
  @prop()
  name: string;

  @prop()
  titel: string;

  @prop()
  description: string;

  @prop()
  rating: string;

  @prop()
  createdAt: Date;
}
