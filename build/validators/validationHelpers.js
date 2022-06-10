"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.areValidCredentials = exports.roleExists = exports.productAlreadyExists = exports.productExists = exports.userAlreadyExists = exports.userExists = exports.categoryAlreadyExists = exports.categoryExists = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const models_1 = require("../models");
const categoryExists = (id) => __awaiter(void 0, void 0, void 0, function* () {
    if (id) {
        const category = yield models_1.CategorySchema.findById(id);
        if (!category) {
            throw new Error(`Category with id ${id} dont exists`);
        }
        else {
            return id;
        }
    }
    else
        return undefined;
});
exports.categoryExists = categoryExists;
const categoryAlreadyExists = (name) => __awaiter(void 0, void 0, void 0, function* () {
    const categoryExists = yield models_1.CategorySchema.findOne({
        name: name.toUpperCase(),
    });
    if (categoryExists) {
        throw new Error(`Category with name ${name} already exists`);
    }
    else {
        return name;
    }
});
exports.categoryAlreadyExists = categoryAlreadyExists;
const userExists = (id) => __awaiter(void 0, void 0, void 0, function* () {
    if (id) {
        const user = yield models_1.UserSchema.findById(id);
        if (!user) {
            throw new Error(`User with id ${id} dont exists`);
        }
        else {
            return id;
        }
    }
    else
        return undefined;
});
exports.userExists = userExists;
const userAlreadyExists = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const userExists = yield models_1.UserSchema.findOne({
        email: email.toUpperCase(),
    });
    if (userExists) {
        throw new Error(`User with email ${email} already exists`);
    }
    else {
        return email;
    }
});
exports.userAlreadyExists = userAlreadyExists;
const productExists = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield models_1.ProductSchema.findById(id);
    if (!product) {
        throw new Error(`Product with id ${id} dont exists`);
    }
    else {
        return id;
    }
});
exports.productExists = productExists;
const productAlreadyExists = (name) => __awaiter(void 0, void 0, void 0, function* () {
    const productExists = yield models_1.ProductSchema.findOne({
        name: name.toUpperCase(),
    });
    if (productExists) {
        throw new Error(`Product with name ${name} already exists`);
    }
    else {
        return name;
    }
});
exports.productAlreadyExists = productAlreadyExists;
const roleExists = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const role = yield models_1.RoleSchema.findById(id);
    if (!role) {
        throw new Error(`Role with id ${id} dont exists`);
    }
    else {
        return id;
    }
});
exports.roleExists = roleExists;
const areValidCredentials = (email, password) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield models_1.UserSchema.findOne({
        email: email.toUpperCase(),
    }).populate("role");
    if (!user) {
        throw new Error("Wrong Credentials");
    }
    const validPassword = bcryptjs_1.default.compareSync(password, user.password);
    if (!validPassword) {
        throw new Error("Wrong Credentials");
    }
    return user;
});
exports.areValidCredentials = areValidCredentials;
//# sourceMappingURL=validationHelpers.js.map