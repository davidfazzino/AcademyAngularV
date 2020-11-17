import { IEnrollment } from '../enrollments/enrollment-component/IEnrollment';

export interface IStudent{
    id:number;
    nome:string;
    cognome:string;
    codiceFiscale:string;
    dataDiNascita:string;
    indirizzo:string;
    mail:string;
    telefono:string;
    titoloDiStudio:string;
    sesso:boolean;
    listaIscrizione:IEnrollment[];

}