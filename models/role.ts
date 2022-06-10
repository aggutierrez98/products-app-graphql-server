import { prop, getModelForClass } from "@typegoose/typegoose";

export class Role {
  @prop({ type: String, required: true })
  public name!: string;
}

export default getModelForClass(Role);
