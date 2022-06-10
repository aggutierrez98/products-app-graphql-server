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
exports.updateImageCloudinary = exports.updateImage = exports.uploadImage = void 0;
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const cloudinary_1 = require("cloudinary");
const models_1 = require("../models");
const helpers_1 = require("../helpers");
const validators_1 = require("../validators");
const uploadImage = ({ image, }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const fileName = yield (0, helpers_1.uploadFile)(image, undefined, "imgs");
        const filePath = `uploads/imgs/${fileName}`;
        return {
            data: {
                imagePath: filePath,
            },
            ok: true,
            msg: "",
        };
    }
    catch (error) {
        console.log(error);
        return { msg: error.message, ok: false, data: null };
    }
});
exports.uploadImage = uploadImage;
const updateImage = ({ id, collection, image, }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        validators_1.UploadInputValidator.uploadv.validate({ id, collection });
        let document;
        switch (collection) {
            case "users":
                document = yield models_1.UserSchema.findById(id);
                if (!document)
                    return {
                        msg: `User with id ${id} not exists`,
                        ok: false,
                        data: null,
                    };
                break;
            case "products":
                document = yield models_1.ProductSchema.findById(id);
                if (!document)
                    return {
                        msg: `Product with id ${id} not exists`,
                        ok: false,
                        data: null,
                    };
                break;
            default:
                return {
                    msg: `Collection ${collection} image upload not implemented yet`,
                    ok: false,
                    data: null,
                };
        }
        if (document.image) {
            const imagePath = path_1.default.join(__dirname, "../uploads", collection, document.image);
            if (fs_1.default.existsSync(imagePath)) {
                fs_1.default.unlinkSync(imagePath);
            }
        }
        const nombre = yield (0, helpers_1.uploadFile)(image, undefined, collection);
        document.image = `uploads/${collection}/${nombre}`;
        yield document.save();
        return {
            data: document,
            ok: true,
            msg: "",
        };
    }
    catch (error) {
        return { msg: error.message, ok: false, data: null };
    }
});
exports.updateImage = updateImage;
const updateImageCloudinary = ({ id, collection, image, }) => __awaiter(void 0, void 0, void 0, function* () {
    let document;
    try {
        switch (collection) {
            case "users":
                document = yield models_1.UserSchema.findById(id).populate("role");
                if (!document)
                    return {
                        msg: `User with id ${id} not exists`,
                        ok: false,
                        data: null,
                    };
                break;
            case "products":
                document = yield models_1.ProductSchema.findById(id).populate([
                    {
                        path: "user",
                        populate: [{ path: "role" }],
                    },
                    {
                        path: "category",
                        populate: [{ path: "user", populate: [{ path: "role" }] }],
                    },
                ]);
                if (!document)
                    return {
                        msg: `Product with id ${id} not exists`,
                        ok: false,
                        data: null,
                    };
                break;
            default:
                return {
                    msg: `Collection ${collection} image upload not implemented yet`,
                    ok: false,
                    data: null,
                };
        }
        if (document.image) {
            const nameArray = document.image.split("/");
            const customedUrl = nameArray.slice(-3).join("/");
            const [public_id] = customedUrl.split(".");
            cloudinary_1.v2.uploader.destroy(public_id);
        }
        const files = yield image;
        const uploader = cloudinary_1.v2.uploader.upload_stream({ folder: `productosApp/${collection}` }, (err, result) => __awaiter(void 0, void 0, void 0, function* () {
            if (err)
                throw err;
            if (result) {
                document.image = result.secure_url;
                yield document.save();
            }
        }));
        yield files.createReadStream().pipe(uploader);
        return {
            data: document,
            ok: true,
            msg: "",
        };
    }
    catch (error) {
        return { msg: error.message, ok: false, data: null };
    }
});
exports.updateImageCloudinary = updateImageCloudinary;
//# sourceMappingURL=uploads.js.map