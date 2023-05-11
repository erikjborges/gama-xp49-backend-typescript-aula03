import { IAddressDTO } from './address.dto';

export interface IPessoaDTO {
    indexId?: number,
    endereco?: IAddressDTO,
    cep: string,
    limiteCredito: number,
    dataCadastro: Date,
    dataAtualizacao: Date,
    observacoes: string
}