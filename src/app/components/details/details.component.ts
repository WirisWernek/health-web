import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicoModel } from 'src/app/models/ServicoModel';
import { SituacaoService } from 'src/app/services/situacao-service.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit{
	idRegistroSituacao: any;
	items: ServicoModel[] = [];

	constructor(private activatedRoute : ActivatedRoute, private situacaoService: SituacaoService){
	}

	ngOnInit(): void {
		this._loadParams();
		this._loadData();		
	}

	_loadParams(){
		this.idRegistroSituacao = this.activatedRoute.snapshot.paramMap.get("idRegistroSituacao");
	}

	_loadData(){
		this.situacaoService.getAllStatusSistemaByIdSituacao(this.idRegistroSituacao).subscribe((servicos) => {
			servicos.forEach(x => {
				this.items.push(new ServicoModel().build(x.id, x.dia, x.hora, x.cliente, x.ambiente, x.status));
			})
			this.items = servicos;
		})
	}
	
}
