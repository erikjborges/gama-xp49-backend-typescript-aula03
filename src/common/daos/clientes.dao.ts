import { ClienteDTO } from "../dtos/cliente.dto";
import debug from 'debug';

const log: debug.IDebugger = debug('app:in-memory-dao');

class ClientesDAO {
    private static _instance: ClientesDAO;
    private _clientes: ClienteDTO[];

    private constructor(){
        this._clientes = [];
        log('Criando nova instancia de ClienteDao');
    }

    public static getInstance(): ClientesDAO {
        if (!ClientesDAO._instance) {
            ClientesDAO._instance = new ClientesDAO();
        }

        return ClientesDAO._instance;
    }

    cadastrar(pessoa: ClienteDTO): ClienteDTO {
        let objPessoa;
        
        pessoa.indexId = this._clientes.length;
        objPessoa = pessoa;
        this._clientes.push(objPessoa);

        return objPessoa;
    }

    atualizar(pessoa: ClienteDTO): ClienteDTO | undefined {
        let objPessoa;
        
        objPessoa = pessoa;

        if(objPessoa.indexId === undefined)
            return;
        
        this._clientes[objPessoa.indexId] = objPessoa;

        return objPessoa;
    }

    listar(): (ClienteDTO)[] {
        let objPessoas: (ClienteDTO)[] = [];

        for(let cliente of this._clientes)
            objPessoas.push(cliente);

        return objPessoas;
    }

    excluir(cpfCnpj: number): void {

        const indexId = this._clientes.findIndex((obj: ClienteDTO) => {
            if('cpf' in obj)
                return obj.cpf === cpfCnpj;
            else   
                return obj.cnpj === cpfCnpj;
        });
        log(`Delete Index: ${indexId}`);
        this._clientes.splice(indexId, 1);
    }

    buscar(cpfCnpj: number): ClienteDTO | undefined {
        console.log(cpfCnpj);
        const cliente = this._clientes.find((obj: ClienteDTO) => {
            if('cpf' in obj)
                return obj.cpf == cpfCnpj;
            else   
                return obj.cnpj == cpfCnpj;
        });
        console.log(cliente);
        if(!cliente)
            return;

        return cliente;
    }
}

export default ClientesDAO.getInstance();