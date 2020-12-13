import { NgModule } from '@angular/core';
import { MatButtonModule} from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [ 
    MatButtonModule, 
    MatIconModule, 
    MatMenuModule,
    MatToolbarModule,
  ],
  exports: [
    MatButtonModule, 
    MatIconModule, 
    MatMenuModule,
    MatToolbarModule,
  ]    
})

export class MaterialModule {}