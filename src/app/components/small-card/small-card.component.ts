import { ApiService } from './../../services/api.service';
import { Component, Input, OnInit } from '@angular/core';
import { INoticia } from '../../interfaces/noticias';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css'],
})
export class SmallCardComponent implements OnInit {
  @Input()
  noticia: INoticia | undefined;

  constructor(protected router: Router, protected apiService: ApiService) {}

  ngOnInit() {}

  goToPageNews(id: any) {
    this.router.navigate(['news', id]);
  }

  getUrlImage(url: string | undefined) {
    return this.apiService.formatUrlImage(url);
  }
}
