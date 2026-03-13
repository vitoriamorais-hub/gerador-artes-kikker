
function gerarArte(){

let canvas = document.getElementById("canvas")
let ctx = canvas.getContext("2d")

// fundo branco
ctx.fillStyle = "#FFFFFF"
ctx.fillRect(0,0,500,500)

// linha separadora
ctx.fillStyle = "#E5E5E5"
ctx.fillRect(248,120,4,260)

let input = document.getElementById("logoCliente")

if(input.files.length > 0){

let reader = new FileReader()

reader.onload = function(e){

let logoCliente = new Image()

logoCliente.onload = function(){

let maxWidth = 160
let maxHeight = 120

let ratio = Math.min(maxWidth/logoCliente.width, maxHeight/logoCliente.height)

let width = logoCliente.width * ratio
let height = logoCliente.height * ratio

let x = 125 - width/2
let y = 250 - height/2

ctx.drawImage(logoCliente,x,y,width,height)

}

logoCliente.src = e.target.result

}

reader.readAsDataURL(input.files[0])

}

// logo kikker
let logoKikker = new Image()

logoKikker.onload = function(){

let maxWidth = 160
let maxHeight = 120

let ratio = Math.min(maxWidth/logoKikker.width, maxHeight/logoKikker.height)

let width = logoKikker.width * ratio
let height = logoKikker.height * ratio

let x = 375 - width/2
let y = 250 - height/2

ctx.drawImage(logoKikker,x,y,width,height)

}

logoKikker.src = "logo-kikker.png"

}

function baixarImagem(){

let canvas = document.getElementById("canvas")

let link = document.createElement("a")

link.download = "grupo-kikker.png"

link.href = canvas.toDataURL()

link.click()

}
