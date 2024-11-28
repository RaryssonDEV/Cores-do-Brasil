const products = [
    { id: 1, name: "Kit 3 Camisas Sociais Masculina Slim de Manga Longa", category: "roupas", price: 120.99, image: "images produtos/roupas/Camisas.jpg" },
    { id: 2, name: "Regata Basquete Masculina M10 Slam Jamaica - Preto", category: "roupas", price: 80.91, image: "images produtos/roupas/Regata.jpg" },
    { id: 3, name: "Moletom Masculino Canguru Promocional", category: "roupas", price: 100.00, image: "images produtos/roupas/Moletom.jpg" },
    { id: 4, name: "Vestido Longo Soltinho com Fenda", category: "roupas", price: 139.99, image: "images produtos/roupas/Vestido.jpg" },
    { id: 5, name: "Kit 5 Camisetas Regatas Femininas Alça Grossa Coloridas", category: "roupas", price: 78.90, image: "images produtos/roupas/regata femenina.jpg" },
    { id: 6, name: "Fone QCY T29 Bluetooth", category: "eletronicos", price: 129.99, image: "images produtos/eletronicos/Fone Bluetooth.jpg" },
    { id: 7, name: "Apple iPhone 14 (128 GB) | Estelar", category: "eletronicos", price: 3899, image: "images produtos/eletronicos/Iphone.jpg" },
    { id: 8, name: "Relógio Octea Lux Sport, Pulseira de metal, Azul, Acabamento em dourado", category: "eletronicos", price: 2.450, image: "images produtos/eletronicos/Relogio.jpg" },
    { id: 9, name: "Echo Dot 5ª geração | O Echo Dot com o melhor som já lançado | Cor Preta", category: "eletronicos", price: 252.27, image: "images produtos/eletronicos/Echo.jpg" },
    { id: 10, name: "Caixa de Som Bluetooth JBL Partybox Club 120 160W", category: "eletronicos", price: 2.180, image: "images produtos/eletronicos/caixa de som.jpg" },
    { id: 11, name: "Aliança de Namoro, Prateada, Resistente ao Desgaste, Reforçado, não Enferruja e não Escurece.", category: "acessorios", price: 20.75, image: "images produtos/acessorios/anel.jpg" },
    { id: 12, name: "Cordão Corrente Aço Inoxidável 60cm Masculino", category: "acessorios", price: 55.50, image: "images produtos/acessorios/correntinha.jpg" },
    { id: 13, name: "Pulseira Berloque Com Trava de Segurança Banhado a Prata 925", category: "acessorios", price: 154.90, image: "images produtos/acessorios/Pulseira Berloque.jpg" },
    { id: 14, name: "Boné Five Panel Anth Co Aba Reta Original Strapback", category: "acessorios", price: 199.90, image: "images produtos/acessorios/Boné.jpg" },
    { id: 15, name: "Óculos de Sol Unissex Maya Jungle Polarizado", category: "acessorios", price: 80.00, image: "images produtos/acessorios/Oculos.jpg" },
    { id: 16, name: "Tênis Nike Court Borough Low", category: "calcados", price: 250.00, image: "images produtos/Calcados/Nike.jpg" },
    { id: 17, name: "Tênis Shox 12 Molas", category: "calcados", price: 1200.00, image: "images produtos/Calcados/12mola.png" },
    { id: 18, name: "Tênis Fiber Fly All Black Recovery, Preto", category: "calcados", price: 199.90, image: "images produtos/Calcados/Fly.jpg" },
    { id: 19, name: "Tênis Fila Racer T2 Feminino", category: "calcados", price: 150.00, image: "images produtos/Calcados/Fila.png"},
    { id: 20, name: "Tênis Esportivo", category: "calcados", price: 300.00, image: "images produtos/Calcados/TênisEsportivo.jpg" },
];

// Função para navegar até uma categoria
const navigateToCategory = (category) => {
    const productGrid = document.getElementById("product-grid");
    productGrid.innerHTML = ""; // Limpa os produtos existentes

    // Filtra produtos da categoria
    const filteredProducts = products.filter(product => product.category === category);

    if (filteredProducts.length > 0) {
        filteredProducts.forEach(product => {
            const card = document.createElement("div");
            card.className = "col-6 col-md-4 col-lg-3 mb-4";
            card.innerHTML = `
                <div class="card">
                    <img src="${product.image}" class="card-img-top" alt="${product.name}">
                    <div class="card-body text-center">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">R$ ${product.price.toFixed(2)}</p>
                        <button class="btn btn-warning">Adicionar ao Carrinho</button>
                    </div>
                </div>
            `;
            productGrid.appendChild(card);
        });
    } else {
        productGrid.innerHTML = "<p class='text-center'>Nenhum produto encontrado nesta categoria.</p>";
    }
};

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
                <img src="${product.image}" class="card-img-top" alt="${product.name}">
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
                    <img src="${product.image}" class="card-img-top" alt="${product.name}">
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


// Função para adicionar todos os produtos de uma categoria aos favoritos
const addCategoryToFavorites = (category) => {
    const filteredProducts = products.filter(product => product.category === category);
    let favorites = getFavorites();

    filteredProducts.forEach(product => {
        if (!favorites.includes(product.id)) {
            favorites.push(product.id);
        }
    });

    saveFavorites(favorites);
    renderFavorites();
    alert(`Todos os produtos da categoria "${category}" foram adicionados aos favoritos.`);
};

// Função para adicionar todos os produtos de uma categoria ao carrinho
const addCategoryToCart = (category) => {
    const filteredProducts = products.filter(product => product.category === category);
    let cart = getCart();

    filteredProducts.forEach(product => {
        const productInCart = cart.find(item => item.id === product.id);
        if (productInCart) {
            productInCart.quantity += 1; // Incrementa a quantidade se já estiver no carrinho
        } else {
            cart.push({ ...product, quantity: 1 }); // Adiciona ao carrinho se não estiver
        }
    });

    saveCart(cart);
    renderCart();
    alert(`Todos os produtos da categoria "${category}" foram adicionados ao carrinho.`);
};

// Atualização no HTML (Exemplo de botões para categorias)
// Exemplo: Inclua botões para chamar as funções acima
document.addEventListener("DOMContentLoaded", () => {
    const categoryButtonsContainer = document.getElementById("category-buttons");

    // Exemplo de categorias disponíveis
    const categories = ["roupas", "eletronicos", "acessorios", "calcados"];

    categories.forEach(category => {
        const buttonFavorites = document.createElement("button");
        buttonFavorites.className = "btn btn-outline-primary m-2";
        buttonFavorites.textContent = `Adicionar todos de ${category} aos Favoritos`;
        buttonFavorites.onclick = () => addCategoryToFavorites(category);

        const buttonCart = document.createElement("button");
        buttonCart.className = "btn btn-outline-success m-2";
        buttonCart.textContent = `Adicionar todos de ${category} ao Carrinho`;
        buttonCart.onclick = () => addCategoryToCart(category);

        categoryButtonsContainer.appendChild(buttonFavorites);
        categoryButtonsContainer.appendChild(buttonCart);
    });

    renderProducts();
    renderFavorites();
    renderCart();
    renderCartIcon();
});