let nome = "";
let hotel = "";
let senha = 2678;
const listHospedes = [];

hotel = prompt("Qual o nome do seu hotel?");
nome = prompt("Qual seu nome?");

alert("Bem vindo ao hotel " + hotel + ", " + nome + ". É um imenso prazer ter você por aqui!");

inicio();

function inicio() {
    var escolha = parseInt(prompt("Selecione uma opção\n1.) Reserva de Quartos\n2.) Cadastro de Hóspedes\n3.) Eventos\n4.) \n.) Abastecimento de Carros\n.) Sair"));

    switch (escolha) {
        case 1:
            usuarioSenha();
            reserva_quartos();
            break;
        case 2:
            usuarioSenha();
            hospedes();
            break;
        case 3:
            usuarioSenha();
            eventos();
            break;
        case 4:
            usuarioSenha();

            break;
        case 5:
            sair();
            break;
        default:
            erro();
    }
}

function usuarioSenha() {
    var digiteSenha = parseFloat(prompt("Digite a sua senha"))

    if (digiteSenha == senha) {
        return;
    } else {
        alert("senha incorreta");
        usuarioSenha();
    }
}

function reserva_quartos() {
    let valorDiaria = parseFloat(prompt("Qual o valor da diaria do hotel " + hotel + "?"));
    let hospedagem = parseFloat(prompt("Quantos dias o hóspede deseja ficar no hotel " + hotel + "?"));
    valorFormatado = valorDiaria * hospedagem;

    if (valorDiaria <= 0 || hospedagem <= 0 || hospedagem > 30) {
        alert("Informe um número valido");

        reserva_quartos();
    } else {
        let valorFormatado = valorDiaria * hospedagem;
        valorFormatado = formatValor(valorFormatado);

        confirm("Gostaria de confirmar a reserva no valor de " + valorFormatado + " com " + hospedagem + " dias de duração?");
    }

    inicio();
}

function hospedes() {
    let alternativas = parseInt(prompt("Selecione uma opção\n1.) Cadastro\n2.) Pesquisar\n3.) Listar\n4.) Sair"));

    switch (alternativas) {
        case 1:
            cadastroHospedes();
            break;
        case 2:
            pesquisaHospedes();
            break;
        case 3:
            lista();
            break;
        case 4:
            inicio();
            break;
        default:
            erro();
    }

    function cadastroHospedes() {
        const valorDiaria = parseFloat(prompt("Qual o valor da diaria do hotel " + hotel + "?"));
        if(isNaN(valorDiaria)){
            alert("valor invalido, porfavor informe um valor valido");
            cadastroHospedes();
        }

        let cadastros = 0;
        let cadastroMeia = 0;
        let cadastroGratuito = 0;

        do {
            let nomeHospede = prompt("Qual o nome do hóspede?\n\nPara sair basta digitar PARE");
            if (nomeHospede === "PARE") {
                break;
            } else if (nomeHospede === "pare"){
                break;
            }

            let idadeHospede = parseFloat(prompt("Qual a idade do hóspede?"));

            if (idadeHospede <= 0 || isNaN(idadeHospede)) {
                alert("Valor inválido, por favor informe um número valido");
            } else if (idadeHospede < 6) {
                alert(nomeHospede + " cadastrado(a) com sucesso. " + nomeHospede + " possui gratuidade");
                cadastroGratuito++;
                listHospedes.push(nomeHospede);
            } else if (idadeHospede >= 60) {
                alert(nomeHospede + " cadastrado(a) com sucesso. " + nomeHospede + " paga meia entrada");
                cadastroMeia++;
                listHospedes.push(nomeHospede);
            } else {
                alert(nomeHospede + " cadastrado(a) com sucesso.");
                cadastros++;
                listHospedes.push(nomeHospede);
            }
        } while (true);

        let totalCadastro = cadastros * valorDiaria + cadastroMeia * (valorDiaria / 2);
        totalCadastro = formatValor(totalCadastro);

        alert(nome + ", o valor total das hospedagens é: " + totalCadastro + "; " + cadastroGratuito + " gratuito(s); " + cadastroMeia + " meia(s)");

        hospedes();
    }

    function pesquisaHospedes(){
        let nomeHospede = prompt("Qual o nome do hóspede para realizar a pesquisa");
        console.log(listHospedes)
        let hospedeEncontrado = listHospedes.includes(nomeHospede);
        
        if (hospedeEncontrado) {
            alert("Hóspede " + nomeHospede + " encontrado(a)");
        } else {
            alert("Hóspede não encontrado");
        }
        hospedes();
    }

    function lista(){
        alert("Aqui está a lista completa de hospedes\n\n" + listHospedes.join("\n"));
        hospedes();
    }
}

function eventos(){
    const alternativas = parseInt(prompt("Selecione uma alternativa\n1.) Reserva de garçons\n2.) Buffet"))
    switch(alternativas){
        case 1:
            eventoGarçon();
            break;
        case 2:
            eventoAlimentação();
            break;
    }
}

function eventoGarçon(){
    const funcionario_valor =  10.5;

    let duracao = parseFloat(prompt("Qual a duração do evento em horas?"));
    let funcionario_quantidade = parseFloat(prompt("Quantos garçons serão necessários?"));

    let resultado = (duracao * funcionario_valor) * funcionario_quantidade;
    resultado = formatValor(resultado)
    
    let confirmacao = prompt(resultado + "\nGostaria de efetuar a reserva? S/N");
    if (confirmacao === "S" || confirmacao === "s"){
        alert(nome + ", reserva efetuada com sucesso.");
    } else if (confirmacao === "N" || confirmacao === "n"){
        inicio();
    } else {
        alert("Erro");
        eventos();
    }
    inicio();
}

function eventoAlimentação(){
    let convidados = parseInt(prompt("Qual a quantidade de convidados?"));

    if(convidados <= 0 || isNaN(convidados)){
        alert("Porfavor informe um valor valido.")
    } else if (convidados > 350){
        alert("A capacidade máxima de pessoas no local e 350.")
    } else {
        let quantCafe = convidados * 0.2;
        let quantAgua = convidados * 0.5;
        let quantSalgados = convidados * 7;
        let resultado = (quantCafe * 0.80) + (quantAgua * 0.40) + ((quantSalgados / 100) * 34);
        resultado = formatValor(resultado);
        
        alert("O evento precisará de " + quantCafe + " litros de café, " + quantAgua + " litros de água, " + quantSalgados + " salgados. o valor total é " + resultado);

        let confirmacao = prompt(nome + ", gostaria de efetuar a reserva no valor de " + resultado + " ? S/N");

        while(confirmacao !== "s" && confirmacao !== "S" && confirmacao !== "n" && confirmacao !== "N"){
            alert("Responda apenas com S/N");
            confirmacao = prompt(nome + ", gostaria de efetuar a reserva no valor de " + resultado + " ? S/N");
        }

        if (confirmacao === "s" || confirmacao === "S"){
            alert("Reserva reazlizada com sucesso");
            inicio();
        } else {
            inicio();
        }
    }
}

function auditorio(){
    let auditorioLaranja = 220;
    let auditorioColorado = 350;

    let convidados = parseInt(prompt("Qual a quantidade de convidados?"));

    if (convidados > 350 || convidados <= 0){
        alert("Número de convidados inválido. Quantidade de convidados tem que ser maior que 1 e menor que 350.");
    } else if (convidados <= auditorioLaranja){
        if (resultado <= 150){
            alert("Use o auditório Laranja")
        } else if (resultado > 150){
            let cadeirasExtras = (convidados - 150);
            alert("Use o auditório Laranja (inclua mais " + cadeirasExtras + " cadeiras)");
        }
    } else if (convidados <= auditorioColorado) {
        if (){
            
        }
    }
}

function abastecerCarros() {

    alert("Hotel " + hotel + " abastecer");

    inicio();
}

function erro() {

    alert("Por favor, informe um número válido entre 1 a ");

    inicio();
}

function erroHospedes() {
    alert("Por favor, informe um número válido entre 1 a ")

    hospedes();
}

function formatValor(valor) {
    if (typeof valor != "number" || isNaN(valor)) {
        return "";
    } else {
        return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }
}

function sair() {

    var confirma = confirm("Você deseja sair?");

    if (confirma) {
        alert("Muito obrigado por utilizar nossos serviços " + nome);
        window.close();
    } else {
        inicio();
    }
}