import { prop, getModelForClass, Ref } from "@typegoose/typegoose";
import { Role } from ".";
import { Schema } from "mongoose";

export class User {
  @prop({ type: String, required: true })
  public name!: string;

  @prop({ type: String, required: true, unique: true })
  public email!: string;

  @prop({ type: String, required: true })
  public password!: string;

  @prop({ type: String })
  public image?: string;

  @prop({
    ref: () => Role,
    required: true,
    type: Schema.Types.ObjectId,
  })
  public role: Ref<Role>;

  @prop({ type: Boolean, required: true, default: true })
  public active!: boolean;

  @prop({ type: Boolean, required: true, default: false })
  public google: boolean = false;
}

export default getModelForClass(User);
