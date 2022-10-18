import { Component } from './component.js';

export class Header extends Component {
    // Header hereda de componente (3 funciones)
    template: string; // Propiedad única de header, template (plantilla) será código HTML)
    constructor(public selector: string) {
        // Selector es el nombre del componente del HTML al que me quiero referir.
        super(); // Es el constructor de la clase de la que hereda. Siempre hay que llamarlo cuando se hereda.
        this.template = this.createTemplate(); // Template va a tener el valor de createTemplate. This, se refiere al propio objeto que estoy creando dentro del constructor.
        this.renderAdd(this.selector, this.template); // A body le voy a pasar la plantilla que acabo de ejecutar.
    }
    // Al crear el header, el código HTML del tempate se añade al body.
    createTemplate() {
        return `
         <header>
            <h1>Pet List</h1>
        </header>
        `;
    }
}
