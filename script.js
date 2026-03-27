let canvas;
let ctx;
let FPS = 50;

let ampleC = 50;
let altC = 50;

let retras = 0;

let tilemap;
let posllave = { x: 33, y: 2 };
let vidas = 5;

let escenari = [

    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0],
    [0, 2, 2, 2, 2, 2, 0, 0, 0, 2, 2, 2, 2, 0, 0, 0, 0, 0, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 0, 0, 2, 2, 3, 2, 0],
    [0, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 0, 2, 2, 2, 2, 0, 2, 2, 2, 2, 0],
    [0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 2, 2, 2, 2, 0, 2, 2, 2, 2, 0],
    [0, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 0, 2, 2, 2, 2, 0],
    [0, 2, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 0, 2, 2, 0],
    [0, 2, 0, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 2, 2, 2, 0, 0, 0, 2, 2, 0],
    [0, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 0],
    [0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0],
    [0, 2, 0, 2, 2, 2, 0, 2, 2, 0, 0, 0, 2, 2, 0, 0, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0],
    [0, 2, 0, 2, 2, 2, 0, 2, 2, 0, 2, 2, 2, 0, 0, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0],
    [0, 2, 0, 0, 2, 0, 0, 2, 2, 0, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 2, 0],
    [0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 0],
    [0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

]

let escenari2 = [

    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0],
    [0, 2, 2, 2, 2, 2, 0, 0, 0, 2, 2, 2, 2, 0, 0, 0, 0, 0, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 0],
    [0, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 0, 2, 2, 2, 2, 0, 2, 2, 2, 2, 0],
    [0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 2, 2, 2, 2, 0, 2, 2, 2, 2, 0],
    [0, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 0, 2, 2, 2, 2, 0],
    [0, 2, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 0, 2, 2, 0],
    [0, 2, 0, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 2, 2, 2, 0, 0, 0, 2, 2, 0],
    [0, 3, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 0],
    [0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0],
    [0, 2, 0, 2, 2, 2, 0, 2, 2, 0, 0, 0, 2, 2, 0, 0, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0],
    [0, 2, 0, 2, 2, 2, 0, 2, 2, 0, 2, 2, 2, 0, 0, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0],
    [0, 2, 0, 0, 2, 0, 0, 2, 2, 0, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 2, 0],
    [0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 0],
    [0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

]

function dibuixaEscenari() {
    for (let y = 0; y < 16; y++) {
        for (let x = 0; x < 36; x++) {

            let tile = escenari[y][x]
            ctx.drawImage(tilemap, tile * 32, 0, 32, 32, x * ampleC, y * altC, ampleC, altC)
        }
    }
}

let imatge;
let imagen;

function inicializar() {
    canvas = document.getElementById("pantalla");
    ctx = canvas.getContext('2d')
    imatge = new Image();
    imatge.src = './img/minnie.png'
    imagen = new Image();
    imagen.src = './img/mickey.png'
    corazon = new Image();
    corazon.src = './img/corazon.png'
    tilemap = new Image();
    tilemap.src = './img/videojocunicornio.png'

    setInterval(function () {
        principal();
    }, 1000 / FPS)

}

function borrarPantalla() {
    canvas.width = 1800
    canvas.height = 800
}

let villano = function (x, y, p) {
    this.x = x;
    this.y = y;
    this.p = p;

    this.dibuixa = function () {
        ctx.drawImage(tilemap, this.p, 32, 32, 32, this.x, this.y, 50, 50)
    }

    this.moviment = function () {

        let matar = xavi.matar(this.x, this.y)
        if (matar){
            vidas--
        }
        if (matar && vidas == 0) {
            alert("XAVI HA SIDO ATRAPADO")
            location.reload();
        } else if (matar && vidas > 0) {
            vidas--
            xavi.x = 750
            xavi.y = 400
            xavi.clau = false
            alert("¡TE QUEDAN " + vidas + " VIDAS!")
        }
        retras++

        if (retras == 10) {
            let posicion = Math.floor(Math.random() * 4)

            if (posicion == 0) {

                if (!this.margenes(this.x, this.y - 50)) {

                    this.y = this.y - 50;
                }
            }
            if (posicion == 1) {
                if (!this.margenes(this.x, this.y + 50)) {
                    this.y = this.y + 50;
                }
            }
            if (posicion == 2) {
                if (!this.margenes(this.x - 50, this.y)) {
                    this.x = this.x - 50;

                }
            }
            if (posicion == 3) {
                if (!this.margenes(this.x + 50, this.y)) {
                    this.x = this.x + 50;
                }

            }

            retras = 0;
        }
    }

    this.margenes = function (x, y) {

        let colisio = false
        if (escenari[y / 50][x / 50] == 0) {

            colisio = true;
            return colisio;
        }
        return colisio;
    }



}

let prota = function (x, y) {
    this.x = x;
    this.y = y;
    this.clau = false;

    this.matar = function (x, y) {
        let xavitieso = false;
        if (this.x == x && this.y == y) {
            xavitieso = true;
        }
        return xavitieso
    }

    this.dibuixa = function () {
        ctx.drawImage(tilemap, 0, 32, 32, 32, this.x, this.y, 50, 50)
    }

    this.margenes = function (x, y) {
        let colisio = false
        if (escenari[y / 50][x / 50] == 0) {
            colisio = true;
            return colisio;
        }
        return colisio;
    }

    this.logica = function () {
        if (escenari[this.y / 50][this.x / 50] == 3) {
            this.clau = true;
            alert("TIENES LA LLAVE")
            escenari[this.y / 50][this.x / 50] = 2
        }
        if (escenari[this.y / 50][this.x / 50] == 1) {
            if (this.clau) {
                alert("ENHORABUENA HAS ESCAPADO")
                escenari = escenari2
            } else {
                alert("BUSCA LA LLAVE PORFI")
            }
        }

    }


    this.adalt = function () {
        if (!this.margenes(this.x, this.y - 50)) {
            this.y = this.y - 50;
            this.logica();
        }

    }
    this.baix = function () {
        if (!this.margenes(this.x, this.y + 50)) {
            this.y = this.y + 50;
            this.logica();
        }

    }
    this.dreta = function () {
        if (!this.margenes(this.x + 50, this.y)) {
            this.x = this.x + 50;
            this.logica();
        }

    }
    this.esquerra = function () {
        if (!this.margenes(this.x - 50, this.y)) {
            this.x = this.x - 50;
            this.logica();
        }

    }

    this.text = function () {
        ctx.font = '30px impact'
        ctx.fillStyle = '#d3770e'
        ctx.fillText("X: " + this.x + " Y: " + this.y, 50, 50)
    }
}


let xavi = new prota(50, 150, 5);
let enemic = new villano(500, 200, 32);
let enemic2 = new villano(1000, 400, 64);
let enemic3 = new villano(1500, 600, 96);

function principal() {
    borrarPantalla();
    dibuixaEscenari();
    for( let i=0;i<vidas;i++){
         ctx.drawImage(corazon, i*50,0,50,50)
    };
    xavi.dibuixa();
    enemic.dibuixa();
    enemic.moviment();
    enemic2.dibuixa();
    enemic2.moviment();
    enemic3.dibuixa();
    enemic3.moviment();

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

})
