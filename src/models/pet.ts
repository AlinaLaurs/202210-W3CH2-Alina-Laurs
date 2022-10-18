export interface IPets {
    // Es como una plantilla que se rellenará.
    id: number;
    name: string;
    race: string;
    isAdopted: boolean;
    adoptiveParent: string;
}

export class Pet {
    // Esto es la clase de Pets (no una plantilla).
    id: number;
    name: string;
    race: string;
    isAdopted: boolean;
    adoptiveParent: string;
    static createId() {
        // Genera  un id aleatorio.
        return Math.round(Math.random() * 1_000_000);
    }
    // id: number; No  se lo  tengo que pasar porque lo estoy creando.
    constructor(
        name: string,
        race: string,
        isAdopted: boolean,
        adoptiveParent: string
    ) {
        this.id = Pet.createId();
        this.name = name;
        this.race = race;
        this.isAdopted = isAdopted;
        this.adoptiveParent = adoptiveParent;
    }
}
