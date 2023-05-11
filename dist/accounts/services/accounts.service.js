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
const accounts_dao_1 = __importDefault(require("../daos/accounts.dao"));
const debug_1 = __importDefault(require("debug"));
const log = (0, debug_1.default)('app:in-memory-service');
class AccountsService {
    create(resource) {
        return __awaiter(this, void 0, void 0, function* () {
            return accounts_dao_1.default.create(resource);
        });
    }
    deleteById(resourceId) {
        return __awaiter(this, void 0, void 0, function* () {
            return accounts_dao_1.default.delete(resourceId);
        });
    }
    list() {
        return __awaiter(this, void 0, void 0, function* () {
            return accounts_dao_1.default.list();
        });
    }
    updateById(resource) {
        return __awaiter(this, void 0, void 0, function* () {
            return accounts_dao_1.default.update(resource);
        });
    }
    readById(resourceId) {
        return __awaiter(this, void 0, void 0, function* () {
            return accounts_dao_1.default.read(resourceId);
        });
    }
    deposit(accountNumber, value) {
        return __awaiter(this, void 0, void 0, function* () {
            log(accountNumber, value);
            if (value <= 0) {
                throw new Error("O valor deve ser maior que zero.");
            }
            log(value);
            const account = accounts_dao_1.default.read(accountNumber);
            log(account);
            if (!account) {
                throw new Error("Conta não encontrada para depósito.");
            }
            account.balance += value;
            log(account);
            return accounts_dao_1.default.update(account);
        });
    }
    withdraw(accountNumber, value) {
        return __awaiter(this, void 0, void 0, function* () {
            if (value <= 0) {
                throw new Error("O valor deve ser maior que zero.");
            }
            const account = accounts_dao_1.default.read(accountNumber);
            if (!account) {
                throw new Error("Conta não encontrada para depósito.");
            }
            else if (account.balance < value) {
                throw new Error("Você não tem saldo suficiente para esse saque.");
            }
            account.balance -= value;
            /**
             * Aqui teria algum comando para envio do dinheiro para o cliente em um ambiente real.
             */
            return accounts_dao_1.default.update(account);
        });
    }
    transfer(sourceAccountNumber, value, targetAccountNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            let sourceAccount;
            try {
                const targetAccount = yield this.readById(targetAccountNumber);
                if (!targetAccount) {
                    throw new Error('Não foi possível encontrar os recursos na conta destino.');
                }
                sourceAccount = yield this.withdraw(sourceAccountNumber, value);
                if (!sourceAccount) {
                    throw new Error('Não foi possível encontrar os recursos na conta origem.');
                }
                else if (!('transferLimit' in sourceAccount) || !('transferLimit' in targetAccount)) {
                    throw new Error('Não é possível fazer transferencias envolvendo contas poupança.');
                }
            }
            catch (error) {
                throw error;
            }
            try {
                if (sourceAccount.transferLimit < value) {
                    throw new Error(`Valor acima do limite de transferência diário: ${sourceAccount.transferLimit}.`);
                }
                return yield this.deposit(targetAccountNumber, value);
            }
            catch (error) {
                yield this.deposit(sourceAccountNumber, value);
                throw error;
            }
        });
    }
}
exports.default = new AccountsService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudHMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hY2NvdW50cy9zZXJ2aWNlcy9hY2NvdW50cy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0VBQStDO0FBUS9DLGtEQUEwQjtBQUUxQixNQUFNLEdBQUcsR0FBb0IsSUFBQSxlQUFLLEVBQUMsdUJBQXVCLENBQUMsQ0FBQztBQUU1RCxNQUFNLGVBQWU7SUFDWCxNQUFNLENBQUMsUUFBaUI7O1lBQzFCLE9BQU8sc0JBQVcsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDeEMsQ0FBQztLQUFBO0lBRUssVUFBVSxDQUFDLFVBQWtCOztZQUMvQixPQUFPLHNCQUFXLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzFDLENBQUM7S0FBQTtJQUVLLElBQUk7O1lBQ04sT0FBTyxzQkFBVyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzlCLENBQUM7S0FBQTtJQUVLLFVBQVUsQ0FBQyxRQUFpQjs7WUFDOUIsT0FBTyxzQkFBVyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN4QyxDQUFDO0tBQUE7SUFFSyxRQUFRLENBQUMsVUFBa0I7O1lBQzdCLE9BQU8sc0JBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDeEMsQ0FBQztLQUFBO0lBRUssT0FBTyxDQUFDLGFBQXFCLEVBQUUsS0FBYTs7WUFDOUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUMxQixJQUFHLEtBQUssSUFBSSxDQUFDLEVBQUU7Z0JBQ1gsTUFBTSxJQUFJLEtBQUssQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO2FBQ3ZEO1lBQ0QsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ1gsTUFBTSxPQUFPLEdBQUcsc0JBQVcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7WUFD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