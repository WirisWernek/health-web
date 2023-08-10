import { Component, Input, OnInit } from '@angular/core';
import { ServicoModel } from 'src/app/models/ServicoModel';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {


	@Input() servico: ServicoModel;

	constructor(){
		this.servico = new ServicoModel();
	}

	getClassComponente(): string{
		
		switch(this.servico.status.toString()){
			case 'UP':
				return "bg-success";
			case 'DOWN':
				return "bg-danger";
			case 'UNSTABLE':
				return "bg-warning";
			case 'UNKNOWN':
				return "bg-info";
			default:
				return "bg-warning";
		}
	}

	ngOnInit() { }

}
