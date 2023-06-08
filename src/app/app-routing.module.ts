import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BooklistComponent } from './booklist/booklist.component';
import { ChooseActionComponent } from './choose-action/choose-action.component';
import { AddbooksComponent } from './addbooks/addbooks.component';
import { ReturnComponent } from './return/return.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';


const routes: Routes = [
  {path:'',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'booklist',component:BooklistComponent},
  {path:'action',component:ChooseActionComponent},
  {path:'addbooks',component:AddbooksComponent},
  {path:'return',component:ReturnComponent},
  {path:'forgot',component:ForgotPasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
