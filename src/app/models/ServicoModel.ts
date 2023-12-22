import { AmbienteEnum } from './enums/AmbienteEnum';
import { StatusEnum } from './enums/StatusEnum';

export class ServicoModel {
   id: number;
   dia: string;
   hora: string;
   cliente: string;
   ambiente: AmbienteEnum;
   status: StatusEnum;

   constructor() {
      this.id = 0;
      this.dia = '';
      this.hora = '';
      this.cliente = '';
      this.ambiente = AmbienteEnum.UNKNOWN;
      this.status = StatusEnum.UNKNOWN;
   }

   build(
      id: number,
      dia: string,
      hora: string,
      cliente: string,
      ambiente: AmbienteEnum,
      status: StatusEnum
   ) {
      this.id = id;
      this.dia = dia;
      this.hora = hora;
      this.cliente = cliente;
      this.ambiente = ambiente;
      this.status = status;

      return this;
   }
}
