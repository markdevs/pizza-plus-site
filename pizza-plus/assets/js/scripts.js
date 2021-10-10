let plus = [
    {
        id: 1,
        cod: 2001,
        titulo: 'Catupperoni Plus',
        ingredientes: 'Pepperoni, cebola roxa, muzarella, azeitona preta, parmesão e catupiry',
        preco: 59.90,
        off: true,
        img: 'assets/images/pizza-pepperoni.png'
    },
    {
        id: 2,
        cod: 2002,
        titulo: 'Napolitana Plus',
        ingredientes: 'Tomate, cebola, muzarella de buffala, manjericão e molho pesto',
        preco: 49.90,
        off: true,
        img: 'assets/images/napolitana-plus.png'
    },
    {
        id: 3,
        cod: 2003,
        titulo: 'Rúcula Plus',
        ingredientes: 'Tomate seco, rúcula ,cebola, muzarella,manjericão e molho de tomate',
        preco: 69.90,
        off: false,
        img: 'assets/images/rucula-com-tomate-seco.png'
    },
    {
        id: 4,
        cod: 2004,
        titulo: 'Almare Plus',
        ingredientes: 'Camarão, mexilhão,cebola, muzarella, manjericão e molho de tomate',
        preco: 99.90,
        off: false,
        img: 'assets/images/almare-plus.png'
    },

]



startTemplate = () => {
    for (let i = 0; i < plus.length; i++) {
        const element = plus[i];
        let price = element.preco;
        let formatPrice = price.toLocaleString('pt-BR', {style: 'currency',currency: 'BRL'});
        
        let markup = `
        <div class="card" id="pizza_card">
            <div class="card-image has-text-centered">
                <figure class="image is-256x256">
                    <img src="${element.img}" alt="${element.titulo}">
                </figure>
            </div>
            <div class="card-content has-text-centered">
                <p class="title is-5">${element.titulo}</p>
                <span class="desc">${element.ingredientes}</span>
                <p class="title is-6 price">${formatPrice}</p>
                <button class="button" id="add_cart">Add to cart</button>
            </div>
        </div>
        `;
        

        document.getElementById('sec_one').innerHTML += markup;
       
       
    }
}
startTemplate();


atualizarCarrinho = () => {
    let clickButtonAddToCart = document.querySelectorAll('#add_cart');
    let cart = [];
    for (let i = 0; i < clickButtonAddToCart.length; i++) {
        const element = clickButtonAddToCart[i];
        element.addEventListener('click', function(event) {
            console.log(event);
        })
        
    }
}
atualizarCarrinho();


