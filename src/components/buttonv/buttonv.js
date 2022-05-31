import { StoreClass } from "../../services/store.class";
import {Card} from '../card/card'

export function Buttonv({id}, {handler}) {
    const store = new StoreClass();
    const persons = store.getPersons();
    function handlerClick(ev, id){
        persons.forEach(item => {
            if(item.id === id){
                console.log('si' + id);
                item.selected = true;
                store.setPersons(persons);
                Card.handler();
            }
        })
        // console.log(store.getPersons());

    }

    return <i className="icon gentleman__icon fas fa-check" onClick={(ev) => handlerClick(ev, id)}></i>;
}