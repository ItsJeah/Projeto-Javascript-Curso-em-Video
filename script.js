
const campoNumero = document.querySelector("#numero");
const botaoVerificar = document.querySelector("#verificar");
const resultadoPar = document.querySelector("#resultadoPar");

function verificarNumero() {
  const valor = campoNumero.value;

  if (valor.trim() === "") {
    resultadoPar.textContent = "Digite um número antes de verificar.";
    return;
  }

  const numero = Number(valor);

  if (!Number.isInteger(numero)) {
    resultadoPar.textContent = "Digite um número inteiro, sem casas decimais.";
  } else if (numero % 2 === 0) {
    resultadoPar.textContent = numero + " é um número par.";
  } else {
    resultadoPar.textContent = numero + " é um número ímpar.";
  }
}
botaoVerificar.addEventListener("click", verificarNumero);


const campoNota1 = document.querySelector("#nota1");
const campoNota2 = document.querySelector("#nota2");
const botaoCalcular = document.querySelector("#calcular");
const resultadoMedia = document.querySelector("#resultadoMedia");

function calcularMedia() {
  const texto1 = campoNota1.value;
  const texto2 = campoNota2.value;

  if (texto1 === "" || texto2 === "") {
    resultadoMedia.textContent = "Preencha as duas notas.";
    return;
  }

  const nota1 = Number(texto1);
  const nota2 = Number(texto2);

  if (nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10) {
    resultadoMedia.textContent = "As notas devem estar entre zero e dez.";
    return;
  }

  const media = (nota1 + nota2) / 2;
  let situacao;

  if (media >= 6) {
    situacao = "Aprovado no exemplo.";
  } else {
    situacao = "Abaixo da média definida no exemplo.";
  }

  resultadoMedia.textContent = "Média: " + media.toFixed(1).replace(".", ",") + " — " + situacao;
}
botaoCalcular.addEventListener("click", calcularMedia);


const campoTarefa = document.querySelector("#tarefa");
const botaoAdicionar = document.querySelector("#adicionar");
const listaTarefas = document.querySelector("#listaTarefas");

function adicionarTarefa() {
  const descricao = campoTarefa.value.trim();

  if (descricao === "") {
    campoTarefa.focus();
    return;
  }

  const item = document.createElement("li");
  item.className = "item-tarefa";

  const marcar = document.createElement("input");
  marcar.type = "checkbox";
  marcar.setAttribute("aria-label", "Marcar tarefa como concluída");

  const texto = document.createElement("span");
  texto.textContent = descricao;

  const remover = document.createElement("button");
  remover.textContent = "Remover";
  remover.className = "remover";
  remover.type = "button";
  remover.addEventListener("click", function () {
    item.remove();
  });

  marcar.addEventListener("change", function () {
    item.classList.toggle("concluida", marcar.checked);
  });

  item.append(marcar, texto, remover);
  listaTarefas.appendChild(item);
  campoTarefa.value = "";
  campoTarefa.focus();
}
botaoAdicionar.addEventListener("click", adicionarTarefa);
campoTarefa.addEventListener("keydown", function (evento) {
  if (evento.key === "Enter") {
    adicionarTarefa();
  }
});


const botaoTema = document.querySelector("#tema");
const resultadoTema = document.querySelector("#resultadoTema");

botaoTema.addEventListener("click", function () {
  document.body.classList.toggle("escuro");

  if (document.body.classList.contains("escuro")) {
    resultadoTema.textContent = "Tema escuro ativado.";
  } else {
    resultadoTema.textContent = "Tema claro ativado.";
  }
});
