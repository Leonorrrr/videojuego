let canvas;
let ctx;
let FPS = 50;

let imatge;
let imagen;

function inicializar() {
    canvas = document.getElementById("pantalla");
    ctx = canvas.getContext('2d')
    imatge = new Image();
    imatge.src = './img/minnie.png'
    imagen = new Image();
    imagen.src = './img/mickey.png'

    setInterval(function () {
        principal();
    }, 1000 / FPS)

}

function borrarPantalla() {
    canvas.width = 1800
    canvas.height = 800
}

let prota = function (x, y, vel) {
    this.x = x;
    this.y = y;
    this.vel = vel

    this.dibuixa = function () {
        ctx.drawImage(imatge, this.x, this.y)
    }

    this.adalt = function () {
        this.y = this.y - this.vel

    }
    this.baix = function () {
        this.y = this.y + this.vel

    }
    this.dreta = function () {
        this.x = this.x + this.vel

    }
    this.esquerra = function () {
        this.x = this.x - this.vel

    }
}
let prota2 = function (x, y, vel) {
    this.x = x;
    this.y = y;
    this.vel = vel

    this.dibuixa = function () {
        ctx.drawImage(imagen, this.x, this.y)
    }

    this.adalt = function () {
        this.y = this.y - this.vel

    }
    this.baix = function () {
        this.y = this.y + this.vel

    }
    this.dreta = function () {
        this.x = this.x + this.vel

    }
    this.esquerra = function () {
        this.x = this.x - this.vel

    }
}

let personatge = function (x, y, vel) {
    this.x = x;
    this.y = y;
    this.vel = vel
    this.derecha = true;

    this.dibuixa = function () {
        ctx.fillRect(this.x, this.y, 50, 50)
    }

    this.mou = function () {
        if (this.derecha == true) {
            if (this.x < 1800) {
                this.x = this.x + this.vel
            } else {
                this.derecha = false;
            }
        } else {
            if (this.x > 100) {
                this.x = this.x - this.vel
            } else {
                this.derecha = true;
            }
        }
    }
}

let mar = new personatge(10, 100, 1);
let lola = new personatge(10, 300, 5);
let julen = new personatge(10, 500, 10);
let xavi = new prota(200, 200, 5);
let jorge = new prota2(200, 200, 10);

function principal() {
    borrarPantalla();
    mar.dibuixa();
    lola.dibuixa();
    julen.dibuixa();
    mar.mou();
    lola.mou();
    julen.mou();
    xavi.dibuixa();
    jorge.dibuixa();
}

document.addEventListener('keydown', function (tecla) {
    console.log(tecla.key)
    if (tecla.key == 'ArrowUp') {
        xavi.adalt()
    }
    if (tecla.key == 'ArrowDown') {
        xavi.baix()
    }
    if (tecla.key == 'ArrowRight') {
        xavi.dreta()
    }
    if (tecla.key == 'ArrowLeft') {
        xavi.esquerra()
    }
    if (tecla.key == 'w') {
        jorge.adalt()
    }
    if (tecla.key == 's') {
        jorge.baix()
    }
    if (tecla.key == 'd') {
        jorge.dreta()
    }
    if (tecla.key == 'a') {
        jorge.esquerra()
    }
})
