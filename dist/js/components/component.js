// Definición general
export class Component {
    // Machaca cualquier código HTML que hubiera en el componente  de selector y asigna el que hay en template.
    render(selector, template) {
        // Selector, nombre de cualquiera de los componentes de HTML.
        const element = document.querySelector(selector); // Conecta JS con HTML y CSS a través del elemento.
        if (element === null)
            return false; // Si no lo encuentra, false
        element.innerHTML = template; // Si lo encuentra, coge lo que hay en template y se lo asigna al selector.
        return true;
    }
    // Añade HTML de template al HTML ya existente en el componente selector que haya seleccionado.v
    renderAdd(selector, template) {
        const element = document.querySelector(selector);
        if (element === null)
            return false;
        element.innerHTML += template;
        return true;
    }
    //
    renderOuter(selector, template) {
        const element = document.querySelector(selector);
        if (element === null)
            return false;
        element.outerHTML = template;
        return true;
    }
}
