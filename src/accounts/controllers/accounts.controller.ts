import express from 'express';
import accountsService from '../services/accounts.service';
import debug from 'debug';

const log: debug.IDebugger = debug('app:accounts-controller');

class AccountsController {
    async listAccounts(req: express.Request, res: express.Response){
        const accounts = await accountsService.list();
        res.status(200).send(accounts);
    }

    async getAccountById(req: express.Request, res: express.Response) {
        const account = await accountsService.readById(Number(req.params.accountId));
        res.status(200).send(account);
    }

    async createAccount(req: express.Request, res: express.Response) {
        const account = await accountsService.create(req.body);
        res.status(201).send(account);
    }

    async updateAccount(req: express.Request, res: express.Response) {
        const account = await accountsService.updateById(req.body);
        res.status(200).send(account);
    }

    async removeAccount(req: express.Request, res: express.Response) {
        const account = await accountsService.deleteById(Number(req.params.cpfCnpj));
        res.status(204).send();
    }

    async deposit(req: express.Request, res: express.Response) {
        try{
            const account = await accountsService.deposit(Number(req.params.accountNumber), req.body.value);
            res.status(200).send(account);
        } catch (error) {
            res.status(500).send({
                message: (error as Error).message
            });
        }
    }

    async withdraw(req: express.Request, res: express.Response) {
        try{
            const account = await accountsService.withdraw(Number(req.params.accountNumber), req.body.value);
            res.status(200).send(account);
        } catch (error) {
            res.status(500).send({
                message: (error as Error).message
            });
        }
    }

    async transfer(req: express.Request, res: express.Response) {
        try{
            const account = await accountsService.transfer(Number(req.params.accountNumber), req.body.value, req.body.targetAccountNumber);
            res.status(200).send(account);
        } catch (error) {
            res.status(500).send({
                message: (error as Error).message
            });
        }
    }
}

export default new AccountsController();