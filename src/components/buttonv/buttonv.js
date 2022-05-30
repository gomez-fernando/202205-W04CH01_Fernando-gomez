import { PERSONS } from "../../models/person";

export function Buttonv({id}) {
    function handlerClick(ev, id){
        PERSONS.forEach(item => {
            if(item.id === id){
                item.selected = true;
            }
        })
        console.log(PERSONS);

    }

    return <i className="icon gentleman__icon fas fa-check" onClick={(ev) => handlerClick(ev, id)}></i>;
}
