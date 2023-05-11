import { Account } from "../dtos/account.dto";
import debug from 'debug';

const log: debug.IDebugger = debug('app:in-memory-dao');

class AccountsDAO {
    private _accounts: Account[];

    constructor(){
        this._accounts = [];
        log('Criando nova instancia de AccountsDAO');
    }

    create(account: Account): Account {
        let objAccount;
        
        account.indexId = this._accounts.length;
        objAccount = account;
        this._accounts.push(objAccount);

        return objAccount;
    }

    update(account: Account): Account | undefined {
        let objAccount;
        
        objAccount = account;

        if(objAccount.indexId === undefined)
            return;
        
        this._accounts[objAccount.indexId] = objAccount;

        return objAccount;
    }

    list(): (Account)[] {
        let objAccounts: (Account)[] = [];

        for(let account of this._accounts)
            objAccounts.push(account);

        return objAccounts;
    }

    delete(accountNumber: number): void {
        const indexId = this._accounts.findIndex((obj: Account) => {
            return obj.accountNumber === accountNumber;
        });
        log(`Delete Index: ${indexId}`);
        this._accounts.splice(indexId, 1);
    }

    read(accountNumber: number): Account | undefined {
        
        const account = this._accounts.find((obj: Account) => {
            return obj.accountNumber === accountNumber;
        });
        
        if(!account)
            return;

        return account;
    }
}

export default new AccountsDAO();