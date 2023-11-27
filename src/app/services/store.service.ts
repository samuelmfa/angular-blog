import { Injectable } from '@angular/core';
import { INoticia } from '../interfaces/noticias';

@Injectable()
export class StoreService {
  protected noticias: Array<INoticia> = new Array<INoticia>();

  constructor() {}

  getNoticias(){
    return this.noticias;
  }

  setNoticias(noticias: Array<INoticia>){
    this.noticias = noticias;
  }


}
