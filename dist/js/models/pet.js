export class Pet {
    // id: number; No  se lo  tengo que pasar porque lo estoy creando.
    constructor(name, race, isAdopted, adoptiveParent) {
        this.id = Pet.createId();
        this.name = name;
        this.race = race;
        this.isAdopted = isAdopted;
        this.adoptiveParent = adoptiveParent;
    }
    static createId() {
        // Genera  un id aleatorio.
        return Math.round(Math.random() * 1000000);
    }
}
