const query_1 = window.matchMedia('screen and (max-width: 640px)');
const query_2 = window.matchMedia('screen and (min-width: 640px) and (max-width: 768px');
const query_3 = window.matchMedia('screen and (min-width: 768px) and (max-width: 1024px)');
const query_4 = window.matchMedia('screen and (min-width: 1024px)');

const btn = document.querySelector('.btn');
const connexionSpan = document.querySelector('.connexionSpan');

function checkQueries(){
    query_1.addEventListener('change', (width) => {
        if(width.matches) {
            connexionSpan.classList.add('hidden');
        };
    });

    query_2.addEventListener('change', (width) => {
        if(width.matches) {
            document.body.classList.remove('green');
            document.body.classList.add('violet');
            connexionSpan.classList.remove('hidden');
        };
    });
    
    query_3.addEventListener('change', (width) => {
        if(width.matches) {
            document.body.classList.add('green');
            btn.classList.add('hidden');
        };
    });
    
    query_4.addEventListener('change', (width) => {
        if(width.matches) {
            btn.classList.remove('hidden');
        };
    });
}

checkQueries();