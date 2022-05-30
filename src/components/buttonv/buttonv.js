import { PERSONS } from "../../models/person";
import {Counter} from '../counter/counter'

export function Buttonv({id}) {
    
    function handlerClick(ev, id){
        console.log(ev);
       PERSONS.forEach(item => {
           if(item.id === id){
               item.selected = true;
           }
       })
   };
    

    return <i className="icon gentleman__icon fas fa-check" onClick={(ev) => Counter.handlerClick(ev, id)}></i>;
}
