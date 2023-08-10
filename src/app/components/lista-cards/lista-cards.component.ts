import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicoModel } from 'src/app/models/ServicoModel';
import { SituacaoService } from 'src/app/services/situacao-service.service';

@Component({
  selector: 'app-lista-cards',
  templateUrl: './lista-cards.component.html',
  styleUrls: ['./lista-cards.component.scss']
})
export class ListaCardsComponent implements OnInit {
	items: ServicoModel[] = [];

	constructor(private router: Router, private situacaoService: SituacaoService){
	}

	ngOnInit(): void {
		 this._loadData();
	}

	_loadData(){
		this.situacaoService.getAll().subscribe((servicos) => {
			servicos.forEach(x => {
				this.items.push(new ServicoModel().build(x.id, x.dia, x.hora, x.cliente, x.ambiente, x.status));
			})
			this.items = servicos;
		});
	}

	navigateTo(id: number){
		this.router.navigate(["/details/" , id]);
	}
}
