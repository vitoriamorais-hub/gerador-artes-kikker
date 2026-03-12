
function gerarArte(){

let canvas = document.getElementById("canvas")
let ctx = canvas.getContext("2d")

// fundo branco
ctx.fillStyle = "#FFFFFF"
ctx.fillRect(0,0,1200,630)

// linha separadora
ctx.fillStyle = "#E5E5E5"
ctx.fillRect(590,150,4,330)

// texto inferior
ctx.font = "28px Arial"
ctx.fillStyle = "#555"
ctx.textAlign = "center"
ctx.fillText("Cliente da Plataforma Kikker",600,560)

let input = document.getElementById("logoCliente")

if(input.files.length > 0){

let reader = new FileReader()

reader.onload = function(e){

let logoCliente = new Image()

logoCliente.onload = function(){

let maxWidth = 350
let maxHeight = 200

let ratio = Math.min(maxWidth/logoCliente.width, maxHeight/logoCliente.height)

let width = logoCliente.width * ratio
let height = logoCliente.height * ratio

let x = 300 - width/2
let y = 315 - height/2

ctx.drawImage(logoCliente,x,y,width,height)

}

logoCliente.src = e.target.result

}

reader.readAsDataURL(input.files[0])

}

// logo kikker
let logoKikker = new Image()

logoKikker.onload = function(){

let maxWidth = 350
let maxHeight = 200

let ratio = Math.min(maxWidth/logoKikker.width, maxHeight/logoKikker.height)

let width = logoKikker.width * ratio
let height = logoKikker.height * ratio

let x = 900 - width/2
let y = 315 - height/2

ctx.drawImage(logoKikker,x,y,width,height)

}

logoKikker.src = "logo-kikker.png"

}

function baixarImagem(){

let canvas = document.getElementById("canvas")

let link = document.createElement("a")

link.download = "cliente-kikker.png"

link.href = canvas.toDataURL()

link.click()

}
