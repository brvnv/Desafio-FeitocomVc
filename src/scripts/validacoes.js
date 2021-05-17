function validaCPF(cpf) {
    if(cpf.length!=11) {
      alert("Por favor, digite um CPF válido para continuar.");
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

function validaDados(){
    if(validaCPF(document.dadosConta.cpf.value)==false) return false;
    if(validaCep(document.dadosConta.cep.value)==false) return false;
    return true;
}