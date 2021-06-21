function contar() {
   var inicio = document.getElementById("inicio");
   var fim = document.getElementById("fim");
   var passo = document.getElementById("passo");
   var resultado = document.getElementById("resultado")
   if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
       alert("[ERRO] Faltam dados para completar a solicitação!")
   } else {
       resultado.innerHTML = "contando: <br> "
       let i = Number(inicio.value);
       let f = Number(fim.value);
       let p = Number(passo.value);
       if (i < f) {
        for (let c = i; c <= f; c += p) {
        resultado.innerHTML += ` ${c} \u{1f449}`
       }
       }else { 
        for ( let c = i; c >= f; c -= p) {
        resultado.innerHTML += ` ${c} \u{1f449}`
        }
    }
        resultado.innerHTML += ` \u{1f3c1}`        
       
   }
}