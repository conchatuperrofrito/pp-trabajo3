import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
//IMPORT FOR INTUT INTERACTIVE TWO WEY DATABIDING
import { FormsModule } from '@angular/forms';
import { ComponentComponent } from './share/component/component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// angular material
import { MaterialModule } from './matirial.module';
import { SegundoCompoenteComponent } from './share/compent/segundo-compoente/segundo-compoente.component';
@NgModule({
  declarations: [AppComponent, ComponentComponent, SegundoCompoenteComponent],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
