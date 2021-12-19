import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'paginacao',
  templateUrl: './paginacao.component.html',
  styleUrls: ['./paginacao.component.scss']
})
export class PaginacaoComponent implements OnInit {

  @Input()
  data: any;

  @Output()
  mudarPagina: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
   
  }

  paginar(pagina: number) {
    console.log('emitido',pagina);
    this.mudarPagina.emit(--pagina);
  }

  getPages() {
    let i = 0;
    return Array(this.data.totalPages).fill(1).map(v => v + i++);
  }

}
