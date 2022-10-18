import { Component } from './component.js';
export class AddPet extends Component {
    constructor(selector) {
        super(); // El constructor de la clase padre.
        this.selector = selector;
        this.template = this.createTemplate();
        this.renderOuter(this.selector, this.template);
    }
    createTemplate() {
        return `
        <form>
            <div>
                <input type="text" id="name" placeholder="Nombre de la mascota" required>
            </div>
            <div>
                <input type="text" id="race" placeholder="Raza de la mascota" required>
            </div>
            <div>
                <input type="text" id="isadopted" placeholder="Adoptado" required>
            </div>
            <div>
                <input type="text" id="adoptiveparent" placeholder="Nombre del dueño">
            </div>
            <button type="submit">Guardar</button>
        </form>
        `;
    }
}
