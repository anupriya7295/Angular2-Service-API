import { Routes, RouterModule } from '@angular/router';
import { DataResolver } from './app.resolver';

import {UserComponent} from './home/user.component';
import {DynamicFormComponent} from './dynamicform/form.component'



export const ROUTES: Routes = [
  { path: '', component: UserComponent},
  { path: 'dynamicform', component: DynamicFormComponent}

];
