"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const getAllUsers_1 = require("./endpoints/getAllUsers");
app_1.default.get("/users", getAllUsers_1.getAllUsers);
app_1.default.get("/products", getAllUsers_1.getAllUsers);
//# sourceMappingURL=index.js.map