document.addEventListener('DOMContentLoaded', atualizarInterfaceCarrinho);

function adicionarAoCarrinho(nome, preco) {
  let carrinho = JSON.parse(sessionStorage.getItem('carrinhoCompras')) || [];

  carrinho.push({ nome, preco });

  sessionStorage.setItem('carrinhoCompras', JSON.stringify(carrinho));

  atualizarInterfaceCarrinho();
}

function atualizarInterfaceCarrinho() {
  const carrinho = JSON.parse(sessionStorage.getItem('carrinhoCompras')) || [];

  const listaElement = document.getElementById('lista-carrinho');
  const totalItensElement = document.getElementById('total-itens');
  const valorTotalElement = document.getElementById('valor-total');

  listaElement.innerHTML = '';
  let valorTotal = 0;

  if (carrinho.length === 0) {
    listaElement.innerHTML = '<li class="vazio">O carrinho está vazio.</li>';
  } else {
    carrinho.forEach((item) => {
      valorTotal += item.preco;
      const li = document.createElement('li');
      li.innerHTML = `<span>${item.nome}</span> <strong>R$ ${item.preco.toFixed(2).replace('.', ',')}</strong>`;
      listaElement.appendChild(li);
    });
  }

  totalItensElement.textContent = carrinho.length;
  valorTotalElement.textContent = `R$ ${valorTotal.toFixed(2).replace('.', ',')}`;
}

function limparCarrinho() {
  sessionStorage.removeItem('carrinhoCompras');
  atualizarInterfaceCarrinho();
}