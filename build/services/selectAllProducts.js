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
const connection_1 = require("../data/connection");
function selectAllProducts(order, name) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield (0, connection_1.connection)("labecommerce_products")
            .select()
            .where("labecommerce_products.name", "like", `%${name}%`)
            .orderBy("labecommerce_products.price", order);
        return result;
    });
}
exports.default = selectAllProducts;
//# sourceMappingURL=selectAllProducts.js.map