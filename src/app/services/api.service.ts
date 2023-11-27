import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigApi } from '../config/config.enum';
import { Observable, map } from 'rxjs';
import { INoticia, INoticias } from '../interfaces/noticias';
import { StoreService } from './store.service';

@Injectable()
export class ApiService {
  constructor(protected http: HttpClient, protected store: StoreService) {}

  getNoticias(
    dataLimite: string,
    condicao: string
  ): Observable<INoticias | any> {
    return this.http
      .get<INoticias>(`${ConfigApi.URL_API}?${condicao}=${dataLimite}`)
      .pipe(map((arr: INoticias) => arr.items as Array<INoticia>));
  }

  getNoticia(id: any): INoticia | any {
    let noticia = this.store
      .getNoticias()
      .filter((element) => element.id === parseInt(id));
    return noticia[0];
  }

  formatUrlImage(url: any) {
    const urlData = JSON.parse(url);
    return `${ConfigApi.URL_API_IMAGE}${urlData.image_fulltext}`;
  }
}
