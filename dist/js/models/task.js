export class Pets {
    // id: number; No  se lo  tengo que pasar porque lo estoy creando.
    constructor(name, race, isAdopted, adoptiveParent) {
        this.id = Task.crearId();
        this.name = name;
        this.race = race;
        this.isAdopted = isAdopted;
        this.adoptiveParent = adoptiveParent;
    }
    static crearId() {
        // Genera  un id aleatorio.
        return Math.round(Math.random() * 1000000);
    }
}
