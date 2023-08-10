export class DateTimeUtils{
	
	static getDataFormatada(dado: Date): string{
		let data = new Date(dado);
		return (this.adicionaZero(data.getDate().toString()) + "/" + (this.adicionaZero(data.getMonth()+1).toString()) + "/" + data.getFullYear()).toString();
	}

	static getHour(dado: Date): string{
		let data = new Date(dado);
		return (this.adicionaZero(data.getHours()) + ":" + this.adicionaZero(data.getMinutes()) + ":" + this.adicionaZero(data.getSeconds())).toString();
	}

	static adicionaZero(numero: any){
		if (numero <= 9) 
			return ("0" + numero);
		else
			return numero; 
	}
}