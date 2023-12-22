export class DateTimeUtils {
   static getDataFormatada(dado: Date): string {
      const data = new Date(dado);
      return (
         this.adicionaZero(data.getDate()) +
         '/' +
         this.adicionaZero(data.getMonth() + 1) +
         '/' +
         data.getFullYear()
      ).toString();
   }

   static getHour(dado: Date): string {
      const data = new Date(dado);
      return (
         this.adicionaZero(data.getHours()) +
         ':' +
         this.adicionaZero(data.getMinutes()) +
         ':' +
         this.adicionaZero(data.getSeconds())
      ).toString();
   }

   static adicionaZero(numero: number) {
      if (numero <= 9) return '0' + numero;
      else return numero;
   }
}
