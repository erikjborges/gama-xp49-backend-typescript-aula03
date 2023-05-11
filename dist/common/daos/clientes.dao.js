"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const debug_1 = __importDefault(require("debug"));
const log = (0, debug_1.default)('app:in-memory-dao');
class ClientesDAO {
    constructor() {
        this._clientes = [];
        log('Criando nova instancia de ClienteDao');
    }
    static getInstance() {
        if (!ClientesDAO._instance) {
            ClientesDAO._instance = new ClientesDAO();
        }
        return ClientesDAO._instance;
    }
    cadastrar(pessoa) {
        let objPessoa;
        pessoa.indexId = this._clientes.length;
        objPessoa = pessoa;
        this._clientes.push(objPessoa);
        return objPessoa;
    }
    atualizar(pessoa) {
        let objPessoa;
        objPessoa = pessoa;
        if (objPessoa.indexId === undefined)
            return;
        this._clientes[objPessoa.indexId] = objPessoa;
        return objPessoa;
    }
    listar() {
        let objPessoas = [];
        for (let cliente of this._clientes)
            objPessoas.push(cliente);
        return objPessoas;
    }
    excluir(cpfCnpj) {
        const indexId = this._clientes.findIndex((obj) => {
            if ('cpf' in obj)
                return obj.cpf === cpfCnpj;
            else
                return obj.cnpj === cpfCnpj;
        });
        log(`Delete Index: ${indexId}`);
        this._clientes.splice(indexId, 1);
    }
    buscar(cpfCnpj) {
        console.log(cpfCnpj);
        const cliente = this._clientes.find((obj) => {
            if ('cpf' in obj)
                return obj.cpf == cpfCnpj;
            else
                return obj.cnpj == cpfCnpj;
        });
        console.log(cliente);
        if (!cliente)
            return;
        return cliente;
    }
}
exports.default = ClientesDAO.getInstance();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50ZXMuZGFvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbW1vbi9kYW9zL2NsaWVudGVzLmRhby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLGtEQUEwQjtBQUUxQixNQUFNLEdBQUcsR0FBb0IsSUFBQSxlQUFLLEVBQUMsbUJBQW1CLENBQUMsQ0FBQztBQUV4RCxNQUFNLFdBQVc7SUFJYjtRQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLEdBQUcsQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFTSxNQUFNLENBQUMsV0FBVztRQUNyQixJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRTtZQUN4QixXQUFXLENBQUMsU0FBUyxHQUFHLElBQUksV0FBVyxFQUFFLENBQUM7U0FDN0M7UUFFRCxPQUFPLFdBQVcsQ0FBQyxTQUFTLENBQUM7SUFDakMsQ0FBQztJQUVELFNBQVMsQ0FBQyxNQUFrQjtRQUN4QixJQUFJLFNBQVMsQ0FBQztRQUVkLE1BQU0sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUM7UUFDdkMsU0FBUyxHQUFHLE1BQU0sQ0FBQztRQUNuQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUUvQixPQUFPLFNBQVMsQ0FBQztJQUNyQixDQUFDO0lBRUQsU0FBUyxDQUFDLE1BQWtCO1FBQ3hCLElBQUksU0FBUyxDQUFDO1FBRWQsU0FBUyxHQUFHLE1BQU0sQ0FBQztRQUVuQixJQUFHLFNBQVMsQ0FBQyxPQUFPLEtBQUssU0FBUztZQUM5QixPQUFPO1FBRVgsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEdBQUcsU0FBUyxDQUFDO1FBRTlDLE9BQU8sU0FBUyxDQUFDO0lBQ3JCLENBQUM7SUFFRCxNQUFNO1FBQ0YsSUFBSSxVQUFVLEdBQW1CLEVBQUUsQ0FBQztRQUVwQyxLQUFJLElBQUksT0FBTyxJQUFJLElBQUksQ0FBQyxTQUFTO1lBQzdCLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFN0IsT0FBTyxVQUFVLENBQUM7SUFDdEIsQ0FBQztJQUVELE9BQU8sQ0FBQyxPQUFlO1FBRW5CLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBZSxFQUFFLEVBQUU7WUFDekQsSUFBRyxLQUFLLElBQUksR0FBRztnQkFDWCxPQUFPLEdBQUcsQ0FBQyxHQUFHLEtBQUssT0FBTyxDQUFDOztnQkFFM0IsT0FBTyxHQUFHLENBQUMsSUFBSSxLQUFLLE9BQU8sQ0FBQztRQUNwQyxDQUFDLENBQUMsQ0FBQztRQUNILEdBQUcsQ0FBQyxpQkFBaUIsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVELE1BQU0sQ0FBQyxPQUFlO1FBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDckIsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFlLEVBQUUsRUFBRTtZQUNwRCxJQUFHLEtBQUssSUFBSSxHQUFHO2dCQUNYLE9BQU8sR0FBRyxDQUFDLEdBQUcsSUFBSSxPQUFPLENBQUM7O2dCQUUxQixPQUFPLEdBQUcsQ0FBQyxJQUFJLElBQUksT0FBTyxDQUFDO1FBQ25DLENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNyQixJQUFHLENBQUMsT0FBTztZQUNQLE9BQU87UUFFWCxPQUFPLE9BQU8sQ0FBQztJQUNuQixDQUFDO0NBQ0o7QUFFRCxrQkFBZSxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUMifQ==