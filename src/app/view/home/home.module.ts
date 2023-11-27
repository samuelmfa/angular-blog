import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { TemplatesModule } from '../../templates/templates.module';
import { HomeComponent } from './home.component';
import { ApiService } from '../../services/api.service';
import { HttpClientModule } from '@angular/common/http';
import localePt from '@angular/common/locales/pt';
import { ComponentsModule } from '../../components/components.module';

registerLocaleData(localePt, 'pt');

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    TemplatesModule,
    HttpClientModule,
    ComponentsModule,
    ],
  providers: [ApiService, { provide: LOCALE_ID, useValue: 'pt-BR' }],
})
export class HomeModule {}
