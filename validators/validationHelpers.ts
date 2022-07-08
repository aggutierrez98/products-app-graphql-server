import { ObjectId } from "mongoose";
import bcryptjs from "bcryptjs";
import {
  CategorySchema,
  ProductSchema,
  RoleSchema,
  UserSchema,
} from "../models";

export const categoryExists = async (id: ObjectId) => {
  if (id) {
    const category = await CategorySchema.findById(id);

    if (!category) {
      throw new Error(`Category with id ${id} dont exists`);
    } else {
      return id;
    }
  } else return undefined;
};

export const categoryAlreadyExists = async (name: string) => {
  const categoryExists = await CategorySchema.findOne({
    name: name.toUpperCase(),
  });

  if (categoryExists) {
    throw new Error(`Category with name ${name} already exists`);
  } else {
    return name;
  }
};

export const userExists = async (id: ObjectId) => {
  if (id === undefined) return undefined;

  const user = await UserSchema.findById(id);

  if (!user) {
    throw new Error(`User with id ${id} dont exists`);
  } else {
    return id;
  }
};

export const userAlreadyExists = async (email: string) => {
  const userExists = await UserSchema.findOne({
    email: email.toUpperCase(),
  });

  if (userExists) {
    throw new Error(`User with email ${email} already exists`);
  } else {
    return email;
  }
};

export const productExists = async (id: ObjectId) => {
  const product = await ProductSchema.findById(id);

  if (!product) {
    throw new Error(`Product with id ${id} dont exists`);
  } else {
    return id;
  }
};

export const productAlreadyExists = async (name: string) => {
  const productExists = await ProductSchema.findOne({
    name: name.toUpperCase(),
  });

  if (productExists) {
    throw new Error(`Product with name ${name} already exists`);
  } else {
    return name;
  }
};

export const roleExists = async (id: ObjectId) => {
  if (id === undefined) return undefined;

  const role = await RoleSchema.findById(id);

  if (!role) {
    throw new Error(`Role with id ${id} dont exists`);
  } else {
    return id;
  }
};

export const areValidCredentials = async (email: string, password: string) => {
  const user = await UserSchema.findOne({
    email: email.toUpperCase(),
  }).populate("role");

  if (!user) {
    throw new Error("Wrong Credentials");
  }

  const validPassword = bcryptjs.compareSync(password, user.password);
  if (!validPassword) {
    throw new Error("Wrong Credentials");
  }

  return user;
};
