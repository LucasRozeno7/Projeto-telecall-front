const form = document.querySelector('form')
const usuario = document.getElementById('usuario')
const senha = document.getElementById('senha')

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

const namevalidate = () => {
    validForm = true

    let listaUser = []
    let userValid = {
   login: '',
   senha: ''
    }
   listaUser = JSON.parse(localStorage.getItem('listaUser'))
   listaUser.forEach((item) => {
    if(usuario.value == item.logincadastro && senha.value == item.senhacadastro ){
        userValid = {
           login: item.logincadastro,
           senha: item.senhacadastro
        }
        
     }
     });


    if(usuario.value == userValid.login && senha.value == userValid.senha){
        validForm = true
        localStorage.setItem('userLogado', JSON.stringify(userValid))
    }



  else{
   validate(usuario)
   validate(senha)

  }

}



//validar

form.addEventListener("submit", (e)=>{
    e.preventDefault()
    namevalidate()
    
  
    if (validForm){
       
      
        window.location.href = "../index.html"
  
    }
  
  
})



usuario.addEventListener("input", () =>{
    resetInput(usuario)
    
})

senha.addEventListener("input", () =>{
    resetInput(senha)
    
})



let cadastrologin = JSON.parse(localStorage.getItem('cadastrologin'))
let cadastrosenha = JSON.parse(localStorage.getItem('cadastrosenha'))
 document.getElementById('usuario').value = cadastrologin
 document.getElementById('senha').value = cadastrosenha







 // mostrar senha
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