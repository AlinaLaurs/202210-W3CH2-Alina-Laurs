import { Footer } from './components/footer.js';
import { Header } from './components/header.js';
import { Main } from './components/main.js';
import { PetList } from './components/pet.list.js';
import { PETS } from './models/data.js';
// Aquí estoy ejecutando.
console.log('Loaded index');
console.log(PETS);
// Cada vez que pongo «new», estoy llamando a un constructor.
new Header('body'); // Header irá dentro del body (body es el selector).
new Main('body');
new PetList('main');
new Footer('body');
