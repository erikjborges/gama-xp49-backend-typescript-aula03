import AccountsDao from "../daos/accounts.dao";
import { List } from "../../common/interfaces/crud/list.interface";
import { Create } from "../../common/interfaces/crud/create.interface";
import { Read } from "../../common/interfaces/crud/read.interface";
import { Update } from "../../common/interfaces/crud/update.interface";
import { Delete } from "../../common/interfaces/crud/delete.interface";
import { Account } from "../dtos/account.dto";

import debug from 'debug';

const log: debug.IDebugger = debug('app:in-memory-service');

class AccountsService implements List, Create, Read, Update, Delete {
    async create(resource: Account): Promise<Account> {
        return AccountsDao.create(resource);
    }

    async deleteById(resourceId: number): Promise<void> {
        return AccountsDao.delete(resourceId);
    }

    async list(): Promise<Account[]> {
        return AccountsDao.list();
    }

    async updateById(resource: Account): Promise<Account | undefined> {
        return AccountsDao.update(resource);
    }

    async readById(resourceId: number): Promise<Account | undefined> {
        return AccountsDao.read(resourceId);
    }

    async deposit(accountNumber: number, value: number): Promise<Account | undefined> {
        log(accountNumber, value);
        if(value <= 0) {
            throw new Error("O valor deve ser maior que zero.");
        }
        log(value);
        const account = AccountsDao.read(accountNumber);
        log(account);
        if(!account){
            throw new Error("Conta não encontrada para depósito.");
        }

        account.balance += value;
        log(account);
        return AccountsDao.update(account);
    }

    async withdraw(accountNumber: number, value: number): Promise<Account | undefined> {
        
        if(value <= 0) {
            throw new Error("O valor deve ser maior que zero.");
        }
        
        const account = AccountsDao.read(accountNumber);
        
        if(!account) {
            throw new Error("Conta não encontrada para depósito.");
        } else if (account.balance < value) {
            throw new Error("Você não tem saldo suficiente para esse saque.");
        }

        account.balance -= value;
        
        /**
         * Aqui teria algum comando para envio do dinheiro para o cliente em um ambiente real.
         */

        return AccountsDao.update(account);
    }

    async transfer(sourceAccountNumber: number, value: number, targetAccountNumber: number): Promise<Account | undefined>{
        let sourceAccount: Account | undefined;
        try{
            const targetAccount = await this.readById(targetAccountNumber);
            if(!targetAccount){
                throw new Error('Não foi possível encontrar os recursos na conta destino.');
            }

            sourceAccount = await this.withdraw(sourceAccountNumber, value);

            if(!sourceAccount){
                throw new Error('Não foi possível encontrar os recursos na conta origem.');
            } else if(!('transferLimit' in sourceAccount) || !('transferLimit' in targetAccount)) {
                throw new Error('Não é possível fazer transferencias envolvendo contas poupança.');
            }
        } catch(error) {
            throw error;
        }
        
        try{
            if(sourceAccount.transferLimit < value){
                throw new Error(`Valor acima do limite de transferência diário: ${sourceAccount.transferLimit}.`);
            }

            return await this.deposit(targetAccountNumber, value);
        } catch(error) {
            await this.deposit(sourceAccountNumber, value);
            throw error;
        }
    }
}

export default new AccountsService();