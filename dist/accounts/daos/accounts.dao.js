"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const debug_1 = __importDefault(require("debug"));
const log = (0, debug_1.default)('app:in-memory-dao');
class AccountsDAO {
    constructor() {
        this._accounts = [];
        log('Criando nova instancia de AccountsDAO');
    }
    create(account) {
        let objAccount;
        account.indexId = this._accounts.length;
        objAccount = account;
        this._accounts.push(objAccount);
        return objAccount;
    }
    update(account) {
        let objAccount;
        objAccount = account;
        if (objAccount.indexId === undefined)
            return;
        this._accounts[objAccount.indexId] = objAccount;
        return objAccount;
    }
    list() {
        let objAccounts = [];
        for (let account of this._accounts)
            objAccounts.push(account);
        return objAccounts;
    }
    delete(accountNumber) {
        const indexId = this._accounts.findIndex((obj) => {
            return obj.accountNumber === accountNumber;
        });
        log(`Delete Index: ${indexId}`);
        this._accounts.splice(indexId, 1);
    }
    read(accountNumber) {
        const account = this._accounts.find((obj) => {
            return obj.accountNumber === accountNumber;
        });
        if (!account)
            return;
        return account;
    }
}
exports.default = new AccountsDAO();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudHMuZGFvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FjY291bnRzL2Rhb3MvYWNjb3VudHMuZGFvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0Esa0RBQTBCO0FBRTFCLE1BQU0sR0FBRyxHQUFvQixJQUFBLGVBQUssRUFBQyxtQkFBbUIsQ0FBQyxDQUFDO0FBRXhELE1BQU0sV0FBVztJQUdiO1FBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDcEIsR0FBRyxDQUFDLHVDQUF1QyxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVELE1BQU0sQ0FBQyxPQUFnQjtRQUNuQixJQUFJLFVBQVUsQ0FBQztRQUVmLE9BQU8sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUM7UUFDeEMsVUFBVSxHQUFHLE9BQU8sQ0FBQztRQUNyQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUVoQyxPQUFPLFVBQVUsQ0FBQztJQUN0QixDQUFDO0lBRUQsTUFBTSxDQUFDLE9BQWdCO1FBQ25CLElBQUksVUFBVSxDQUFDO1FBRWYsVUFBVSxHQUFHLE9BQU8sQ0FBQztRQUVyQixJQUFHLFVBQVUsQ0FBQyxPQUFPLEtBQUssU0FBUztZQUMvQixPQUFPO1FBRVgsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLEdBQUcsVUFBVSxDQUFDO1FBRWhELE9BQU8sVUFBVSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxJQUFJO1FBQ0EsSUFBSSxXQUFXLEdBQWdCLEVBQUUsQ0FBQztRQUVsQyxLQUFJLElBQUksT0FBTyxJQUFJLElBQUksQ0FBQyxTQUFTO1lBQzdCLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFOUIsT0FBTyxXQUFXLENBQUM7SUFDdkIsQ0FBQztJQUVELE1BQU0sQ0FBQyxhQUFxQjtRQUN4QixNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQVksRUFBRSxFQUFFO1lBQ3RELE9BQU8sR0FBRyxDQUFDLGFBQWEsS0FBSyxhQUFhLENBQUM7UUFDL0MsQ0FBQyxDQUFDLENBQUM7UUFDSCxHQUFHLENBQUMsaUJBQWlCLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFRCxJQUFJLENBQUMsYUFBcUI7UUFFdEIsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFZLEVBQUUsRUFBRTtZQUNqRCxPQUFPLEdBQUcsQ0FBQyxhQUFhLEtBQUssYUFBYSxDQUFDO1FBQy9DLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBRyxDQUFDLE9BQU87WUFDUCxPQUFPO1FBRVgsT0FBTyxPQUFPLENBQUM7SUFDbkIsQ0FBQztDQUNKO0FBRUQsa0JBQWUsSUFBSSxXQUFXLEVBQUUsQ0FBQyJ9