//dar start em variável p/lista de contas
//criar conta com valores para teste rápido das funções
let contas = [];

const formulario = document.getElementById('form-cadastro');

//funcao que é executada no envio do form
const enviarFormulario = (event) => {
  event.preventDefault();

  const senha = event.target.senha.value;
  const confirmacaoSenha = event.target.confirmacaoSenha.value;

  if (senha !== confirmacaoSenha) {
    alert('Senhas sao divergentes');
    return;
  }

  //adicionar conta no array
  //pegar dados restantes
  const nome = event.target.nome.value;
  const cpf = event.target.cpf.value;
  const celular = event.target.celular.value;
  const conta = new Date().getTime();
  const saldo = 0;

  //cria objeto
  const contaCriada = {
    conta,
    nome,
    cpf,
    celular,
    senha,
    saldo,
  };

  contas.push(contaCriada);

  alert(`Conta criada com sucesso. Numero: ${conta}`);
};

formulario.addEventListener('submit', enviarFormulario);

const formOperacao = document.getElementById('form-operacao');

const sacar = (conta, valor) => {
  if (valor > 0) {
    if (conta.saldo >= valor) {
      const novoSaldo = conta.saldo - valor;
      conta.saldo = novoSaldo;

      alert(`Saque efetuado com sucesso! Novo saldo: ${novoSaldo}`);
      return;
    }

    alert('Saldo insuficiente');
    return;
  }

  alert('Não foi possível efetuar o saque');
};

const depositar = (conta, valor) => {
  if (valor > 0) {
    const novoSaldo = conta.saldo + valor;
    conta.saldo = novoSaldo;

    alert(`Deposito efetuado com sucesso! Novo saldo: ${novoSaldo}`);
    return;
  }
  alert('Não foi possível efetuar o depósito');
};

const consultarSaldo = (conta) => {
  alert(`Saldo atual: ${conta.saldo}`);
};

const enviarFormularioOperacao = (event) => {
  event.preventDefault();

  const conta = parseInt(event.target.conta.value);
  const operacao = event.target.operacao.value;
  const valor = parseFloat(event.target.valor.value);
  const senha = event.target.senhaOperacao.value;

  const contaAtual = contas.find((elemento) => elemento.conta === conta);

  if (!contaAtual) {
    alert('Conta Inválida');
    return;
  }

  if (contaAtual.senha !== senha) {
    alert('Senha inválida');
    return;
  }

  switch (operacao) {
    case 'saque':
      sacar(contaAtual, valor);
      break;
    case 'deposito':
      depositar(contaAtual, valor);
      break;
    case 'saldo':
      consultarSaldo(contaAtual);
      break;
    default:
      alert('Operação inválida');
      break;
  }
};

formOperacao.addEventListener('submit', enviarFormularioOperacao);

const operacao = document.getElementById('operacao');
operacao.addEventListener('change', (event) => {
  const inputValor = document.getElementById('valor');

  if (event.target.value === 'saldo') {
    inputValor.disabled = true;
    inputValor.value = '';
    return;
  }

  inputValor.disabled = false;
});

// //inicia a constante que armazena os clientes, vazia.
// const clientes = [];

// //cria o formCadastro que será o eventListener de form-Cadastro.
// const formCadastro = document.getElementById('form-Cadastro');
// formCadastro.addEventListener('submit', (event) => {
//   event.preventDefault();

//   const validacao = {
//     nome: event.target.nome.value,
//     cpf: event.target.cpf.value,
//     celular: event.target.celular.value,
//     senha1: event.target.senha1.value,
//     senha2: event.target.senha2.value,
//     conta: new Date().getTime(),
//     saldo: 0,
//   };

//   //   validação de senha - só adiciona os itens de validação em clientes caso senha esteja ok.
//   if (senha1.value !== senha2.value) {
//     alert('Senhas diferentes! Corrigir');
//   } else {
//     alert('Cliente criado com sucesso!');
//     clientes.push(validacao);
//     console.log(clientes);
//   }
// });

// // ex5 - evento atrelado ao submit do formulário para:
// // validar se a conta existe e a senha está correta
// //verificar qual é a operação selecionada
// //chamar a função correspondente a operação
// const validarOperacao = [];
// const operacao = document.getElementById('consulta1');
// operacao.addEventListener('submit', (event) => {
//   event.preventDefault();

//   const operation2 = {
//     conta: event.target.conta.value,
//     operacao2: event.target.operation.value,
//     valor: event.target.valor.value,
//     senha: event.target.senha.value,
//   };
//   console.log(operation2);
// });

// function saque() {
//   return;
// }

// function deposito() {
//   return;
// }

// function saldo() {
//   return;
// }
