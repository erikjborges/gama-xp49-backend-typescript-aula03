import express from 'express';
import accountsService from '../services/accounts.service';
import clientsService from '../../common/services/clients.service';
import debug from 'debug';

const log: debug.IDebugger = debug('app:users-middleware');

class AccountsMiddleware {
    async validateRequiredAccountBodyFields(req: express.Request, res: express.Response, next: express.NextFunction){
        if (req.body && req.body.clientId) {
            next();
        } else {
            res.status(400).send({error: `Verifique os campos obrigatórios para criar uma conta.`});
        }
    }

    async validateClientExists(req: express.Request, res: express.Response, next: express.NextFunction) {
        const user = await clientsService.readById(Number(req.body.clientId));
        if (user) {
            next();
        } else {
            res.status(404).send({error: `Usuário ${req.body.clientId} não existe`});
        }
    }

    async validateAccountExists(req: express.Request, res: express.Response, next: express.NextFunction) {
        const user = await accountsService.readById(Number(req.params.accountNumber));
        if (user) {
            next();
        } else {
            res.status(404).send({error: `Account ${req.params.accountNumber} não existe`});
        }
    }

    async validateAccountRepeated(req: express.Request, res: express.Response, next: express.NextFunction) {
        let resourceID: number = req.body.accountNumber;
        const account = await accountsService.readById(resourceID);
        if (!account) {
            next();
        } else {
            res.status(409).send({error: `Conta ${resourceID} já existe`});
        }
    }
}

export default new AccountsMiddleware();