import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component';


// definición de rutas a utilizar en la aplicación
export const ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'artist/:id', component: ArtistaComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' }, // ruta comodín, para que cualquier otra ruta redireccione a 'home'
  { path: '**', pathMatch: 'full', redirectTo: 'home' } // ruta comodín, para que cualquier otra ruta redireccione a 'home'
];
