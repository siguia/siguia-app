import { Parceiro } from './parceiro';
import { Motorista } from './motorista';

export class Agendamento {
    id: number;
    uuid: string;
    confirmado: boolean;
    parceiro: Parceiro;
    motorista: Motorista;
}
