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
const clientes_dao_1 = __importDefault(require("../../common/daos/clientes.dao"));
const clients_service_1 = require("../../common/services/clients.service");
const viacepfactory_api_1 = require("../../common/apis/viacepfactory.api");
class ClientsService extends clients_service_1.ClientsCommonService {
    constructor(_viaCep, _apiCep) {
        super();
        this._viaCep = _viaCep;
        this._apiCep = _apiCep;
    }
    create(resource) {
        return __awaiter(this, void 0, void 0, function* () {
            resource.endereco = yield this._viaCep.preencheEndereco(resource.cep);
            if (!resource.endereco) {
                resource.endereco = yield this._apiCep.preencheEndereco(resource.cep);
            }
            return clientes_dao_1.default.cadastrar(resource);
        });
    }
    deleteById(resourceId) {
        return __awaiter(this, void 0, void 0, function* () {
            return clientes_dao_1.default.excluir(resourceId);
        });
    }
    list() {
        return __awaiter(this, void 0, void 0, function* () {
            return clientes_dao_1.default.listar();
        });
    }
    updateById(resource) {
        return __awaiter(this, void 0, void 0, function* () {
            return clientes_dao_1.default.atualizar(resource);
        });
    }
}
exports.default = new ClientsService(new viacepfactory_api_1.ViaCepFactory(), new viacepfactory_api_1.ViaCepFactory());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50cy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NsaWVudHMvc2VydmljZXMvY2xpZW50cy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsa0ZBQXlEO0FBT3pELDJFQUE2RTtBQUM3RSwyRUFBb0U7QUFJcEUsTUFBTSxjQUFlLFNBQVEsc0NBQW9CO0lBRTdDLFlBQW9CLE9BQW1CLEVBQVUsT0FBbUI7UUFDaEUsS0FBSyxFQUFFLENBQUM7UUFEUSxZQUFPLEdBQVAsT0FBTyxDQUFZO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBWTtJQUVwRSxDQUFDO0lBRUssTUFBTSxDQUFDLFFBQW9COztZQUU3QixRQUFRLENBQUMsUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7WUFFdEUsSUFBRyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUM7Z0JBQ2xCLFFBQVEsQ0FBQyxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUN6RTtZQUVELE9BQU8sc0JBQVcsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDM0MsQ0FBQztLQUFBO0lBRUssVUFBVSxDQUFDLFVBQWtCOztZQUMvQixPQUFPLHNCQUFXLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzNDLENBQUM7S0FBQTtJQUVLLElBQUk7O1lBQ04sT0FBTyxzQkFBVyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2hDLENBQUM7S0FBQTtJQUVLLFVBQVUsQ0FBQyxRQUFvQjs7WUFDakMsT0FBTyxzQkFBVyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMzQyxDQUFDO0tBQUE7Q0FDSjtBQUVELGtCQUFlLElBQUksY0FBYyxDQUM3QixJQUFJLGlDQUFhLEVBQUUsRUFDbkIsSUFBSSxpQ0FBYSxFQUFFLENBQ2xCLENBQUMifQ==