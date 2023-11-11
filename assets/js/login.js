// Obtém o botão de alternar o modo escuro
const darkModeToggle = document.getElementById('dark-mode-toggle');

// Obtém a referência para os elementos que precisam ter o estilo alterado
const body = document.body;
const nav = document.querySelector('nav');
const navLinks = document.querySelectorAll('.nav-itens li a');
const btn = document.querySelector('.btn button');
const containers = document.querySelectorAll('.container');
const formContent = document.querySelectorAll('.form-content');

// Função para alternar o modo escuro
function toggleDarkMode() {
  // Adiciona ou remove a classe 'dark-mode' no elemento body
  body.classList.toggle('dark-mode');

  // Adiciona ou remove a classe 'dark-mode' nos elementos individuais
  nav.classList.toggle('dark-mode');
  navLinks.forEach(link => link.classList.toggle('dark-mode'));
  btn.classList.toggle('dark-mode');
  containers.forEach(container => container.classList.toggle('dark-mode'));
  formContent.forEach(content => content.classList.toggle('dark-mode'));
}

// Adiciona um ouvinte de eventos para o botão de alternar o modo escuro
darkModeToggle.addEventListener('click', toggleDarkMode);