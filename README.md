# Session Storage – JavaScript

O **Session Storage** (Armazenamento de Sessão) é um recurso da API *Web Storage* que permite aos desenvolvedores salvarem dados temporários em formato de chave e valor diretamente no navegador do usuário.

---

## Principais Características

* **Duração temporária:** Os dados ficam salvos apenas enquanto a aba ou a janela do navegador estiver aberta. Assim que você fecha a aba, todas as informações são apagadas automaticamente.
* **Persistência na página:** Sobrevive a atualizações (*refresh*) da página.
* **Isolamento por aba:** Cada aba ou janela possui o seu próprio espaço de armazenamento isolado. Se você abrir o mesmo site em duas abas diferentes, elas não compartilharão os dados do Session Storage.
* **Acesso exclusivo no cliente (*Client-side*):** Os dados são manipulados e lidos apenas pelo navegador (via JavaScript), sem serem enviados automaticamente para o servidor a cada requisição (diferente do que acontece com os cookies).
* **Capacidade:** Permite armazenar geralmente entre 5 MB e 10 MB de dados (em formato de texto/string).

---

## Principais Métodos em JavaScript

Para manipular o `sessionStorage`, você utiliza comandos simples no JS:

* **Salvar um dado:**
  ```javascript
  sessionStorage.setItem('chave', 'valor');

* **Ler um dado:**
  ```javascript
  const valor = sessionStorage.getItem('chave');

* **Remover um dado específico:**
  ```javascript
  sessionStorage.removeItem('chave');

* **Limpar todo o armazenamento da sessão:**
  ```javascript
  sessionStorage.clear();

---

## Quando Usar?

* **Segurança temporária:** Armazenar informações sensíveis daquela sessão que devem sumir quando o usuário fechar o navegador.
