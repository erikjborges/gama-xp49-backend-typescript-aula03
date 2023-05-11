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
const debug_1 = __importDefault(require("debug"));
const log = (0, debug_1.default)('app:accounts-controller');
class AccountsController {
    listAccounts(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const accounts = yield accounts_service_1.default.list();
            res.status(200).send(accounts);
        });
    }
    getAccountById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const account = yield accounts_service_1.default.readById(Number(req.params.accountId));
            res.status(200).send(account);
        });
    }
    createAccount(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const account = yield accounts_service_1.default.create(req.body);
            res.status(201).send(account);
        });
    }
    updateAccount(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const account = yield accounts_service_1.default.updateById(req.body);
            res.status(200).send(account);
        });
    }
    removeAccount(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const account = yield accounts_service_1.default.deleteById(Number(req.params.cpfCnpj));
            res.status(204).send();
        });
    }
    deposit(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const account = yield accounts_service_1.default.deposit(Number(req.params.accountNumber), req.body.value);
                res.status(200).send(account);
            }
            catch (error) {
                res.status(500).send({
                    message: error.message
                });
            }
        });
    }
    withdraw(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const account = yield accounts_service_1.default.withdraw(Number(req.params.accountNumber), req.body.value);
                res.status(200).send(account);
            }
            catch (error) {
                res.status(500).send({
                    message: error.message
                });
            }
        });
    }
    transfer(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const account = yield accounts_service_1.default.transfer(Number(req.params.accountNumber), req.body.value, req.body.targetAccountNumber);
                res.status(200).send(account);
            }
            catch (error) {
                res.status(500).send({
                    message: error.message
                });
            }
        });
    }
}
exports.default = new AccountsController();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudHMuY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hY2NvdW50cy9jb250cm9sbGVycy9hY2NvdW50cy5jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ0Esb0ZBQTJEO0FBQzNELGtEQUEwQjtBQUUxQixNQUFNLEdBQUcsR0FBb0IsSUFBQSxlQUFLLEVBQUMseUJBQXlCLENBQUMsQ0FBQztBQUU5RCxNQUFNLGtCQUFrQjtJQUNkLFlBQVksQ0FBQyxHQUFvQixFQUFFLEdBQXFCOztZQUMxRCxNQUFNLFFBQVEsR0FBRyxNQUFNLDBCQUFlLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDOUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbkMsQ0FBQztLQUFBO0lBRUssY0FBYyxDQUFDLEdBQW9CLEVBQUUsR0FBcUI7O1lBQzVELE1BQU0sT0FBTyxHQUFHLE1BQU0sMEJBQWUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUM3RSxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNsQyxDQUFDO0tBQUE7SUFFSyxhQUFhLENBQUMsR0FBb0IsRUFBRSxHQUFxQjs7WUFDM0QsTUFBTSxPQUFPLEdBQUcsTUFBTSwwQkFBZSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdkQsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbEMsQ0FBQztLQUFBO0lBRUssYUFBYSxDQUFDLEdBQW9CLEVBQUUsR0FBcUI7O1lBQzNELE1BQU0sT0FBTyxHQUFHLE1BQU0sMEJBQWUsQ0FB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