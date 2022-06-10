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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.createUser = exports.getUsers = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const models_1 = require("../models");
const helpers_1 = require("../helpers");
const validators_1 = require("../validators");
const getUsers = ({ limit = 5, skip = 0, }) => __awaiter(void 0, void 0, void 0, function* () {
    const query = { active: true };
    const [total, users] = yield Promise.all([
        models_1.UserSchema.countDocuments(query).limit(limit).skip(skip),
        models_1.UserSchema.find(query).limit(limit).skip(skip).populate("role"),
    ]);
    return [total, users];
});
exports.getUsers = getUsers;
const createUser = (params) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, password, role } = params;
        yield validators_1.UserInputValidator.createv.validateAsync(params);
        const emailToSave = email.toUpperCase();
        const user = new models_1.UserSchema({ name, email: emailToSave, password, role });
        const salt = bcryptjs_1.default.genSaltSync();
        user.password = bcryptjs_1.default.hashSync(password, salt);
        yield user.save();
        yield user.populate("role");
        const token = yield (0, helpers_1.generateJWT)(user.id);
        return {
            ok: true,
            msg: "",
            data: user,
            token,
        };
    }
    catch (error) {
        return {
            ok: false,
            msg: error.message,
            data: null,
            token: null,
        };
    }
});
exports.createUser = createUser;
const updateUser = (params) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id, password, role, google, email } = params, rest = __rest(params, ["id", "password", "role", "google", "email"]);
        yield validators_1.UserInputValidator.updatev.validateAsync(params);
        const updateData = Object.assign(Object.assign({}, rest), { password });
        if (password) {
            const salt = bcryptjs_1.default.genSaltSync();
            updateData.password = bcryptjs_1.default.hashSync(password, salt);
        }
        const user = yield models_1.UserSchema.findByIdAndUpdate(id, updateData, {
            new: true,
        }).populate("role");
        return {
            ok: true,
            msg: "",
            data: user,
            token: null,
        };
    }
    catch (error) {
        return {
            ok: false,
            msg: error.message,
            data: null,
            token: null,
        };
    }
});
exports.updateUser = updateUser;
const deleteUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield validators_1.UserInputValidator.deletev.validateAsync({ id });
        const user = yield models_1.UserSchema.findByIdAndUpdate(id, { active: false }, { new: true }).populate("role");
        return {
            ok: true,
            msg: "",
            data: user,
            token: null,
        };
    }
    catch (error) {
        return {
            ok: false,
            msg: error.message,
            data: null,
            token: null,
        };
    }
});
exports.deleteUser = deleteUser;
//# sourceMappingURL=users.js.map