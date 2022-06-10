import { prop, getModelForClass, Ref } from "@typegoose/typegoose";
import { User } from ".";
import { Schema } from "mongoose";

export class Category {
  @prop({ type: String, required: true, unique: true })
  public name!: string;

  @prop({
    ref: "User",
    required: true,
    type: Schema.Types.ObjectId,
  })
  public user!: Ref<User>;

  @prop({ type: Boolean, default: true })
  public active!: boolean;
}

export default getModelForClass(Category);
