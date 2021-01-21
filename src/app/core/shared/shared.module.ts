import {NgModule}from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { MatTabsModule} from '@angular/material/tabs';

@NgModule({
    imports:[
        HttpClientModule,
        RouterModule,
        MatTabsModule
        
    ],
    declarations:[
        NotFoundComponent
    ],
    exports:[
        HttpClientModule,
        RouterModule,
        NotFoundComponent,
        MatTabsModule
    ],
    providers:[]

})

export class SharedModule{
    contructor(){}
}