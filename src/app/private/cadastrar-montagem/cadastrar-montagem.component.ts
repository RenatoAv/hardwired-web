import { Component, OnInit } from '@angular/core';
import { MontagemService } from 'src/app/service/montagem.service';

@Component({
  selector: 'app-cadastrar-montagem',
  templateUrl: './cadastrar-montagem.component.html',
  styleUrls: ['./cadastrar-montagem.component.scss']
})
export class CadastrarMontagemComponent implements OnInit {

  montagem: any;

  constructor(private montagemService: MontagemService) { }

  ngOnInit(): void {
  }

  cadastrar() {
    this.montagemService.salvar(this.montagem).subscribe((success) => {
       console.log('Montagem salva!');
     });
   }
}
