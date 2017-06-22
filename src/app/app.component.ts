import { Component} from '@angular/core';

//data model
import { GRIDITEMS } from "./data";
import { Person } from "./model/personas";

declare var $:any; //Para usar Jquery..

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  selItem: object; //Almacena el Item Seleccionado.
  loading: boolean = false; //variable para controlar la animacion en el boton.
  items= GRIDITEMS;//Contiene la informacion a Mostrar.
  index: number; // captura el indice 
  message: Person;

  selectedItem( item : Person, i: number){
    this.message= null; // Limpiamos si existe algun Mensaje.
    this.selItem= item;
    this.index = i; // indice almacenado para Eliminar

  }

  deleteItem(delItem: Person){

     this.loading = true;
      setTimeout(()=>{
      this.loading= false;//deshabilita la animacion.

      this.items.splice(this.index, 1);//Elimamos el Registro seleccionado del Arreglo.

      $('#myModal').modal('hide')//Cerramos el modal Automaticamente.

      this.message = delItem; //Mostramos el Mensaje de Eliminacion.

    },3000)
     
  }
}
