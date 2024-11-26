// Lista de produtos
const products = [
    { id: 1, name: "Tênis Esportivo", price: 120.99, image: "Logo.png" },
    { id: 2, name: "Kit 3 Camisas Sociais Slim", price: 80.49, image: "imagens/Camisas.jpg" },
    { id: 3, name: "Relógio Elegante", price: 250.00, image: "imagens/Relogio.jpg" },
    { id: 4, name: "Bolsa de Couro", price: 199.90, image: "imagens/Bolsa.jpg" },
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
        totalDiv.innerHTML = <h4>Total: R$ ${total.toFixed(2)}</h4>;
        cartGrid.appendChild(totalDiv);
    } else {
        cartGrid.innerHTML = "<p class='text-center'>Seu carrinho está vazio.</p>";
    }
};

// Inicializar a página
document.addEventListener("DOMContentLoaded", () => {
    renderProducts();
    renderFavorites();
    renderCart();
});