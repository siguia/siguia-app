import { Parceiro } from './parceiro';
import { Motorista } from './motorista';

export class Agendamento {
    confirmado: boolean;
    parceiro: Parceiro;
    motorista: Motorista;
}
