"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientsRoutes = void 0;
const common_routes_config_1 = require("../common/common.routes.config");
const clients_controller_1 = __importDefault(require("./controllers/clients.controller"));
const clients_middleware_1 = __importDefault(require("./middlewares/clients.middleware"));
class ClientsRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'ClientsRoutes');
    }
    configureRoutes() {
        this.app.route(`/clients`)
            .get(clients_controller_1.default.listClients)
            .post(clients_middleware_1.default.validateRequiredClientBodyFields, clients_middleware_1.default.validateClientRepeated, clients_controller_1.default.createClient);
        this.app.route(`/clients/:cpfCnpj`)
            .all(clients_middleware_1.default.validateClientExists)
            .get(clients_controller_1.default.getClientById)
            .put(clients_middleware_1.default.validateRequiredClientBodyFields, clients_controller_1.default.updateClient)
            .delete(clients_controller_1.default.removeClient);
        return this.app;
    }
}
exports.ClientsRoutes = ClientsRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50cy5yb3V0ZXMuY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NsaWVudHMvY2xpZW50cy5yb3V0ZXMuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLHlFQUFvRTtBQUNwRSwwRkFBaUU7QUFDakUsMEZBQWlFO0FBR2pFLE1BQWEsYUFBYyxTQUFRLHlDQUFrQjtJQUNqRCxZQUFZLEdBQXdCO1FBQ2hDLEtBQUssQ0FBQyxHQUFHLEVBQUUsZUFBZSxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVELGVBQWU7UUFDWCxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUM7YUFDckIsR0FBRyxDQUFDLDRCQUFpQixDQUFDLFdBQVcsQ0FBQzthQUNsQyxJQUFJLENBQ0QsNEJBQWlCLENBQUMsZ0NBQWdDLEVBQ2xELDRCQUFpQixDQUFDLHNCQUFzQixFQUN4Qyw0QkFBaUIsQ0FBQyxZQUFZLENBQ2pDLENBQUM7UUFFRixJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQzthQUN0QixHQUFHLENBQUMsNEJBQWlCLENBQUMsb0JBQW9CLENBQUM7YUFDM0MsR0FBRyxDQUFDLDRCQUFpQixDQUFDLGFBQWEsQ0FBQzthQUNwQyxHQUFHLENBQ0EsNEJBQWlCLENBQUMsZ0NBQWdDLEVBQ2xELDRCQUFpQixDQUFDLFlBQVksQ0FDakM7YUFDQSxNQUFNLENBQUMsNEJBQWlCLENBQUMsWUFBWSxDQUFDLENBQUM7UUFFeEQsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ3BCLENBQUM7Q0FDSjtBQXpCRCxzQ0F5QkMifQ==