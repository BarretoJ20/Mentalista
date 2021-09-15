var numeroPensado = parseInt(Math.random()* 11)

function Palpite(){
  var palpite = parseInt(document.getElementById("valorPalpite").value)
  var resp = document.getElementById("Resposta")
  
  if(numeroPensado == palpite){
    resp.innerHTML = "Você acertou!"
  }
  else if(palpite > 10 || palpite < 0){
    resp.innerHTML = "Oops! Digite apenas números de 0 a 10."
  }
  else if(palpite < numeroPensado ){
      resp.innerHTML = "Mais...Tente outra vez."
  }
  else if(palpite > numeroPensado){
      resp.innerHTML = "Menos...Tente outra vez."
  }
    
}
