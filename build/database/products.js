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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.updateProduct = exports.createProduct = exports.getProduct = exports.getProducts = void 0;
const models_1 = require("../models");
const mongodb_1 = require("mongodb");
const validators_1 = require("../validators");
const getProducts = ({ limit = 5, skip = 0, }) => __awaiter(void 0, void 0, void 0, function* () {
    const query = { active: true };
    const [total, products] = yield Promise.all([
        models_1.ProductSchema.countDocuments(query).limit(limit).skip(skip),
        models_1.ProductSchema.find(query)
            .populate([
            {
                path: "user",
                populate: [{ path: "role" }],
            },
            {
                path: "category",
                populate: [{ path: "user", populate: [{ path: "role" }] }],
            },
        ])
            .skip(skip)
            .limit(limit),
    ]);
    return [total, products];
});
exports.getProducts = getProducts;
const getProduct = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield validators_1.ProductInputValidator.getv.validateAsync({ id });
        const product = yield models_1.ProductSchema.findById(id).populate([
            {
                path: "user",
                populate: [{ path: "role" }],
            },
            {
                path: "category",
                populate: [{ path: "user", populate: [{ path: "role" }] }],
            },
        ]);
        return {
            msg: "",
            data: product,
            ok: true,
        };
    }
    catch (error) {
        return {
            ok: false,
            msg: error.message,
            data: null,
        };
    }
});
exports.getProduct = getProduct;
const createProduct = (params) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield validators_1.ProductInputValidator.createv.validateAsync(params);
        const dataToDB = Object.assign(Object.assign({}, params), { name: params.name.toUpperCase(), category: (0, mongodb_1.ObjectId)(params.category), user: (0, mongodb_1.ObjectId)(params.user) });
        const product = new models_1.ProductSchema(dataToDB);
        yield product.save();
        yield product.populate([
            {
                path: "user",
                populate: [{ path: "role" }],
            },
            {
                path: "category",
                populate: [{ path: "user", populate: [{ path: "role" }] }],
            },
        ]);
        return {
            ok: true,
            msg: "",
            data: product,
        };
    }
    catch (error) {
        return {
            ok: false,
            msg: error.message,
            data: null,
        };
    }
});
exports.createProduct = createProduct;
const updateProduct = (params) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = params, data = __rest(params, ["id"]);
        yield validators_1.ProductInputValidator.updatev.validateAsync(params);
        if (data.name)
            data.name = data.name.toUpperCase();
        if (data.user)
            data.user = (0, mongodb_1.ObjectId)(data.user);
        if (data.category)
            data.category = (0, mongodb_1.ObjectId)(data.category);
        const product = yield models_1.ProductSchema.findByIdAndUpdate(id, data, {
            new: true,
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
        return {
            ok: true,
            msg: "",
            data: product,
        };
    }
    catch (error) {
        return {
            ok: false,
            msg: error.message,
            data: null,
        };
    }
});
exports.updateProduct = updateProduct;
const deleteProduct = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield validators_1.ProductInputValidator.deletev.validateAsync({ id });
        const product = yield models_1.ProductSchema.findByIdAndUpdate(id, { active: false }, { new: true }).populate([
            {
                path: "user",
                populate: [{ path: "role" }],
            },
            {
                path: "category",
                populate: [{ path: "user", populate: [{ path: "role" }] }],
            },
        ]);
        return {
            ok: true,
            msg: "",
            data: product,
        };
    }
    catch (error) {
        return {
            ok: false,
            msg: error.message,
            data: null,
        };
    }
});
exports.deleteProduct = deleteProduct;
//# sourceMappingURL=products.js.map