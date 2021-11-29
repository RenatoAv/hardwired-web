import { Component, OnInit } from '@angular/core';
import { MontagemService } from 'src/app/service/montagem.service';

@Component({
  selector: 'app-montagem',
  templateUrl: './montagem.component.html',
  styleUrls: ['./montagem.component.scss']
})
export class MontagemComponent implements OnInit {

  dados: any = {}
  montagem: any;

  constructor(private montagemService: MontagemService) { }

  ngOnInit(): void {
    this.listar();
  }
  
  listar(page = 0) {
    this.montagemService.listar(page).subscribe((success) => {
      console.log(success);
      this.dados = success;
    });
  }

  remover(id: number) {
    this.montagemService.remover(id).subscribe((success) => {
      this.listar();
    });
  }

}
