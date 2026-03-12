
function gerarArte(){

let canvas = document.getElementById("canvas")
let ctx = canvas.getContext("2d")

// fundo branco
ctx.fillStyle = "#FFFFFF"
ctx.fillRect(0,0,1200,630)

let input = document.getElementById("logoCliente")

if(input.files.length > 0){

let reader = new FileReader()

reader.onload = function(e){

let logoCliente = new Image()

logoCliente.onload = function(){

// logo cliente (lado esquerdo)
ctx.drawImage(logoCliente,150,215,350,200)

}

logoCliente.src = e.target.result

}

reader.readAsDataURL(input.files[0])

}

// logo kikker

let logoKikker = new Image()

logoKikker.onload = function(){

// logo kikker (lado direito)
ctx.drawImage(logoKikker,700,215,350,200)

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
