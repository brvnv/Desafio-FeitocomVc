function validaCPF(cpf) {
    if(cpf.length!=11) {
      alert("Por favor, digite um CPF válido para continuar.");
      return false;
    } else {
      return true;
    }
}

function validaCep (cep) {
    if(cep.lenght != 8) {
      alert ("Por favor, digite um cep válido para continuar.");
      return false;
}
else {
    return true;
}
}

function validaDados(){
    validaCPF(document.dadosConta.cpf.value);
    validaCep(document.dadosConta.cep.value);
    //Ao final de todas validações retorna true e avança.
}