// Lista de produtos
const products = [
    { id: 1, name: "Kit 3 Camisas Sociais Masculina Slim de Manga Longa", price: 120.99, image: "images produtos/roupas/Camisas.jpg",},
    { id: 2, name: "Tênis Esportivo", price: 80.49, image: "images produtos/Calcados/TênisEsportivo.jpg" },
    { id: 3, name: "Regata Basquete Masculina M10 Slam Jamaica - Preto", price: 80.91, image: "images produtos/roupas/Regata.jpg" },
    { id: 4, name: "Moletom Masculino Canguru Promocional", price: 100.00, image: "images produtos/roupas/Moletom.jpg" },
    { id: 5, name: "Vestido Longo Soltinho com Fenda", price: 139.99, image: "images produtos/roupas/Vestido.jpg" },
    { id: 6, name: "Kit 5 Camisetas Regatas Femininas Alça Grossa Coloridas", price: 78.90, image: "images produtos/roupas/regata femenina.jpg" },
    { id: 7, name: "Fone QCY T29 Bluetooth", price: 129.99, image: "images produtos/eletronicos/Fone Bluetooth.jpg" },
    { id: 8, name: "Apple iPhone 14 (128 GB) | Estelar", price: 3899, image: "images produtos/eletronicos/Iphone.jpg" },
    { id: 9, name: "Relógio Octea Lux Sport, Pulseira de metal, Azul, Acabamento em dourado", price: 2450, image: "images produtos/eletronicos/Relogio.jpg" },
    { id: 10, name: "Echo Dot 5ª geração | O Echo Dot com o melhor som já lançado | Cor Preta", price: 252.27, image: "images produtos/eletronicos/Echo.jpg" },
    { id: 11, name: "Caixa de Som Bluetooth JBL Partybox Club 120 160W", price: 2200, image: "images produtos/eletronicos/caixa de som.jpg" },
    { id: 12, name: "Tênis Nike Court Borough Low ", price: 599.99, image: "images produtos/Calcados/Nike.jpg" },
    { id: 13, name: "Tênis Shox 12 Molas", price: 329.00, image: "images produtos/Calcados/12mola.png" },
    { id: 14, name: "Tênis Fiber Fly All Black Recovery, Preto", price: 299.90, image: "images produtos/Calcados/Fly.jpg" },
    { id: 15, name: "Tênis Fila Racer T2 Feminino", price: 340.90, image: "images produtos/Calcados/Fila.png" },
    { id: 16, name: "Aliança de Namoro, Prateada, Resistente ao Desgaste, Reforçado, não Enferruja e não Escurece.", price: 20.75, image: "images produtos/acessorios/anel.jpg" },
    { id: 17, name: "Cordão Corrente Aço Inoxidável 60cm Masculino", price: 55.50, image: "images produtos/acessorios/correntinha.jpg" },
    { id: 18, name: "Pulseira Berloque Com Trava de Segurança Banhado a Prata 925", price: 154.90, image: "images produtos/acessorios/Pulseira Berloque.jpg" },
    { id: 19, name: "Boné Five Panel Anth Co Aba Reta Original Strapback", price: 80.00, image: "images produtos/acessorios/Boné.jpg" },
    { id: 20, name: "Óculos de Sol Unissex Maya Jungle Polarizado", price: 119.90, image: "images produtos/acessorios/Oculos.jpg" },
    { id: 21, name: "Tênis Adidas Ultraboost 22", price: 799.99, image: "images produtos/Calcados/TênisUltraboost22.jpg" },
    { id: 22, name: "Tênis Vans Old Skool", price: 299.90, image: "images produtos/Calcados/vans.jpg" },
    { id: 23, name: "Bota Timberland 6 Polegadas", price: 599.00, image: "images produtos/Calcados/BotaAmarela.jpg" },
    { id: 24, name: "Tênis New Balance 574", price: 350.00, image: "images produtos/Calcados/NewBalance.jpg" },
    { id: 25, name: "Sapatênis Masculino Levis", price: 180.00, image: "images produtos/Calcados/Levis.jpg" },
    { id: 26, name: "Tênis Nike Air Max 270 React", price: 799.99, image: "images produtos/Calcados/Air Max270.jpg" },
    { id: 27, name: "Tênis Puma Suede Classic", price: 450.00, image: "images produtos/Calcados/Puma Suede.jpg" },
    { id: 28, name: "Tênis Mizuno Wave Rider 24",  price: 549.90, image: "images produtos/Calcados/Mizuno.jpg" },
    { id: 29, name: "Bota Chelsea Couro Masculina", price: 499.99, image: "images produtos/Calcados/Bota2.jpg" },
    { id: 30, name: "Sandália Feminina Usaflex Conforto",price: 169.90, image: "images produtos/Calcados/Sandalia.jpg" },
    { id: 31, name: "Jaqueta Masculina Jeans", price: 179.99, image: "images produtos/roupas/Jaquetajpg.jpg" },
    { id: 32, name: "Blusa de Frio Feminina Tricot", price: 89.90, image: "images produtos/roupas/BlusaMangaLonga.jpg" },
    { id: 33, name: "Calça Jeans Masculina Slim Fit", price: 119.00, image: "images produtos/roupas/CalcaJeans.jpg" },
    { id: 34, name: "Saia Longa Estampada",  price: 89.90, image: "images produtos/roupas/Saia.jpg" },
    { id: 35, name: "Camiseta Básica Masculina", price: 49.99, image: "images produtos/roupas/CamisaBasica.webp" },
    { id: 36, name: "Vestido Floral Feminino",  price: 135.00, image: "images produtos/roupas/VestidoFloral.jpg" },
    { id: 37, name: "Shorts Masculino Sport", price: 65.00, image: "images produtos/roupas/Short.jpg" },
    { id: 38, name: "Blusa Polo Masculina", price: 89.90, image: "images produtos/roupas/Polo.jpg" },
    { id: 39, name: "Jaqueta Bomber Feminina",  price: 199.99, image: "images produtos/roupas/Bomber.jpg" },
    { id: 40, name: "Macacão Jeans Feminino", price: 149.90, image: "images produtos/roupas/Macacao.jpg" },
    { id: 41, name: "Cinto Masculino Couro",  price: 89.99, image: "images produtos/acessorios/cinto.jpg" },
    { id: 42, name: "Carteira de Couro Masculina", price: 99.90, image: "images produtos/acessorios/carteira.jpg" },
    { id: 43, name: "Relógio Casio F91W",  price: 129.90, image: "images produtos/acessorios/rélogio2.jpg" },
    { id: 44, name: "Pulseira Masculina Couro e Aço", price: 45.00, image: "images produtos/acessorios/pulseira.jpg" },
    { id: 45, name: "Capa de Celular iPhone 14",  price: 49.90, image: "images produtos/acessorios/capaiphone.jpg" },
    { id: 46, name: "Mochila Masculina de Couro", price: 249.00, image: "images produtos/acessorios/mochila.jpg" },
    { id: 47, name: "Fone de Ouvido JBL Tune 500BT", price: 199.99, image: "images produtos/acessorios/Jbl.jpg" },
    { id: 48, name: "Óculos de Sol Ray-Ban Wayfarer",  price: 450.00, image: "images produtos/acessorios/Rayban.jpg" },
    { id: 49, name: "Chaveiro Personalizado de Aço Inoxidável",  price: 29.90, image: "images produtos/acessorios/chaveiro.jpg" },
    { id: 50, name: "Luvas de Inverno Unissex",  price: 59.99, image: "images produtos/acessorios/Luvas.jpg" },
    { id: 51, name: "Smartwatch Samsung Galaxy Watch 5",  price: 1099.00, image: "images produtos/eletronicos/relogiogalaxy.jpg" },
    { id: 52, name: "Fone de Ouvido Sony WH-1000XM5",  price: 1599.00, image: "images produtos/eletronicos/Sony.jpg" },
    { id: 53, name: "TV LED Samsung 50\" 4K",  price: 2799.00, image: "images produtos/eletronicos/tv.jpg" },
    { id: 54, name: "Laptop Dell Inspiron 15",  price: 3500.00, image: "images produtos/eletronicos/notebook.jpg" },
    { id: 55, name: "Câmera Canon EOS Rebel T7",  price: 2300.00, image: "images produtos/eletronicos/camera.jpg" },
    { id: 56, name: "Drone DJI Mini 2", price: 2999.00, image: "images produtos/eletronicos/drone.jpg" },
    { id: 57, name: "Tablet Samsung Galaxy Tab S7",  price: 2100.00, image: "images produtos/eletronicos/tablet.jpg" },
    { id: 58, name: "Console Playstation 5",  price: 4999.00, image: "images produtos/eletronicos/play5.jpg" },
    { id: 59, name: "Câmera de Segurança Wi-Fi Intelbras", price: 499.90, image: "images produtos/eletronicos/seguranca.jpg" },
    { id: 60, name: "Carregador Sem Fio Anker PowerWave",  price: 129.90, image: "images produtos/eletronicos/carregador.jpg" },  
];

// Gerenciamento de favoritos
const getFavorites = () => JSON.parse(localStorage.getItem("favorites")) || [];
const saveFavorites = (favorites) => localStorage.setItem("favorites", JSON.stringify(favorites));
const toggleFavorite = (productId) => {
    let favorites = getFavorites();
    if (favorites.includes(productId)) {
        favorites = favorites.filter((id) => id !== productId);
    } else {
        favorites.push(productId);
    }
    saveFavorites(favorites);
    renderProducts();
    renderFavorites();
};

// Gerenciamento do carrinho
const getCart = () => JSON.parse(localStorage.getItem("cart")) || [];
const saveCart = (cart) => localStorage.setItem("cart", JSON.stringify(cart));
const addToCart = (productId) => {
    const cart = getCart();
    const product = products.find((p) => p.id === productId);
    const productInCart = cart.find((item) => item.id === productId);

    if (productInCart) {
        productInCart.quantity += 1; // Incrementa a quantidade
    } else {
        cart.push({ ...product, quantity: 1 }); // Adiciona ao carrinho
    }

    saveCart(cart);
    renderCart();
    alert("Produto adicionado ao carrinho!");
};
const removeFromCart = (productId) => {
    let cart = getCart();
    cart = cart.filter((item) => item.id !== productId);
    saveCart(cart);
    renderCart();
};

// Renderizar produtos
const renderProducts = () => {
    const productGrid = document.getElementById("product-grid");
    if (!productGrid) return;

    productGrid.innerHTML = "";
    products.forEach((product) => {
        const isFavorite = getFavorites().includes(product.id);
        const card = document.createElement("div");
        card.className = "col-6 col-md-4 col-lg-3";
        card.innerHTML = `
            <div class="card">
                <img src="${product.image}" class="card-img card-img-top" alt="${product.name}">
                <div class="card-body text-center">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">R$ ${product.price.toFixed(2)}</p>
                    <button class="btn btn-outline-primary mb-2" onclick="addToCart(${product.id})">Comprar</button>
                    <button class="btn ${isFavorite ? "btn-danger" : "btn-outline-danger"}" 
                            onclick="toggleFavorite(${product.id})">
                        ${isFavorite ? "Remover dos Favoritos" : "Adicionar aos Favoritos"}
                    </button>
                </div>
            </div>
        `;
        productGrid.appendChild(card);
    });
};

// Renderizar favoritos
const renderFavorites = () => {
    const favoritesGrid = document.getElementById("favorites-grid");
    if (!favoritesGrid) return;

    const favorites = getFavorites();
    const favoriteProducts = products.filter((product) => favorites.includes(product.id));
    favoritesGrid.innerHTML = "";

    if (favoriteProducts.length > 0) {
        favoriteProducts.forEach((product) => {
            const card = document.createElement("div");
            card.className = "col-6 col-md-4 col-lg-3";
            card.innerHTML = `
                <div class="card">
                    <img src="${product.image}" class="card-img card-img-top" alt="${product.name}">
                    <div class="card-body text-center">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">R$ ${product.price.toFixed(2)}</p>
                        <button class="btn btn-danger" onclick="toggleFavorite(${product.id})">Remover dos Favoritos</button>
                    </div>
                </div>
            `;
            favoritesGrid.appendChild(card);
        });
    } else {
        favoritesGrid.innerHTML = "<p class='text-center'>Você ainda não tem produtos favoritos.</p>";
    }
};


// Renderizar carrinho
const renderCart = () => {
    const cartGrid = document.getElementById("cart-grid");
    if (!cartGrid) return;

    const cart = getCart();
    cartGrid.innerHTML = "";

    if (cart.length > 0) {
        cart.forEach((item) => {
            const row = document.createElement("div");
            row.className = "row align-items-center mb-3";
            row.innerHTML = `
                <div class="col-4">
                    <img src="${item.image}" alt="${item.name}" class="img-fluid">
                </div>
                <div class="col-4 text-center">
                    <h5>${item.name}</h5>
                    <p>R$ ${item.price.toFixed(2)}</p>
                    <p>Quantidade: ${item.quantity}</p>
                </div>
                <div class="col-4 text-center">
                    <button class="btn btn-danger" onclick="removeFromCart(${item.id})">Remover</button>
                </div>
            `;
            cartGrid.appendChild(row);
        });

        const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        const totalDiv = document.createElement("div");
        totalDiv.className = "text-end mt-3";
        totalDiv.innerHTML = `Total: R$ ${total.toFixed(2)}`;
        cartGrid.appendChild(totalDiv);
    } else {
        cartGrid.innerHTML = "<p class='text-center'>Seu carrinho está vazio.</p>";
    }
};
// Atualiza o ícone do carrinho (quantidade de itens)
const renderCartIcon = () => {
    const cart = getCart();
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    const cartIcon = document.getElementById("cart-count");
    if (cartIcon) cartIcon.textContent = cartCount;
};
// Inicializar a página
document.addEventListener("DOMContentLoaded", () => {
    renderProducts();
    renderFavorites();
    renderCart();
});
//Ir para a página de pagamentos
function irPagamento(){
    window.location = "pagamentos.html"
}
// Função para remover um favorito específico
function removeFavorito(itemId) {
    const item = document.getElementById('item-' + itemId);
    if (item) {
        item.remove();  // Remove o item da lista
    }
}

