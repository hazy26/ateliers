class Boutique{
    constructor(name, address, type, articles, totalCash){
        this.name = name;
        this.address = address;
        this.type = type;
        this.articles = articles;
        this.totalCash = totalCash;
    };

    buy(article, prix){
        if(this.articles.includes(article)){
            this.totalCash += prix;
        } else{
            return 0;
        };
    };
    
    refund(name, montant){
        if(name === this.name & montant <= this.totalCash){
            this.totalCash -= montant;
        } else{
            return 0;
        };
    };

    toHtml(){
        const boutiquesContainer = document.createElement('div');
        boutiquesContainer.classList.add('boutique__container');

        const name = document.createElement('p');
        const address = document.createElement('p');
        const type = document.createElement('p');
        const articles = document.createElement('p');
        const totalCash = document.createElement('p');

        name.textContent = 'Boutique : ' + this.name;
        address.textContent = 'Adresse : ' + this.address;
        type.textContent = 'Secteur : ' + this.type;
        articles.textContent = 'Articles disponibles : ' + this.articles;
        totalCash.textContent = 'Argent total : ' + this.totalCash;

        boutiquesContainer.appendChild(name);
        boutiquesContainer.appendChild(address);
        boutiquesContainer.appendChild(type);
        boutiquesContainer.appendChild(articles);
        boutiquesContainer.appendChild(totalCash);

        document.body.appendChild(boutiquesContainer);
    };
};

const boutiques = [
    new Boutique(
        'Les Vêtements Saint-Jean',
        '123 rue Saint-Jean',
        'Vêtements',
        ['Chandail', 'Pantalon', 'Manteau'],
        300
    ),
    new Boutique(
        'Boulangerie Charest',
        '456 boul. Charest Ouest',
        'Alimentation',
        ['Biscuits', 'Croissant', 'Gâteau'],
        220
    ),
    new Boutique(
        'Les Animaux de Marie',
        "789 rue Marie-de-l'Incarnation",
        'Animalerie',
        ['Chat', 'Chien', 'Oiseau'],
        150
    )
];

const boutiqueAlimentation = boutiques.find((boutique) => boutique.type === 'Alimentation' );
console.log(boutiqueAlimentation);

boutiques[0].buy('Pantalon', 40);
boutiques[1].refund('Boulangerie Charest', 24);

boutiques.forEach(boutique => {
    boutique.toHtml();
});