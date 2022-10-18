import { PETS } from '../models/data.js';
import { Pet } from '../models/pet.js';
import { AddPet } from './add.pet.js';
import { Component } from './component.js';

export class PetList extends Component {
    template!: string;
    pets = [...PETS];
    constructor(public selector: string) {
        super();
        this.manageComponent();
    }
    manageComponent() {
        // Llama a createTemplate.
        this.template = this.createTemplate();
        this.render(this.selector, this.template);
        new AddPet('slot#add-pet');
        setTimeout(() => {
            // ¡¡¡Falta por entender!!!
            document
                .querySelector('form')
                ?.addEventListener('submit', this.handleAdd.bind(this));
            document
                .querySelectorAll('.eraser')
                .forEach((item) =>
                    item.addEventListener(
                        'click',
                        this.handlerEraser.bind(this)
                    )
                );
        }, 100);
    }

    createTemplate() {
        let template = `<section>
                <h2>Mascotas</h2>
                <slot id="add-pet"></slot>
                <ul>`;
        this.pets.forEach((item: Pet) => {
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
    handleAdd(ev: Event) {
        // Event es hacer click en un evento/botón.
        ev.preventDefault();
        const name = (document.querySelector('#name') as HTMLInputElement)
            .value; // Lo que hace es leer de HTML el valor que le haya pasado.
        const race = (document.querySelector('#race') as HTMLInputElement)
            .value;
        const isAdopted = (
            document.querySelector('#isadopted') as HTMLInputElement
        ).value;
        const adoptiveParent = (
            document.querySelector('#adoptiveparent') as HTMLInputElement
        ).value;
        this.pets.push(new Pet(name, race, true, adoptiveParent));
        this.manageComponent();
    }

    handlerEraser(ev: Event) {
        // Si pincho en la papelera, se  va a ejecutar esto.
        const deletedID = (ev.target as HTMLElement).dataset.id;
        this.pets = this.pets.filter(
            (item) => item.id !== +(deletedID as string) // Esto lo borra.s
        );
        this.manageComponent();
    }
}
