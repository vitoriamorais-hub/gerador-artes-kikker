
function gerarArte(){

let canvas = document.getElementById("canvas")
let ctx = canvas.getContext("2d")

// fundo roxo
ctx.fillStyle = "#75529D"
ctx.fillRect(0,0,1080,1080)

let input = document.getElementById("logoCliente")

if(input.files.length > 0){

let reader = new FileReader()

reader.onload = function(e){

let logoCliente = new Image()

logoCliente.onload = function(){

ctx.drawImage(logoCliente,140,440,350,200)

}

logoCliente.src = e.target.result

}

reader.readAsDataURL(input.files[0])

}

// logo kikker
let logoKikker = new Image()

logoKikker.onload = function(){

ctx.drawImage(logoKikker,590,440,350,200)

}

logoKikker.src = "logo-kikker.png"

}

function baixarImagem(){

let canvas = document.getElementById("canvas")

let link = document.createElement("a")

link.download = "arte-kikker.png"

link.href = canvas.toDataURL()

link.click()

}
