import {NgModule}from '@angular/core';
import { SharedModule } from '../core/shared/shared.module';
import { PublicComponent } from './public.component';
import { PublicRouterModule } from './public.routing.module';
import {HomeComponent} from './home/containers/home.component';
import { LoginComponent } from './login/containers/login.component';

@NgModule({
    imports:[
        PublicRouterModule,
        SharedModule

    ],
    declarations:[
        PublicComponent,
        HomeComponent,
        LoginComponent
    ],
    exports:[],
    providers:[]

})

export class PublicModule{
    contructor(){}
}