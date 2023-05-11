import { Cep } from '../interfaces/apis/cep.interface';
import { CepFactory } from './cepfactory.api';
import { ViaCep } from './viacep.api';

export class ViaCepFactory extends CepFactory {
    public factoryMethod(): Cep {
        return new ViaCep();
    }
}