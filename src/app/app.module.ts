import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { AboutComponent } from './about/about.component';
import { EmployeeService } from './services/employee.service';
import { SearchComponent } from './search/search.component';
import { SearchService } from './services/search.service';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    AboutComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [EmployeeService, SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
