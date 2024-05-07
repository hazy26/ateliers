function createHtml(){
    const body = document.querySelector('body');

    function headerContent(){
        const header = document.createElement('header');
        body.appendChild(header);

        const shippingBar = document.createElement('div');
        shippingBar.classList.add('freeShipping__bar');
        header.appendChild(shippingBar);

        const shippingBarText = document.createElement('p');
        shippingBarText.textContent = 'Livraison Gratuite';
        shippingBar.appendChild(shippingBarText);

        const headerTop  = document.createElement('div');
        headerTop.classList.add('header__top');
        header.appendChild(headerTop);

        const headerLeft = document.createElement('div');
        headerLeft.classList.add('header__left');
        headerTop.appendChild(headerLeft);

        const logo = document.createElement('a');
        headerLeft.appendChild(logo);
        logo.href = './index.html';
        const logoIcon = document.createElement('i');
        logo.appendChild(logoIcon);
        logoIcon.classList.add('logo');
        const logoImg = document.createElement('img');
        logoImg.src = './assets/img/icons/logo.svg';
        logoIcon.appendChild(logoImg);

        const dialog = document.createElement('div');
        dialog.classList.add('dialog', 'hidden');
        dialog.id = "menu-mobile";
        headerLeft.appendChild(dialog);

        const nav = document.createElement('nav');
        nav.classList.add('menu');
        dialog.appendChild(nav);

        const closeMenuIcon = document.createElement('i');
        nav.appendChild(closeMenuIcon);
        closeMenuIcon.classList.add('closeMenu__icon');
        const closeMenuImg = document.createElement('img');
        closeMenuImg.src = './assets/img/icons/close.svg';
        closeMenuIcon.appendChild(closeMenuImg);

        const menuList = document.createElement('ul');
        menuList.classList.add('menu__items');
        nav.appendChild(menuList);

        const menuItems = [
            'Accueil',
            'Actualité',
            'Produits',
            'Contact'
        ];

        menuItems.forEach(item => {
            const li = document.createElement('li');
            menuList.appendChild(li);

            const a = document.createElement('a');
            li.appendChild(a);
            a.textContent = item;
            a.href = '#' + item;

            if(item === 'Accueil'){
                a.href = 'index.html';
            }
        });

        const iconsContainer = document.createElement('div');
        iconsContainer.classList.add('icons__container');
        headerTop.appendChild(iconsContainer);

        const menuIcons = [
            {
                src: './assets/img/icons/search.svg',
                class: 'search__icon',
            },
            {
                src: './assets/img/icons/cart.svg',
                class: 'cart__icon',
            },
            {
                src: './assets/img/icons/menu.svg',
                class: 'menu__icon',
            }
        ];

        menuIcons.forEach(icon => {
            const i = document.createElement('i');
            iconsContainer.appendChild(i);
            
            const img = document.createElement('img');
            i.appendChild(img);
            img.src = icon.src;

            img.classList.add(icon.class);
        });

        const menuIcon = document.querySelector('.menu__icon');
        menuIcon.setAttribute('data-dialog', 'menu-mobile');
        menuIcon.id = 'menu-mobile';

        const banner  = document.createElement('div');
        banner.classList.add('banner')
        header.appendChild(banner);

        const bannerFigure = document.createElement('figure');
        banner.appendChild(bannerFigure);

        const bannerPicture = document.createElement('picture');
        bannerFigure.appendChild(bannerPicture);
        const pictureSource = document.createElement('source');
        bannerPicture.appendChild(pictureSource);
        pictureSource.media = '(min-width: 640px)';
        pictureSource.srcset = './assets/img/desktop/small-black.png';
        const bannerImg = document.createElement('img');
        bannerPicture.appendChild(bannerImg);
        bannerImg.src = './assets/img/mobile/small-black.png';

        const bannerContent = document.createElement('div');
        bannerContent.classList.add('banner__content');
        banner.appendChild(bannerContent);

        const h1 = document.createElement('h1');
        bannerContent.appendChild(h1);
        h1.textContent = 'The Smart Garden';

        const bannerText = document.createElement('p');
        bannerText.textContent = "Un kit complet pour cultiver des herbes aromatiques, des légumes et des fleurs dans un espace réduit, avec des capteurs intelligents pour surveiller et ajuster automatiquement les niveaux d'eau et de lumière.";
        bannerContent.appendChild(bannerText);

        const bannerBtn = document.createElement('a');
        bannerBtn.classList.add('callToAction__btn');
        bannerBtn.textContent = 'Voir les produits';
        bannerContent.appendChild(bannerBtn);
    };   
    headerContent();

    function mainContent(){
        const products = [
            {
                imgMobile: "./assets/img/mobile/white.png",
                imgDesktop: "./assets/img/desktop/white.png",
                name: "The Smart Garden",
                color: "Blanc",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                price: "239.99$"
            },
            {
                imgMobile: "./assets/img/mobile/black.webp",
                imgDesktop: "./assets/img/desktop/black.webp",
                name: "The Smart Garden",
                color: "Noir",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                price: "249.99$"
            },
            {
                imgMobile: "./assets/img/mobile/green.webp",
                imgDesktop: "./assets/img/desktop/green.webp",
                name: "The Smart Garden",
                color: "Vert",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                price: "249.99$"
            },
            {
                imgMobile: "./assets/img/mobile/blue.webp",
                imgDesktop: "./assets/img/desktop/blue.webp",
                name: "The Smart Garden",
                color: "Bleu",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                price: "249.99$"
            },
            {
                imgMobile: "./assets/img/mobile/small_white.png",
                imgDesktop: "./assets/img/desktop/small_white.png",
                name: "The Mini Garden",
                color: "White",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                price: "189.99$"
            },
            {
                imgMobile: "./assets/img/mobile/small-black.png",
                imgDesktop: "./assets/img/desktop/small-black.png",
                name: "The Mini Garden",
                color: "Black",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                price: "199.99$"
            }
        ];

        const main = document.createElement('main');
        body.appendChild(main);

        const productsList = document.createElement('ul');
        productsList.classList.add('products__list');
        main.appendChild(productsList);

        products.forEach(product => {
            const li = document.createElement('li');
            li.classList.add('products');
            productsList.appendChild(li);
    
            const a = document.createElement('a');
            li.appendChild(a);
            a.href = '#';

            const figure = document.createElement('figure');
            a.appendChild(figure);
    
            const picture = document.createElement('picture');
            figure.appendChild(picture);

            const source = document.createElement('source');
            picture.appendChild(source);
            source.media = '(min-width: 640px)';
            source.srcset = product.imgDesktop;

            const img = document.createElement('img');
            picture.appendChild(img);
            img.src = product.imgMobile;
    
            const section = document.createElement('section');
            a.appendChild(section);
    
            const h2 = document.createElement('h2');
            section.appendChild(h2);
            h2.textContent = product.name;
    
            const div = document.createElement('div');
            div.classList.add('description');
            section.appendChild(div);
    
            const h3 = document.createElement('h3');
            div.appendChild(h3);
            h3.textContent = product.color;
    
            const p = document.createElement('p');
            div.appendChild(p);
            p.textContent = product.description;
    
            const span = document.createElement('span');
            div.appendChild(span);
            span.textContent = product.price;
        });
    };
    mainContent();

    function footerContent(){
        const footer = document.createElement('footer');
        body.appendChild(footer);
    
        const pFooter = document.createElement('p');
        pFooter.textContent = '© Smart Garden 2024';
        footer.appendChild(pFooter);
    };
    footerContent();
};
createHtml();

function dialogs(){
    const dialogBtns = document.querySelectorAll('[data-dialog]');
    const dialogs = document.querySelectorAll('.dialog');
    
    dialogBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            toggleDialog();
        });
    });

    dialogs.forEach(dialog => {
        dialog.addEventListener('click', () => {
            toggleDialog();
        });
    });

    function toggleDialog(){
        const dialog = document.querySelector('.dialog');
        dialog.classList.toggle('hidden');
        dialog.classList.toggle('open');
    }; 
};
dialogs();