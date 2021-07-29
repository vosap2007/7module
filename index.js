// const btEl1 = document.querySelector(['#btn1']);
// btEl1.addEventListener('click', () => {
//     console.log('Кликнули по кнопке №1')
// })

// const btEl2 = document.querySelector(['#btn2']);
// btEl2.addEventListener('click', () => {
//     console.log('Кликнули по кнопке №2')
// })

// const btEl3 = document.querySelector(['#btn3']);
// btEl3.addEventListener('click', () => {
//     console.log('Кликнули по кнопке №3')
// })

// const btEl4 = document.querySelector(['#btn4']);
// btEl4.addEventListener('click', () => {
//     console.log('Кликнули по кнопке №4')
// })

// const btEl5 = document.querySelector(['#btn5']);
// btEl5.addEventListener('click', () => {
//     console.log('Кликнули по кнопке №5')
// })

// const divEl = document.querySelector(['#list-button']);
// divEl.addEventListener('click', (e) => {
//     if(e.target.nodeName !== 'BUTTON'){
//         return
//     }
//     console.log(`Кликнули по ${e.target.textContent}`)
    
// })

// const listButtonEl = document
// .querySelector('.list-button')
// .addEventListener('click', addClass);

// function addClass(e) {
//     if(e.target.nodeName !== 'BUTTON') {
//         return;
//     }
//    // const activeBtn = document.querySelector('.btn-active');
    
//     // if(activeBtn) {
//     //     activeBtn.classList.remove('btn-active');
//     // }

//     e.target.classList.toggle('btn-active');
// }

const colors = [
    {hex: '#f44336', rgb: '244,67,54'},
    {hex: '#009620', rgb: '200, 182, 5'},
    {hex: '#000688', rgb: '100, 275, 100'},
    {hex: '#009688', rgb: '55, 25, 59'},
    {hex: '#000000', rgb: '235, 23, 200'},
    {hex: '#f77688', rgb: '127, 158, 0'},
    {hex: '#007588', rgb: '24, 235, 174'},
];

function createCardColor(colors) {
   return colors.map(color => {
        return`
        <div class="color-card">
        <div 
        class="color-swatch" 
        data-hex="${color.hex}"
        data-rgb="${color.rgb}"
        style="background-color: ${color.hex}"
        ></div>
        <div class="color-meta">
            <p>HEX: ${color.hex}</p>
            <p>RGB: ${color.rgb}</p>
        </div>
        </div>
        `;
    }).join('');
};

const allCardsColor = createCardColor(colors);

const boxEl = document.querySelector('.js-palette');

boxEl.insertAdjacentHTML('beforeend', allCardsColor);

//const colorSwatchEl = document.querySelector('.color-swatch');
boxEl.addEventListener('click', (e) => {
    
    if(!e.target.classList.contains('color-swatch')) {
        return;
    }

    const isActive = document.querySelector('.color-card.is-active');

    if(isActive) {
        isActive.classList.remove('is-active');
    }

    e.target.classList.add('is-active');

    document.body.style.backgroundColor = e.target.dataset.hex;
})


