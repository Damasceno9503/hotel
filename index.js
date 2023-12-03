let nome = "";
let hotel = "";
let senha = 2678;
const listHospedes = [];

hotel = prompt("Qual o nome do seu hotel?");
nome = prompt("Qual seu nome?");

alert("Bem vindo ao hotel " + hotel + ", " + nome + ". É um imenso prazer ter você por aqui!");

inicio();

function inicio() {
    var escolha = parseInt(prompt("Selecione uma opção\n1.) Reserva de Quartos\n2.) Cadastro de Hóspedes\n3.) Eventos\n4.) Abastecimento de Carros\n5.) Manutenção de ar-condicionados\n6.) Sair"));

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
            abastecerCarros();
            break;
        case 5:
            arCondicionado();
            break;
        case 6:
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
            erroHospedes();
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
    const alternativas = parseInt(prompt("Selecione uma alternativa\n1.) Reserva de garçons\n2.) Buffet\n3.) Auditóri\n4.) Restaurante"))
    switch(alternativas){
        case 1:
            eventoGarçon();
            break;
        case 2:
            eventoAlimentação();
            break;
        case 3:
            auditorio();
            break;
        case 4:
            restaurante();
            break;
        case 5:
            inicio();
            break;
        default:
            erroEventos();
    }
}

function eventoGarçon(){
    const funcionario_valor =  10.5;

    let duracao = parseFloat(prompt("Qual a duração do evento em horas?"));
    let funcionario_quantidade = parseFloat(prompt("Quantos garçons serão necessários?"));

    let resultado = (duracao * funcionario_valor) * funcionario_quantidade;
    resultado = formatValor(resultado)
    
    if(confirm(resultado + " ,gostaria de efetuar a reserva?")){
        alert(nome + " ,reserva efetuada com sucesso.");
    } else {
        alert(nome + " ,reserva não efetuada.")
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

        if(confirm("O evento precisará de " + quantCafe + " litros de café, " + quantAgua + " litros de água, " + quantSalgados + " salgados.\nO valor total é " + resultado + " ,gostaria de efetuar a reserva?")){
            alert(nome +" ,reserva efetuada com sucesso.");
        } else {
            alert(nome + " ,reserva não efetuada.")
        }
        inicio();
    }
}

function auditorio(){
    let auditorioLaranja = 220;
    let auditorioColorado = 350;

    let convidados = parseInt(prompt("Qual a quantidade de convidados?"));

    if (convidados > 350 || convidados <= 0){
        alert("Número de convidados inválido. Quantidade de convidados tem que ser maior que 1 e menor que 350.");
    } else if (convidados <= auditorioLaranja){
        if (convidados <= 150){
            if(confirm("Use o auditório Laranja\nGostaria de efetuar a reserva?")){
                alert(nome + " ,reserva efetuada com sucesso.");
            } else {
                alert(nome + " ,reserva não efetuada.");
            };
        } else if (convidados > 150){
            let cadeirasExtras = (convidados - 150);

            if(confirm("Use o auditório Laranja (inclua mais " + cadeirasExtras + " cadeiras extras).\nGostaria de efetuar a reserva?")){
                alert(nome + " ,reserva efetuada com sucesso.");
            } else {
                alert(nome + " ,reserva não efetuada.");
            };
        }
    } else if (convidados <= auditorioColorado) {
        if(confirm("Use o auditório Colorado\nGostaria de efetuar a reserva?")){
            alert(nome + " ,reserva efetuada com sucesso.");
        } else {
            alert(nome + " ,reserva não efetuada.");
        };
    }
    inicio();
}

function restaurante(){
    let dia = prompt("Qual o dia do seu evento?");
    let horario = parseInt(prompt("Qual a hora do seu evento?"));
    let nomeEmpresa = prompt("Qual o nome da empresa?");

    if (
        !dia || isNaN(horario) || !nomeEmpresa ||(dia !== "segunda" && dia !== "terca" && dia !== "quarta" && dia !== "quinta" && dia !== "sexta" && dia !== "sabado" && dia !== "domingo") || (horario < 7 || (dia !== "sabado" && dia !== "domingo" && horario > 23) || (dia === "sabado" || dia === "domingo") && horario > 15)
    ) {
        alert("Restaurante indisponível.");

        if (!(dia === "segunda" || dia === "terca" || dia === "quarta" || dia === "quinta" || dia === "sexta" || dia === "sabado" || dia === "domingo")) {
            alert("Por favor, informe o dia em formato escrito sem traços e acentos. Ex: terca");
        }

        restaurante();
    } else {
        if (confirm("Gostaria de efetuar a reserva?")) {
            alert("Reserva efetuada com sucesso.")
        } else {
            alert("Reserva cancelada.")
        }
    }
    inicio();
}

function abastecerCarros() {
    const abastecimento = 42;

    let alcoolWayneOil = parseFloat(prompt("Qual o valor do álcool do posto Wayne Oil?"));
    let gasolinaWayneOil = parseFloat(prompt("Qual o Valor da gasolina no posto Wayne Oil?"));
    let alcoolStarkPetrol = parseFloat(prompt("Qual o valor do álcool do posto Stark Petrol?"));
    let gasolinaStarkPetrol = parseFloat(prompt("Qual o valor do gasolina do posto Stark Petrol?"));

    const custoAlcoolWayneOil = alcoolWayneOil * abastecimento;
    const custoGasolinaWayneOil = gasolinaWayneOil * abastecimento;
    const custoAlcoolStarkPetrol = alcoolStarkPetrol * abastecimento;
    const custoGasolinaStarkPetrol = gasolinaStarkPetrol * abastecimento;

    const descontoAlcool = 30;

    const precoAlcoolWay = custoGasolinaWayneOil - (custoGasolinaWayneOil * (descontoAlcool / 100));
    const precoAlcoolSta = custoGasolinaStarkPetrol - (custoGasolinaStarkPetrol * (1 - descontoAlcool / 100));

    if (precoAlcoolWay < custoAlcoolWayneOil && precoAlcoolWay < custoGasolinaStarkPetrol){
        alert(nome + ", é mais barato abastecer com álcool no posto Wayne Oil.");
    } else if (custoGasolinaWayneOil < custoAlcoolWayneOil && custoGasolinaWayneOil < custoGasolinaStarkPetrol){
        alert(nome + ", é mais barato abastecer com gasolina no posto Wayne Oil.");
    } else if (precoAlcoolSta < custoAlcoolStarkPetrol && precoAlcoolSta < custoGasolinaWayneOil) {
        alert(nome + ", é mais barato abastecer com álcool no posto Stark Petrol.");
    } else {
        alert(nome + ", é mais barato abastecer com gasolina no posto Stark Petrol.");
    }

    inicio();
}

function arCondicionado() {
    let menorValor = Infinity;
    let nomeMenorValor;

    while(true){
        let nomeFornecedor = prompt("Qual o nome da empresa?");
        let valorAparelho = parseFloat(prompt("Qual o valor do aparelho?"));
        let quantidadeAparelho = parseInt(prompt("Qual a quantidade de aparelhos?"));
        let descontoAparelho = parseInt(prompt("Qual a porcetagem de desconto?"));
        let quantidadeDesconto = parseInt(prompt("Qual o número mínimo de aparelhos para conseguir o desconto?"));
    
        let valorTotal = valorAparelho * quantidadeAparelho;
    
        if (quantidadeAparelho >= quantidadeDesconto){
            let desconto = (descontoAparelho / 100) * valorTotal;
            valorTotal -= desconto;
        }
    
        alert("O serviço de " + nomeFornecedor + " custará " + formatValor(valorTotal));

        if (valorTotal < menorValor){
            menorValor = valorTotal;
            nomeMenorValor = nomeFornecedor;
        }

        let novosdados = prompt("Deseja informar novos valores? " + nome + " S/N");

        if(novosdados == "N" || novosdados == "n"){
            break;
        }
    }
    alert("O orçamento de menor valor é de " + nomeMenorValor + " por " + formatValor(menorValor));
}

function erro() {
    alert("Por favor, informe um número válido entre 1 a 6");
    inicio();
}

function erroHospedes() {
    alert("Por favor, informe um número válido entre 1 a 4")
    hospedes();
}

function erroEventos() {
    alert("Por favor, informe um número válido entre 1 a 5");
    eventos();
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