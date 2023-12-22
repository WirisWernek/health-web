import { Component, Input } from '@angular/core';
import { ServicoModel } from 'src/app/models/ServicoModel';

@Component({
   selector: 'app-card',
   templateUrl: './card.component.html',
   styleUrls: ['./card.component.scss'],
})
export class CardComponent {
   @Input() servico!: ServicoModel;

   getClassComponente(): string {
      switch (this.servico.status.toString()) {
         case 'UP':
            return 'bg-success';
         case 'DOWN':
            return 'bg-danger';
         case 'UNSTABLE':
            return 'bg-warning';
         case 'UNKNOWN':
            return 'bg-info';
         default:
            return 'bg-warning';
      }
   }
}
