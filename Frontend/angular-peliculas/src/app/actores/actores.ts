export interface ActorDTO {
    id:number;
    nombre:string;
    fechaNacimiento:Date;
    imagen? : string;
}

export interface ActorCreacionDTO{
    nombre:string;
    fechaNacimiento:Date;
    imagen?:File;
}