import { Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';
import { AboutComponent } from './Components/about/about.component';
import { GamesComponent } from './Components/games/games.component';
import { GameDetailComponent } from './Components/game-detail/game-detail.component';
import { CartComponent } from './Components/cart/cart.component';
import { ErrorComponent } from './Components/error/error.component';
import { ProfileComponent } from './Components/profile/profile.component';

export const routes: Routes = [
    {path:'',component:LoginComponent},
    // {path:'Home',component:},
    {path:'login',component:LoginComponent},
    {path:'signup',component:SignupComponent},
    {path:'about',component:AboutComponent},
    {path:'games',component:GamesComponent},
    {path:'games/:id',component:GameDetailComponent},
    {path:'cart',component:CartComponent},
    {path:'profile',component:ProfileComponent},
    {path:'**',component:ErrorComponent}
];