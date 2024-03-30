const form = document.querySelector('form')
const msgfinal = document.querySelector('.msgfinal')
const nome = document.getElementById('nome')
const nomemae = document.getElementById('nomemae')
const cel = document.getElementById('cel')
const fixo = document.getElementById('fixo')
const cpf = document.getElementById('cpf')
const num = document.getElementById('num')
const login = document.getElementById('login')
const senha = document.getElementById('senha')
const senha2 = document.getElementById('senha2')
const icon = document.getElementById('icon')
const icon2 = document.getElementById('icon2')
const genero = document.getElementById('genero')



let validForm = false


//elementos
const resetInput = (elem)=>{
  elem.style.border=""
  elem.nextElementSibling.classList.add('errorH')

}

const validate = (elem) =>{
  elem.style.border="4px solid #e63636"
  elem.nextElementSibling.classList.remove('errorH')
  elem.focus()
  validForm = false

}

const validatecep = (elem) =>{
  elem.style.border="4px solid #e63636"
  elem.nextElementSibling.classList.remove('errorH')
  validForm = false

}







//validaçoes

const namevalidate = () => {
  validForm = true
 
  if(nome.value.length <=15){
    validate(nome)
    
 }
 if(nomemae.value.length <=10){
  validate(nomemae)
 }

 if(cel.value.length <15){
  validate(cel)
 }

 if(fixo.value.length <14){
  validate(fixo)
 }
 if(cpf.value.length <14){
  validate(cpf)
 }
 if(cep.value ==""){
  validate(cep)
 }
 if(num.value ==""){
  validate(num)
 }

 if(rua.value ==""){
  validate(rua)
 }
 if(bairro.value ==""){
  validate(bairro)
 }
 if(cidade.value ==""){
  validate(cidade)
 }
 if(uf.value ==""){
  validate(uf)
 }


 if(login.value.length <6){
  validate(login)
 }

 if(senha.value.length <8){
  validate(senha)
 } 

 if(senha.value != senha2.value){
  validate(senha2)
 }

 if(genero.value ==""){
  validate(genero)
 }
 
  var data = document.getElementById("datanascimento").value; // pega o valor do input
  // compara as datas e calcula a idade
  var hoje = new Date();
  var nasc  = new Date(data);
  var idade = hoje.getFullYear() - nasc.getFullYear();
  var m = hoje.getMonth() - nasc.getMonth();
  if (m < 0 || (m === 0 && hoje.getDate() < nasc.getDate())) idade--;
  


     if(datanascimento.value == ""  ){
      validate(datanascimento)
  
     }


   if(idade < 17){
    
    validate(datanascimento)

   }

    if(idade >= 18){
     
    }


}


//validar

form.addEventListener("submit", (e)=>{
  e.preventDefault()
  namevalidate()
  



  if (validForm){
     //Enviar dados
    
    let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')

    listaUser.push(
    {
      logincadastro: login.value,
      senhacadastro: senha.value
    }
    )
    localStorage.setItem('listaUser', JSON.stringify(listaUser))

    localStorage.setItem('cadastrologin', JSON.stringify(login.value))
    localStorage.setItem('cadastrosenha', JSON.stringify(senha.value))

    //Enviar dados

    
    form.remove()
    msgfinal.classList.remove('errorH')

  }

})


//remover erro

nome.addEventListener("input", () =>{
  resetInput(nome)
  
})
nomemae.addEventListener("input", () =>{
  resetInput(nomemae)
  
})

cel.addEventListener("input", () =>{
  resetInput(cel)
  
})

fixo.addEventListener("input", () =>{
  resetInput(fixo)
  
})

cpf.addEventListener("input", () =>{
  resetInput(cpf)
  
})

datanascimento.addEventListener("input",() =>{
  resetInput(datanascimento)

})

cep.addEventListener("input",() =>{
  resetInput(cep)

})

num.addEventListener("input",() =>{
  resetInput(num)

})

login.addEventListener("input",() =>{
  resetInput(login)

})

senha.addEventListener("input",() =>{
  resetInput(senha)

})

senha2.addEventListener("input",() =>{
  resetInput(senha2)

})

rua.addEventListener("input",() =>{
  resetInput(rua)

})
genero.addEventListener("input",() =>{
  resetInput(genero)

})


//mostrar senha

function showHide(){
  if(senha.type ==='password'){
    senha.setAttribute('type','text');
    icon.classList.add('hide')
  }
  else{
     senha.setAttribute('type','password');
     icon.classList.remove('hide')
  }
}

function showHide2(){
  if(senha2.type ==='password'){
    senha2.setAttribute('type','text');
    icon2.classList.add('hide')
  }
  else{
     senha2.setAttribute('type','password');
     icon2.classList.remove('hide')
  }
}


//ENDEREÇO

function limpa_formulário_cep() {
  //Limpa valores do formulário de cep.
  
  validatecep(cep)
  document.getElementById('cep').value=("");
  document.getElementById('rua').value=("");
  document.getElementById('bairro').value=("");
  document.getElementById('cidade').value=("");
  document.getElementById('uf').value=("");
  document.getElementById('rua').disabled = false;
  document.getElementById('bairro').disabled = false;
  document.getElementById('cidade').disabled = false;
  document.getElementById('uf').disabled = false;
  
 
}


function meu_callback(conteudo) {
if (!("erro" in conteudo)) {
  //Atualiza os campos com os valores.
  
  document.getElementById('rua').value=(conteudo.logradouro);
  document.getElementById('bairro').value=(conteudo.bairro);
  document.getElementById('cidade').value=(conteudo.localidade);
  document.getElementById('uf').value=(conteudo.uf);
  document.getElementById('rua').disabled = true;
  document.getElementById('bairro').disabled = true;
  document.getElementById('cidade').disabled = true;
  document.getElementById('uf').disabled = true;
  resetInput(rua)
  resetInput(bairro)
  resetInput(cidade)
  resetInput(uf)

} //end if.
else {
  //CEP não Encontrado.
  limpa_formulário_cep();
  
}
}

function pesquisacep(valor) {

//Nova variável "cep" somente com dígitos.
var cep = valor.replace(/\D/g, '');

//Verifica se campo cep possui valor informado.
if (cep != "") {

  //Expressão regular para validar o CEP.
  var validacep = /^[0-9]{8}$/;

  //Valida o formato do CEP.
  if(validacep.test(cep)) {

      //Preenche os campos com "..." enquanto consulta webservice.
      document.getElementById('rua').value="...";
      document.getElementById('bairro').value="...";
      document.getElementById('cidade').value="...";
      document.getElementById('uf').value="...";
      

      //Cria um elemento javascript.
      var script = document.createElement('script');

      //Sincroniza com o callback.
      script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';

      //Insere script no documento e carrega o conteúdo.
      document.body.appendChild(script);

  } //end if.
  else {
      //cep é inválido.
      
  
      limpa_formulário_cep();
      
      
  }
} //end if.
else {
  //cep sem valor, limpa formulário.

  limpa_formulário_cep();
  
}
};

//Mascara

function ajustaCpf(v) {
    v.value = v.value.replace(/\D/g, "");
    v.value = v.value.replace(/^(\d{3})(\d)/, "$1.$2");
    v.value = v.value.replace(/(\d{3})(\d)/, "$1.$2");
    v.value = v.value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
}


function ajustaTelefone(v) {
    v.value = v.value.replace(/\D/g, "");
    v.value = v.value.replace(/^(\d\d)(\d)/g, "($1) $2");
    v.value = v.value.replace(/(\d{4})(\d)/, "$1-$2");
}

function ajustaCelular(v) {
    v.value = v.value.replace(/\D/g, "");
    v.value = v.value.replace(/^(\d\d)(\d)/g, "($1) $2");
    v.value = v.value.replace(/(\d{5})(\d)/, "$1-$2");
}

function ajustasenha(v){
  v.value = v.value.replace(/[^\w\.]|\d/g, '');
}

function semnumero(v){
  v.value = v.value.replace(/[0-9+=!@?#$%¨&*_()]/g, '');
}

function semletra(v){
  v.value = v.value.replace(/\D/g, "");
}