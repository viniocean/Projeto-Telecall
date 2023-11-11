// Função para buscar o CEP
function buscarCep() {
  var cep = document.getElementById('cep').value;
  var url = 'https://viacep.com.br/ws/' + cep + '/json/';

  // Faz a requisição GET para a API do ViaCEP
  fetch(url)
    .then(response => response.json())
    .then(data => {
      // Verifica se o CEP é válido e preenche os campos de endereço
      if (!data.erro) {
        document.getElementById('rua').value = data.logradouro;
        document.getElementById('bairro').value = data.bairro;
        document.getElementById('cidade').value = data.localidade;
        document.getElementById('estado').value = data.uf;
      } else {
        showToast('CEP não encontrado. Por favor, verifique o CEP digitado.');
      }
    })
    .catch(error => {
      console.log('Ocorreu um erro na busca do CEP:', error);
    });
}

document.getElementById('buscar-cep').addEventListener('click', buscarCep);

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

<script>
  // Função para validar o formulário
  function validarFormulario(event) {
    event.preventDefault(); // Impede o envio do formulário

  // Obter os valores dos campos
  var nome = document.getElementById('firstname').value;
  var dataNascimento = document.getElementById('birthdate').value;
  var sexo = document.querySelector('input[name="gender"]:checked');
  var nomeMaterno = document.getElementById('mothername').value;
  var cpf = document.getElementById('cpf').value;
  var telefoneCelular = document.getElementById('cellphone').value;
  var telefoneFixo = document.getElementById('phone').value;
  var login = document.getElementById('login').value;
  var senha = document.getElementById('password').value;
  var confirmarSenha = document.getElementById('confirm-password').value;

  // Validar campos obrigatórios
  if (
  nome === '' ||
  dataNascimento === '' ||
  sexo === null ||
  nomeMaterno === '' ||
  cpf === '' ||
  telefoneCelular === '' ||
  login === '' ||
  senha === '' ||
  confirmarSenha === ''
  ) {
    alert('Todos os campos obrigatórios devem ser preenchidos');
  return;
    }

  // Validar tamanho do nome
  if (nome.length < 15 || nome.length > 60) {
    alert('O campo nome deve ter entre 15 e 60 caracteres alfabéticos');
  return;
    }

  // Validar formato dos telefones
  var telefoneCelularPattern = /^\(\d{2}\)\s\d{5}-\d{4}$/;
  var telefoneFixoPattern = /^\(\d{2}\)\s\d{4}-\d{4}$/;
  if (
  !telefoneCelular.match(telefoneCelularPattern) ||
  (telefoneFixo !== '' && !telefoneFixo.match(telefoneFixoPattern))
  ) {
    alert('Os campos de telefone celular e telefone fixo devem ter os formatos (+55)XX-XXXXXXXX');
  return;
    }

  // Validar tamanho do login
  if (login.length !== 6) {
    alert('O campo login deve ter exatamente 6 caracteres alfabéticos');
  return;
    }

  // Validar tamanho da senha
  if (senha.length !== 8) {
    alert('O campo senha deve ter exatamente 8 caracteres alfabéticos');
  return;
    }

  // Validar se as senhas são iguais
  if (senha !== confirmarSenha) {
    alert('As senhas não coincidem');
  return;
    }

  // Se chegou até aqui, o formulário é válido
  alert('Cadastro válido. Enviando formulário...');
  document.getElementById('registration-form').submit(); // Enviar o formulário
  }

  // Adicionar evento de submit ao formulário
  document.getElementById('registration-form').addEventListener('submit', validarFormulario);
</script>
