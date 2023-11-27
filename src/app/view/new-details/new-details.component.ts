import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { INoticia } from '../../interfaces/noticias';
import { TemplatesModule } from '../../templates/templates.module';
import { ComponentsModule } from '../../components/components.module';

@Component({
  selector: 'app-new-details',
  standalone: true,
  imports: [CommonModule, TemplatesModule, ComponentsModule],
  templateUrl: './new-details.component.html',
  styleUrl: './new-details.component.scss',
})
export class NewDetailsComponent implements OnInit {
  public selectedId: any;
  public noticia: INoticia | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    protected apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.selectedId = params['id'];
      this.getNoticia();
    });
  }

  getNoticia() {
    let noticia = this.apiService.getNoticia(this.selectedId);
    this.noticia = noticia;
  }

  getUrlImage(url: string | undefined) {
    return this.apiService.formatUrlImage(url);
  }

  goToHome() {
    this.router.navigate(['']);
  }
}
