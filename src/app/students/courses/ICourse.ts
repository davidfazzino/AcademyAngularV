import { IEnrollment } from 'src/app/enrollments/enrollment-component/IEnrollment';
import { IModule } from './IModule';

export interface ICourse{
    id:number;
    nome:string;
    materia:string;
    maxIscritti:number;
    categoria:string;
    dataInizio:string;
    durataCorso:number;
    orarioMinimo:number;
    ente:string;
    azienda:string;
    listaIscrizione:IEnrollment[];
    listaModuli:IModule[];

}