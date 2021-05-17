function validaNome(nome) {
    if(nome.length < 4 || nome.length > 25) {
      alert("Por favor, digite um nome válido para continuar.");
      return false;
    }
    var regExNumNoNome=/\d/; //procura números no nome
    if(regExNumNoNome.test(nome)==true) {
      alert("Por favor, digite um nome válido para continuar.");
      return false;
    } else {
      return true;
    }
}

function validaCPF(cpf) {
    if(cpf.length!=11) {
      alert("Por favor, digite um CPF válido para continuar.");
      return false;
    } else {
      return true;
    }
}

function validaRG(rg) {
    if(rg.length != 9) {
      alert("Por favor, digite um RG válido para continuar.");
      return false;
    } else {
      return true;
    }
}

function validaRua(rua) {
    if (rua.length < 10 || rua.length > 26) {
      alert ("Por favor, digite um nome de rua válido para continuar.");
      return false;
    }
    var regExNumRua=/\d/;
    if(regExNumRua.test(rua)==true) {
      alert("Por favor, digite um nome de rua válido para continuar.");
      return false;
    } else {
      return true;
    }
}

function validaCep (cep) {
    if(cep.length != 8) {
      alert ("Por favor, digite um cep válido para continuar.");
      return false;
    }
    else {
      return true;
    }
}

function validaNumero(numero) {
    if (numero.length > 4) {
      alert("Por favor, preencha um número válido para continuar.");
      return false;
    } else {
      return true;
    }
}

function validaTelFixo(telFixo) {
    if(telFixo.length != 10) {
      alert ("Por favor, digite um telefone fixo válido para continuar");
      return false;
    } else {
      return true;
    }
}

function validaTelCel(telCel) {
    if(telCel.length != 11) {
      alert("Por favor, digite um telefone celular válido para continuar.");
      return false;
    } else {
      return true;
    }
}

function validaDados(){
    if(validaNome(document.dadosConta.nome.value)==false) return false;
    if(validaCPF(document.dadosConta.cpf.value)==false) return false;
    if(validaRG(document.dadosConta.rg.value)==false) return false;
    if(validaRua(document.dadosConta.endereco.value)==false) return false;
    if(validaNumero(document.dadosConta.numero.value)==false) return false;
    if(validaCep(document.dadosConta.cep.value)==false) return false;
    if(validaTelFixo(document.dadosConta.telFixo.value)==false) return false;
    if(validaTelCel(document.dadosConta.telCel.value)==false) return false;
    return true;
}