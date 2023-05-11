import { IAddressDTO } from '../../dtos/address.dto';

export interface Cep {
    buscaEndereco(cep: string): Promise<IAddressDTO | undefined>;
}