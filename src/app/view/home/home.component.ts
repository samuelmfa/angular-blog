import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { DatePipe } from '@angular/common';
import { ConfigApi } from '../../config/config.enum';
import { INoticia } from '../../interfaces/noticias';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  public currentDate = new Date();
  public datepipe: DatePipe = new DatePipe('pt-BR');
  public noticias: Array<INoticia> = [];

  constructor(protected api: ApiService, protected store: StoreService) {}

  ngOnInit(): void {
    this.noticias = [...this.store.getNoticias()];
    (this.noticias.length === 0) && this.getNoticias();
  }

  getNoticias() {
    this.api
      .getNoticias(this.getCurrentDate() as string, ConfigApi.CONDICAO_DE)
      .subscribe({
        next: (data: any) => {
          this.noticias = data;
          this.store.setNoticias(data);
        },
        error: (error) => console.log('ERRO na API =>', error),
        complete: () => {},
      });
  }

  getCurrentDate(): string | null {
    const data = new Date(
      this.currentDate.setDate(this.currentDate.getDate() - 3)
    );
    return this.datepipe.transform(data, 'MM-dd-YYYY ');
  }
}
