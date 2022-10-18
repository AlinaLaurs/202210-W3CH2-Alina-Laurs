import { PETS } from '../models/data.js';
import { Pet } from '../models/pet.js';
import { AddPet } from './add.pet.js';
import { Component } from './component.js';
export class PetList extends Component {
    constructor(selector) {
        super();
        this.selector = selector;
        this.pets = [...PETS];
        this.manageComponent();
    }
    manageComponent() {
        // Llama a createTemplate.
        this.template = this.createTemplate();
        this.render(this.selector, this.template);
        new AddPet('slot#add-pet');
        setTimeout(() => {
            var _a;
            // ¡¡¡Falta por entender!!!
            (_a = document
                .querySelector('form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', this.handleAdd.bind(this));
            document
                .querySelectorAll('.eraser')
                .forEach((item) => item.addEventListener('click', this.handlerEraser.bind(this)));
        }, 100);
    }
    createTemplate() {
        let template = `<section>
                <h2>Mascotas</h2>
                <slot id="add-pet"></slot>
                <ul>`;
        this.pets.forEach((item) => {
            // Recorre mi lista de mascotas y crea el código HTML para mostrarlas.
            template += `
            <li> ${item.id} - ${item.name}, ${item.race}, ${item.isAdopted}, ${item.adoptiveParent} 
            <span class="eraser" data-id="${item.id}">🗑️</span>
            </li>`;
        });
        template += `</ul>
            </section>`;
        return template;
    }
    handleAdd(ev) {
        // Event es hacer click en un evento/botón.
        ev.preventDefault();
        const name = document.querySelector('#name')
            .value; // Lo que hace es leer de HTML el valor que le haya pasado.
        const race = document.querySelector('#race')
            .value;
        const isAdopted = document.querySelector('#isadopted').value;
        const adoptiveParent = document.querySelector('#adoptiveparent').value;
        this.pets.push(new Pet(name, race, true, adoptiveParent));
        this.manageComponent();
    }
    handlerEraser(ev) {
        // Si pincho en la papelera, se  va a ejecutar esto.
        const deletedID = ev.target.dataset.id;
        this.pets = this.pets.filter((item) => item.id !== +deletedID // Esto lo borra.s
        );
        this.manageComponent();
    }
}
