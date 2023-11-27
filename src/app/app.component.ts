import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomeModule } from './view/home/home.module';
import { ComponentsModule } from './components/components.module';
import { ApiService } from './services/api.service';
import { StoreService } from './services/store.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HomeModule,
    ComponentsModule,
  ],
  providers:[
    ApiService,
    StoreService,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-blog';
}
