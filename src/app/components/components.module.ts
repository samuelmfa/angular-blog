import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmallCardComponent } from './small-card/small-card.component';
import { RouterModule } from '@angular/router';

export const components = [SmallCardComponent];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, RouterModule],
  exports: [...components],
})
export class ComponentsModule {}
