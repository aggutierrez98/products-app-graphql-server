import { prop, getModelForClass, Ref } from "@typegoose/typegoose";
import { User, Category } from ".";
import { Schema } from "mongoose";

export class Product {
  @prop({ type: String, required: true, unique: true })
  public name!: string;

  @prop({ type: String })
  public description?: string;

  @prop({ type: Number, required: true })
  public price!: number;

  @prop({ type: String })
  public image?: string;

  @prop({
    ref: "User",
    required: true,
    type: Schema.Types.ObjectId,
  })
  public user: Ref<User>;

  @prop({ ref: () => Category, required: true, type: Schema.Types.ObjectId })
  public category: Ref<Category>;

  @prop({ type: Boolean, default: false })
  public available!: boolean;

  @prop({ type: Boolean, default: true })
  public active!: boolean;
}

export default getModelForClass(Product);
