import ClientesDao from "../daos/clientes.dao";
import { Read } from "../interfaces/crud/read.interface";
import { ClienteDTO } from "../dtos/cliente.dto";

export class ClientsCommonService implements Read {
    async readById(resourceId: number): Promise<ClienteDTO | undefined> {
        return ClientesDao.buscar(resourceId);
    }
}

export default new ClientsCommonService();