import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';

export const components = [HeaderComponent, MenuComponent, FooterComponent];

@NgModule({
  declarations: [...components],
  imports: [CommonModule],
  exports: [...components],
})
export class TemplatesModule {}
