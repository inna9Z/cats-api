import { v4 as newId } from 'uuid';

const cats = [
    {
        id: newId(),
        name: 'Myrzick',
        age: 3,
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Britskorthaar-64091287828362D7bA.jpg/440px-Britskorthaar-64091287828362D7bA.jpg',
        species: 'British Shorthair'
    },
    {
        id: newId(),
        name: 'Oliver',
        age: '1',
        img: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Paintedcats_Red_Star_standing.jpg',
        species: 'Bengal'
    },
    {
        id: newId(),
        name: 'Bella',
        age: '1',
        img: 'https://upload.wikimedia.org/wikipedia/commons/2/25/Siam_lilacpoint.jpg',
        species: 'Siamese'
    },
    {
        id: newId(),
        name: 'Luna',
        age: '4',
        img: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Sheba1.JPG',
        species: 'British Shorthair'
    },
    {
        id: newId(),
        name: 'Snickers',
        age: '2',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGPMfgG7vA8TgjHn-pObuAgRYvFAfisQT9oQ&usqp=CAU',
        species: 'British Shorthair'
    },
    {
        id: newId(),
        name: 'Muffin',
        age: '3',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVqozSaJ6KXeqFtCO9UdU3sSOVdkh6ilta7g&usqp=CAU',
        species: 'British Shorthair'
    },
    {
        id: newId(),
        name: 'Leo',
        age: '4',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBUcb23hsOxIK7Ih0tozYE8Gl6KpQCLxXwNw&usqp=CAU',
        species: 'Bengal'
    },
    {
        id: newId(),
        name: 'Bob',
        age: '1',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9Ncc_0IdQi7C5a9QuUXDm0fmpGyxX8xzyfg&usqp=CAU',
        species: 'Bengal'
    },
    {
        id: newId(),
        name: 'Daisy',
        age: '2',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1em65i7ydInu8J5Ghn00jHi3c8sb2N2NbQA&usqp=CAU',
        species: 'Siamese'
    },
    {
        id: newId(),
        name: 'Romeo',
        age: '3',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrIgCtM4Scq5YURZVKWoDISkpfobRkHEsJZw&usqp=CAU',
        species: 'Siamese'
    }
];

class Cat {
    constructor(name, age, img, species) {
        this.id = newId();
        this.name = name;
        this.age = age;
        this.species = species;
        this.img = img;
    }

    static getCats() {
        return cats;
    }

    static getCat(id) {
        return cats.find((cat) => cat.id === id);
    }
    static getCatsBySpecies(species) {
        return cats.filter((cat) => cat.species === species);
    }

    addCat() {
        cats.push(this);
    }

    static updateCat(id, newCat) {
        const index = cats.findIndex((cat) => cat.id === id);
        if (index === -1) {
            return false;
        } else {
            cats[index] = { id, ...newCat };
            return true;
        }
    }

    static deleteCat(id) {
        const index = cats.findIndex((cat) => cat.id === id);
        if (index === -1) {
            return false;
        } else {
            cats.splice(index, 1);
            return true;
        }
    }
}

export default Cat;
