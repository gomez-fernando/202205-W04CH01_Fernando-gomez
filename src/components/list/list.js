import {Card } from "../card/card";
import { PERSONS } from "../../models/person";


export function List(){
    return(
        <ul className ="gentlemen">
            {
                PERSONS.map((element) =>( 
                <Card person={element} key={element.id}></Card> 
                ))
             };

        </ul>
    )
}