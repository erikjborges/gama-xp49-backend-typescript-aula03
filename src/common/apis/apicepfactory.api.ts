import { Cep } from '../interfaces/apis/cep.interface';
import { CepFactory } from './cepfactory.api';
import { ApiCep } from './apicep.api';

export class ApiCepFactory extends CepFactory {
    public factoryMethod(): Cep {
        return new ApiCep();
    }
}