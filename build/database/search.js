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
Object.defineProperty(exports, "__esModule", { value: true });
exports.search = void 0;
const mongoose_1 = require("mongoose");
const models_1 = require("../models");
const validators_1 = require("../validators");
const searchUsers = (searchTerm = "") => __awaiter(void 0, void 0, void 0, function* () {
    const isMongoID = (0, mongoose_1.isValidObjectId)(searchTerm);
    if (isMongoID) {
        const user = yield models_1.UserSchema.findById(searchTerm).populate("role");
        return user ? [user] : [];
    }
    const regex = new RegExp(searchTerm, "i");
    const users = yield models_1.UserSchema.find({
        $or: [{ name: { $regex: regex } }, { email: { $regex: regex } }],
        $and: [{ active: true }],
    }).populate("role");
    return users;
});
const searchCategories = (searchTerm = "") => __awaiter(void 0, void 0, void 0, function* () {
    const isMongoID = (0, mongoose_1.isValidObjectId)(searchTerm);
    if (isMongoID) {
        const category = yield models_1.CategorySchema.findById(searchTerm).populate([
            {
                path: "user",
                populate: [{ path: "role" }],
            },
        ]);
        return category ? [category] : [];
    }
    const regex = new RegExp(searchTerm, "i");
    const categories = yield models_1.CategorySchema.find({
        name: { $regex: regex },
        active: true,
    }).populate([
        {
            path: "user",
            populate: [{ path: "role" }],
        },
    ]);
    return categories;
});
const searchProducts = (searchTerm = "") => __awaiter(void 0, void 0, void 0, function* () {
    const isMongoID = (0, mongoose_1.isValidObjectId)(searchTerm);
    if (isMongoID) {
        const product = yield models_1.ProductSchema.findById(searchTerm).populate([
            {
                path: "user",
                populate: [{ path: "role" }],
            },
            {
                path: "category",
                populate: [{ path: "user", populate: [{ path: "role" }] }],
            },
        ]);
        return product ? [product] : [];
    }
    const regex = new RegExp(searchTerm, "i");
    const products = yield models_1.ProductSchema.find({
        name: { $regex: regex },
        active: true,
    }).populate([
        {
            path: "user",
            populate: [{ path: "role" }],
        },
        {
            path: "category",
            populate: [{ path: "user", populate: [{ path: "role" }] }],
        },
    ]);
    return products;
});
const search = (params) => __awaiter(void 0, void 0, void 0, function* () {
    let { collection, term } = params;
    let results = null;
    try {
        validators_1.SearchInputValidator.searchv.valid(params);
        switch (collection) {
            case "users":
                results = yield searchUsers(term);
                break;
            case "categories":
                results = yield searchCategories(term);
                break;
            case "products":
                results = yield searchProducts(term);
                break;
            default:
                results = [];
        }
        return {
            ok: true,
            results,
            msg: "",
        };
    }
    catch (error) {
        return {
            ok: false,
            results,
            msg: error.message,
        };
    }
});
exports.search = search;
//# sourceMappingURL=search.js.map