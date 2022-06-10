"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const typegoose_1 = require("@typegoose/typegoose");
const _1 = require(".");
const mongoose_1 = require("mongoose");
class Product {
}
__decorate([
    (0, typegoose_1.prop)({ type: String, required: true, unique: true }),
    __metadata("design:type", String)
], Product.prototype, "name", void 0);
__decorate([
    (0, typegoose_1.prop)({ type: String }),
    __metadata("design:type", String)
], Product.prototype, "description", void 0);
__decorate([
    (0, typegoose_1.prop)({ type: Number, required: true }),
    __metadata("design:type", Number)
], Product.prototype, "price", void 0);
__decorate([
    (0, typegoose_1.prop)({ type: String }),
    __metadata("design:type", String)
], Product.prototype, "image", void 0);
__decorate([
    (0, typegoose_1.prop)({
        ref: "User",
        required: true,
        type: mongoose_1.Schema.Types.ObjectId,
    }),
    __metadata("design:type", Object)
], Product.prototype, "user", void 0);
__decorate([
    (0, typegoose_1.prop)({ ref: () => _1.Category, required: true, type: mongoose_1.Schema.Types.ObjectId }),
    __metadata("design:type", Object)
], Product.prototype, "category", void 0);
__decorate([
    (0, typegoose_1.prop)({ type: Boolean, default: false }),
    __metadata("design:type", Boolean)
], Product.prototype, "available", void 0);
__decorate([
    (0, typegoose_1.prop)({ type: Boolean, default: true }),
    __metadata("design:type", Boolean)
], Product.prototype, "active", void 0);
exports.Product = Product;
exports.default = (0, typegoose_1.getModelForClass)(Product);
//# sourceMappingURL=product.js.map