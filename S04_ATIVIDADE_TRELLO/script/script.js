//inicia a constante que armazena os clientes, vazia.
const clientes = [];

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

  //   validação de senha - só adiciona os itens de validação em clientes caso senha esteja ok.
  if (senha1.value !== senha2.value) {
    alert('Senhas diferentes! Corrigir');
  } else {
    alert('Cliente criado com sucesso!');
    clientes.push(validacao);
    console.log(clientes);
  }
});
