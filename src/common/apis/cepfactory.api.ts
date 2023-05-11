import { Cep } from '../interfaces/apis/cep.interface';
import { IAddressDTO } from '../dtos/address.dto';

export abstract class CepFactory {
    public abstract factoryMethod(): Cep;

    public preencheEndereco(cep: string): Promise<IAddressDTO | undefined> {
        const cepProvider = this.factoryMethod();

        return cepProvider.buscaEndereco(cep);
    }
}