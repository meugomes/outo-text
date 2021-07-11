
const textEl = document.getElementById('texto')
const speedEl = document.getElementById ('velocidade')

const texto = 'Sem querer você apareceu, não te esperava, não esperava rencontrar o que há muito havia perdido ou que talvez nunca tive. <br> Você me trouxe de volta o briho no olhar, o sorriso nos labios, mas também o medo de me machucar. <br> Não te culpo por trazer de volta um sentimento que eu havia prometido apagar de mim, mas te culpo por fazer desse sentimento o melhor que eu já senti. <br> De um jeito especial você me fez acreditar que o amor pode ser verdade. <br> Talvaz nunca tenha amado, por isso não sei bem o que essa palavra segnifica para mim, mas o importante agora é que sinto por você algo diferente, que talves nunca senti.<br> Não te prometo a perfeição, pois isso eu não tenho, mas te promento uma coisa: "dar o melhor de mim. <br> Você é alguém mais do que especial para mim, é alguém diferente, assim como eu sou. <br> Já te disse muitas vezes, que sou diferente (lembra?), Por isso, você é um desafio para mim. <br> Você foi uma das melhores coisas que aconteceu na minha vida!'
let idx = 1
let velocidade = 300 / speedEl.value

writeText()

function writeText() {
    textEl.innerHTML = texto.slice(0, idx)
    
    idx++

    if(idx > texto.length) {
        idx = 1
    }

    setTimeout(writeText, velocidade)
}


speedEl.addEventListener('input', (e) => velocidade = 300 / e.target.value)