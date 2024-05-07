class Star {
    constructor(name, age, color, galaxy, distance) {
        this.name = name;
        this.age = age;
        this.color = color;
        this.galaxy = galaxy;
        this.distance = distance;
    }

    toHtml() {
        const main = document.querySelector('main');
        const section = document.createElement('section');
        main.appendChild(section);

        const name = document.createElement('p');
        name.textContent = "Nom: " + this.name;
        section.appendChild(name);

        const age = document.createElement('p');
        age.textContent = "Age: " + this.age;
        section.appendChild(age);

        const color = document.createElement('p');
        color.textContent = "Couleur: " + this.color;
        section.appendChild(color);

        const galaxy = document.createElement('p');
        galaxy.textContent = "Galaxy: " + this.galaxy;
        section.appendChild(galaxy);

        const distance = document.createElement('p');
        distance.textContent = "Distance: " + this.distance;
        section.appendChild(distance);
    }
};

const stars = [
    new Star("45IR1", 690000, "#F4F6F4", "Andromeda", 100054),
    new Star("45IR2", 680000, "#F4F5F4", "Andromeda", 100353),
    new Star("45IR3", 670000, "#F4F4F4", "Andromeda", 100454),
    new Star("45IR4", 660000, "#F4F3F4", "Andromeda", 100554),
    new Star("45IR5", 650000, "#F4F2F4", "Andromeda", 100654),
    new Star("45IR6", 640000, "#F4F1F4", "Andromeda", 100754),
    new Star("45IR7", 630000, "#F4F0F4", "Andromeda", 100854),
];

stars.forEach(star => {
    star.toHtml();
});