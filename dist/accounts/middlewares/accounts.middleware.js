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
const accounts_service_1 = __importDefault(require("../services/accounts.service"));
const clients_service_1 = __importDefault(require("../../common/services/clients.service"));
const debug_1 = __importDefault(require("debug"));
const log = (0, debug_1.default)('app:users-middleware');
class AccountsMiddleware {
    validateRequiredAccountBodyFields(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            if (req.body && req.body.clientId) {
                next();
            }
            else {
                res.status(400).send({ error: `Verifique os campos obrigatórios para criar uma conta.` });
            }
        });
    }
    validateClientExists(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield clients_service_1.default.readById(Number(req.body.clientId));
            if (user) {
                next();
            }
            else {
                res.status(404).send({ error: `Usuário ${req.body.clientId} não existe` });
            }
        });
    }
    validateAccountExists(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield accounts_service_1.default.readById(Number(req.params.accountNumber));
            if (user) {
                next();
            }
            else {
                res.status(404).send({ error: `Account ${req.params.accountNumber} não existe` });
            }
        });
    }
    validateAccountRepeated(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            let resourceID = req.body.accountNumber;
            const account = yield accounts_service_1.default.readById(resourceID);
            if (!account) {
                next();
            }
            else {
                res.status(409).send({ error: `Conta ${resourceID} já existe` });
            }
        });
    }
}
exports.default = new AccountsMiddleware();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudHMubWlkZGxld2FyZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hY2NvdW50cy9taWRkbGV3YXJlcy9hY2NvdW50cy5taWRkbGV3YXJlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ0Esb0ZBQTJEO0FBQzNELDRGQUFtRTtBQUNuRSxrREFBMEI7QUFFMUIsTUFBTSxHQUFHLEdBQW9CLElBQUEsZUFBSyxFQUFDLHNCQUFzQixDQUFDLENBQUM7QUFFM0QsTUFBTSxrQkFBa0I7SUFDZCxpQ0FBaUMsQ0FBQyxHQUFvQixFQUFFLEdBQXFCLEVBQUUsSUFBMEI7O1lBQzNHLElBQUksR0FBRyxDQUFDLElBQUksSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDL0IsSUFBSSxFQUFFLENBQUM7YUFDVjtpQkFBTTtnQkFDSCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFDLEtBQUssRUFBRSx3REFBd0QsRUFBQyxDQUFDLENBQUM7YUFDM0Y7UUFDTCxDQUFDO0tBQUE7SUFFSyxvQkFBb0IsQ0FBQyxHQUFvQixFQUFFLEdBQXFCLEVBQUUsSUFBMEI7O1lBQzlGLE1BQU0sSUFBSSxHQUFHLE1BQU0seUJBQWMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUN0RSxJQUFJLElBQUksRUFBRTtnQkFDTixJQUFJLEVBQUUsQ0FBQzthQUNWO2lCQUFNO2dCQUNILEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUMsS0FBSyxFQUFFLFdBQVcsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLGFBQWEsRUFBQyxDQUFDLENBQUM7YUFDNUU7UUFDTCxDQUFDO0tBQUE7SUFFSyxxQkFBcUIsQ0FBQyxHQUFvQixFQUFFLEdBQXFCLEVBQUUsSUFBMEI7O1lBQy9GLE1BQU0sSUFBSSxHQUFHLE1BQU0sMEJBQWUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztZQUM5RSxJQUFJLElBQUksRUFBRTtnQkFDTixJQUFJLEVBQUUsQ0FBQzthQUNWO2lCQUFNO2dCQUNILEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUMsS0FBSyxFQUFFLFdBQVcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxhQUFhLGFBQWEsRUFBQyxDQUFDLENBQUM7YUFDbkY7UUFDTCxDQUFDO0tBQUE7SUFFSyx1QkFBdUIsQ0FBQyxHQUFvQixFQUFFLEdBQXFCLEVBQUUsSUFBMEI7O1lBQ2pHLElBQUksVUFBVSxHQUFXLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO1lBQ2hELE1BQU0sT0FBTyxHQUFHLE1BQU0sMEJBQWUsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDM0QsSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDVixJQUFJLEVBQUUsQ0FBQzthQUNWO2lCQUFNO2dCQUNILEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUMsS0FBSyxFQUFFLFNBQVMsVUFBVSxZQUFZLEVBQUMsQ0FBQyxDQUFDO2FBQ2xFO1FBQ0wsQ0FBQztLQUFBO0NBQ0o7QUFFRCxrQkFBZSxJQUFJLGtCQUFrQixFQUFFLENBQUMifQ==