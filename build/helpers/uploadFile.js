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
exports.uploadFile = void 0;
const path_1 = __importDefault(require("path"));
const uuid_1 = require("uuid");
const fs_1 = __importDefault(require("fs"));
const uploadFile = (files, validExtensions = ["png", "jpg", "jpeg", "gif"], folder = "imgs") => {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        const { filename } = yield files;
        const nameParts = filename.split(".");
        const extension = nameParts[nameParts.length - 1];
        if (!validExtensions.includes(extension)) {
            return reject(`Extension ${extension} is not allowed - ${validExtensions}`);
        }
        const tempName = (0, uuid_1.v4)() + "." + extension;
        const uploadPath = path_1.default.join(__dirname, "../uploads/", folder, tempName);
        fs_1.default.createWriteStream(uploadPath);
        resolve(tempName);
    }));
};
exports.uploadFile = uploadFile;
//# sourceMappingURL=uploadFile.js.map