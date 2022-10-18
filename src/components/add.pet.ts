import { Component } from './component.js';

export class AddPet extends Component {
    // AddPet hereda de Component.
    template: string; // Tendrá el template (código  HTML a añadir).
    constructor(public selector: string) {
        super(); // El constructor de la clase padre.
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
                <input type="text" id="isadopted" placeholder="¿Es adoptado?" required>
            </div>
            <div>
                <input type="text" id="adoptiveparent" placeholder="Dueño">
            </div>
            <button type="submit">Guardar</button>
        </form>
        `;
    }
}
