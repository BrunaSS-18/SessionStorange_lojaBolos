# Session Storage – JavaScript

O **Session Storage** (Armazenamento de Sessão) é um recurso da API *Web Storage* que permite aos desenvolvedores salvarem dados temporários em formato de chave e valor diretamente no navegador do usuário[cite: 1].

---

## Principais Características

* **Duração temporária:** Os dados ficam salvos apenas enquanto a aba ou a janela do navegador estiver aberta[cite: 1]. Assim que você fecha a aba, todas as informações são apagadas automaticamente[cite: 1].
* **Persistência na página:** Sobrevive a atualizações (*refresh*) da página[cite: 1].
* **Isolamento por aba:** Cada aba ou janela possui o seu próprio espaço de armazenamento isolado[cite: 1]. Se você abrir o mesmo site em duas abas diferentes, elas não compartilharão os dados do Session Storage[cite: 1].
* **Acesso exclusivo no cliente (*Client-side*):** Os dados são manipulados e lidos apenas pelo navegador (via JavaScript), sem serem enviados automaticamente para o servidor a cada requisição (diferente do que acontece com os cookies)[cite: 1].
* **Capacidade:** Permite armazenar geralmente entre 5 MB e 10 MB de dados (em formato de texto/string)[cite: 1].

---

## Principais Métodos em JavaScript

Para manipular o `sessionStorage`, você utiliza comandos simples no JS[cite: 1]:

* **Salvar um dado:**
  ```javascript
  sessionStorage.setItem('chave', 'valor');
  ```[cite: 1]

* **Ler um dado:**
  ```javascript
  const valor = sessionStorage.getItem('chave');
  ```[cite: 1]

* **Remover um dado específico:**
  ```javascript
  sessionStorage.removeItem('chave');
  ```[cite: 1]

* **Limpar todo o armazenamento da sessão:**
  ```javascript
  sessionStorage.clear();
  ```[cite: 1]

---

## Quando Usar?

* **Segurança temporária:** Armazenar informações sensíveis daquela sessão que devem sumir quando o usuário fechar o navegador[cite: 1].
