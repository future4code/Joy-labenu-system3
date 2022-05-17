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
exports.getAllProducts = void 0;
const selectAllProducts_1 = __importDefault(require("../services/selectAllProducts"));
function getAllProducts(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let name = req.query.name;
            let order = req.query.order;
            const products = yield (0, selectAllProducts_1.default)(order, name);
            res.status(200).send(products);
        }
        catch (error) {
            res.send(error.message || error.sql.message);
        }
    });
}
exports.getAllProducts = getAllProducts;
//# sourceMappingURL=getAllProducts.js.map