import { CommonRoutesConfig } from "../common/common.routes.config";
import AccountsController from "./controllers/accounts.controller";
import AccountsMiddleware from "./middlewares/accounts.middleware";
import express from "express";

export class AccountsRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'AccountsRoutes');
    }

    configureRoutes(): express.Application {
        this.app.route(`/accounts`)
            .get(AccountsController.listAccounts)
            .post(
                AccountsMiddleware.validateRequiredAccountBodyFields,
                AccountsMiddleware.validateClientExists,
                AccountsMiddleware.validateAccountRepeated,
                AccountsController.createAccount,
            );

            this.app.route(`/accounts/:accountNumber`)
                        .all(AccountsMiddleware.validateAccountExists)
                        .get(AccountsController.getAccountById)
                        .put(
                            AccountsMiddleware.validateRequiredAccountBodyFields,
                            AccountsController.updateAccount
                        )
                        .delete(
                            AccountsMiddleware.validateAccountExists,
                            AccountsController.removeAccount
                            );

            this.app.route(`/accounts/:accountNumber/deposit`)
                        .post(
                            AccountsMiddleware.validateAccountExists,
                            AccountsController.deposit
                        );

            this.app.route(`/accounts/:accountNumber/withdraw`)
                        .post(
                            AccountsMiddleware.validateAccountExists,
                            AccountsController.withdraw
                        );

            this.app.route(`/accounts/:accountNumber/transfer`)
                        .post(
                            AccountsMiddleware.validateAccountExists,
                            AccountsController.transfer
                        );

        return this.app;
    }
}