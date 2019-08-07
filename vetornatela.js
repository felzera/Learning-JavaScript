let valores = [8,1,7,4,2,9]

//console.log(valores) Jeito 1 (Não recomendado)

/* 
console.log(valores[0]) Jeito 2 (Burro)
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])

for(let pos = 0; pos < valores.length; pos++){  Jeito 3 (Certo mas não atual)
    console.log(`A identificação ${pos} tem o valor ${valores[pos]}.`)
}
*/

for(let pos in valores){ // Jeito 4, o mais atual e o mais simples para repetir elementos da array.
    console.log(`A identificação ${pos} tem o valor ${valores[pos]}`)
}