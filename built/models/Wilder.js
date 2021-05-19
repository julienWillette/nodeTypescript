"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const WilderSchema = new mongoose_1.default.Schema({
    name: { type: String, unique: true },
    city: String,
    skills: [{ title: String, votes: Number }],
});
exports.default = mongoose_1.default.model('wilder', WilderSchema);
//# sourceMappingURL=Wilder.js.map