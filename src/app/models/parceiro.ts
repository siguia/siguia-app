export class Parceiro {
    id?: number;
    uuid?: string;
    nome?: string;
    classificacao?: number;
    telefone?: string;
    favorito?: boolean;
    fotos?: {link: string}[];
    endereco?: {
        estado: string,
        cidade: string
    };
}
