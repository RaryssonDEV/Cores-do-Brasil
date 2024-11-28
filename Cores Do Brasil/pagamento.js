// Evento de submissão do formulário
document.getElementById("payment-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    // Captura os dados do formulário
    const name = document.getElementById("name").value;
    const cpf = document.getElementById("cpf").value;
    const cardNumber = document.getElementById("card-number").value;
    const expiryDate = document.getElementById("expiry-date").value;
    const cvv = document.getElementById("cvv").value;
    const address = document.getElementById("address").value;

    // Validação simples
    if (!name || !cpf || !cardNumber || !expiryDate || !cvv || !address) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Simula a finalização do pagamento
    alert("Pagamento realizado com sucesso! Obrigado por comprar na Cores do Brasil.");

    // Limpa o carrinho e redireciona para a página inicial
    localStorage.removeItem("cart");
    window.location.href = "index.html";
});