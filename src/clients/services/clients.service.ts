import ClientesDao from "../../common/daos/clientes.dao";
import { List } from "../../common/interfaces/crud/list.interface";
import { Create } from "../../common/interfaces/crud/create.interface";
import { Read } from "../../common/interfaces/crud/read.interface";
import { Update } from "../../common/interfaces/crud/update.interface";
import { Delete } from "../../common/interfaces/crud/delete.interface";
import { ClienteDTO } from "../../common/dtos/cliente.dto";
import { ClientsCommonService } from "../../common/services/clients.service";
import { ViaCepFactory } from "../../common/apis/viacepfactory.api";
import { ApiCepFactory } from "../../common/apis/apicepfactory.api";
import { CepFactory } from "../../common/apis/cepfactory.api";

class ClientsService extends ClientsCommonService implements List, Create, Read, Update, Delete {
    
    constructor(private _viaCep: CepFactory, private _apiCep: CepFactory) {
        super();
    }

    async create(resource: ClienteDTO): Promise<ClienteDTO> {

        resource.endereco = await this._viaCep.preencheEndereco(resource.cep);
        
        if(!resource.endereco){
            resource.endereco = await this._apiCep.preencheEndereco(resource.cep);
        }

        return ClientesDao.cadastrar(resource);
    }

    async deleteById(resourceId: number): Promise<void> {
        return ClientesDao.excluir(resourceId);
    }

    async list(): Promise<ClienteDTO[]> {
        return ClientesDao.listar();
    }

    async updateById(resource: ClienteDTO): Promise<ClienteDTO | undefined> {
        return ClientesDao.atualizar(resource);
    }
}

export default new ClientsService(
    new ViaCepFactory(),
    new ViaCepFactory()
    );