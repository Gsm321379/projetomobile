//Vai criptogravar o texto digitado
function cripto() {
    //o que estiver dentro da textarea name sera capturado e criptografado
    let text = document.getElementById('text').value
    //vai fatiar para poder criptografar
    let split = text.split("")
    //vai contar quantas fatias tem para poder colocar o codigo de cada letra
    let chars = split.length
    //syntax array , vai ser usada pra guardar as letras com os seus respectivos códigos
    const pre = ['Z','E','N','I','T','P','O','L','A','R','z','e','n','i','t','p','o','l','a','r']

    const pos = ['P','O','L','A','R','Z','E','N','I','T','p','o','l','a','r','z','e','n','i','t']
    let rslt = document.getElementById('result')

    for (i = 0; i < chars; i++) {
        //colocando a letra no lugar dela seu código
        let index = pre.indexOf(split[i])
        if (index === -1) {
            //se a letra não existir no alfabeto maiusculo ou minusculo, ele adiciona na posição final do array
            split[i] = split [i]
        } else {
            //adiciona o código na posição
            split[i] = pos[index]
        }
        const toString = split.join('')
        rslt.innerText = toString
    }
}