/* eslint-disable no-unused-vars */
import { PERSONS } from '../models/person';

export class StoreClass {
    store
    constructor() {
        this.store = 'PERSONS';
    }

    getPersons(){
        return localStorage.getItem(this.store)
            ? JSON.parse(localStorage.getItem(this.store))
            : PERSONS;
    }

    setPersons(persons) {
        localStorage.setItem(this.store, JSON.stringify(persons));
    }

    deletePersons() {
        localStorage.removeItem(this.store);
    }
}
