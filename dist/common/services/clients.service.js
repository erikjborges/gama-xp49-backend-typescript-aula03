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
exports.ClientsCommonService = void 0;
const clientes_dao_1 = __importDefault(require("../daos/clientes.dao"));
class ClientsCommonService {
    readById(resourceId) {
        return __awaiter(this, void 0, void 0, function* () {
            return clientes_dao_1.default.buscar(resourceId);
        });
    }
}
exports.ClientsCommonService = ClientsCommonService;
exports.default = new ClientsCommonService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50cy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbW1vbi9zZXJ2aWNlcy9jbGllbnRzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0VBQStDO0FBSS9DLE1BQWEsb0JBQW9CO0lBQ3ZCLFFBQVEsQ0FBQyxVQUFrQjs7WUFDN0IsT0FBTyxzQkFBVyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMxQyxDQUFDO0tBQUE7Q0FDSjtBQUpELG9EQUlDO0FBRUQsa0JBQWUsSUFBSSxvQkFBb0IsRUFBRSxDQUFDIn0=