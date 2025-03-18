import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { IndiceGenerosComponent } from './generos/indice-generos/indice-generos.component';
import { CrearGenerosComponent } from './generos/crear-generos/crear-generos.component';
import { IndiceActoresComponent } from './actores/indice-actores/indice-actores.component';
import { CrearActoresComponent } from './actores/crear-actores/crear-actores.component';
import { IndiceCinesComponent } from './cines/indice-cines/indice-cines.component';
import { CrearCineComponent } from './cines/crear-cine/crear-cine.component';
import { CrearPeliculaComponent } from './peliculas/crear-pelicula/crear-pelicula.component';
import { EditarGeneroComponent } from './generos/editar-genero/editar-genero.component';
import { EventDispatcher } from '@angular/core/primitives/event-dispatch';
import { EditarActorComponent } from './actores/editar-actor/editar-actor.component';
import { EditarCineComponent } from './cines/editar-cine/editar-cine.component';
import { EditarPeliculaComponent } from './peliculas/editar-pelicula/editar-pelicula.component';

export const routes: Routes = [
    {path: '',component: LandingPageComponent},
    {path:'generos', component: IndiceGenerosComponent},
    {path:'generos/crear', component: CrearGenerosComponent},
    {path:'generos/editar/:id', component: EditarGeneroComponent},
    {path:'actores', component:IndiceActoresComponent},
    {path:'actores/crear', component:CrearActoresComponent},
    {path:'actores/editar/:id', component: EditarActorComponent},
    {path:'cines', component:IndiceCinesComponent},
    {path:'cines/crear', component:CrearCineComponent},
    {path:'cines/editar/:id', component: EditarCineComponent},
    {path:'peliculas/crear', component:CrearPeliculaComponent},
    {path:'peliculas/editar/:id', component: EditarPeliculaComponent},
    {path: '**', redirectTo:""}
    
];
