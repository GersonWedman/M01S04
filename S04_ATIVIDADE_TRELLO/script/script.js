//inicia a constante teste vazia.
const teste = [];

//cria o formCadastro que será o eventListener de form-Cadastro.
const formCadastro = document.getElementById('form-Cadastro');
formCadastro.addEventListener('submit', (event) => {
  event.preventDefault();

  const validacao = {
    conta: new Date().getTime(),
    nome: event.target.nome.value,
    cpf: event.target.cpf.value,
    celular: event.target.celular.value,
    senha1: event.target.senha1.value,
    senha2: event.target.senha2.value,
  };
  teste.push(validacao);
  console.log(teste);
  if (senha1.value !== senha2.value) {
    alert('Senhas diferentes!');
  } else {
    alert('Senhas conferem!');
  }
});
