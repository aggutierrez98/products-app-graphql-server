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
exports.deleteCategory = exports.updateCategory = exports.createCategory = exports.getCategory = exports.getCategories = void 0;
const models_1 = require("../models");
const mongodb_1 = require("mongodb");
const validators_1 = require("../validators");
const getCategories = ({ limit = 5, skip = 0, }) => __awaiter(void 0, void 0, void 0, function* () {
    const query = { active: true };
    const [total, categories] = yield Promise.all([
        models_1.CategorySchema.countDocuments(query).limit(limit).skip(skip),
        models_1.CategorySchema.find(query)
            .populate([
            {
                path: "user",
                populate: [{ path: "role" }],
            },
        ])
            .skip(skip)
            .limit(limit),
    ]);
    return [total, categories];
});
exports.getCategories = getCategories;
const getCategory = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield validators_1.CategoryInputValidator.getv.validateAsync({ id });
        const category = yield models_1.CategorySchema.findById(id).populate([
            {
                path: "user",
                populate: [{ path: "role" }],
            },
        ]);
        return {
            error: null,
            data: category,
            ok: true,
        };
    }
    catch (error) {
        return {
            ok: false,
            error: { message: error.message },
            data: null,
        };
    }
});
exports.getCategory = getCategory;
const createCategory = (params) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { user, name } = params;
        yield validators_1.CategoryInputValidator.createv.validateAsync(params);
        const data = {
            name: name.toUpperCase(),
            user: (0, mongodb_1.ObjectId)(user),
        };
        const category = new models_1.CategorySchema(data);
        yield category.save();
        yield category.populate([
            {
                path: "user",
                populate: [{ path: "role" }],
            },
        ]);
        return {
            ok: true,
            error: null,
            data: category,
        };
    }
    catch (error) {
        return {
            ok: false,
            error: { message: error.message },
            data: null,
        };
    }
});
exports.createCategory = createCategory;
const updateCategory = (params) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = params, data = __rest(params, ["id"]);
        yield validators_1.CategoryInputValidator.updatev.validateAsync(params);
        if (data.name)
            data.name = data.name.toUpperCase();
        if (data.user) {
            data.user = (0, mongodb_1.ObjectId)(data.user);
        }
        const category = yield models_1.CategorySchema.findByIdAndUpdate(id, data, {
            new: true,
        }).populate([
            {
                path: "user",
                populate: [{ path: "role" }],
            },
        ]);
        return {
            ok: true,
            error: null,
            data: category,
        };
    }
    catch (error) {
        return {
            ok: false,
            error: { message: error.message },
            data: null,
        };
    }
});
exports.updateCategory = updateCategory;
const deleteCategory = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield validators_1.CategoryInputValidator.deletev.validateAsync({ id });
        const category = yield models_1.CategorySchema.findByIdAndUpdate(id, { active: false }, { new: true }).populate([
            {
                path: "user",
                populate: [{ path: "role" }],
            },
        ]);
        return {
            ok: true,
            error: null,
            data: category,
        };
    }
    catch (error) {
        return {
            ok: false,
            error: { message: error.message },
            data: null,
        };
    }
});
exports.deleteCategory = deleteCategory;
//# sourceMappingURL=categories.js.map