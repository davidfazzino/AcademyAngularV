import { IPreference } from './IPreference';

export interface IModule{
    id:number;
    idCourse:number;
    idProfessor:number;
    nome:string;
    descrizione:string;
    numeroOre:number;
    dataDesiderata:string;
    aulaPreferita:number;
    listaPreferenze:IPreference[];

}