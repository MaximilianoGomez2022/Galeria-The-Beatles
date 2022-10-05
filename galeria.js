const d = document;
let grande = d.querySelector('#grande'),
    anterior = d.querySelector('#anterior'),
    siguiente = d.querySelector('#siguiente'),
    imgsChicas = d.querySelectorAll('#galeria > div div img'),
    btnDark = d.querySelector('#dark'),
    btnLight = d.querySelector('#light'),
    body = d.querySelector('body');

let imagenes = [];

for(let i = 1; i <= 9; i++) {
    imagenes.push(`the-beatles-0${i}.jpg`);
}


for (let img of imgsChicas) {
    img.onclick =  function(){
        console.log(this.src);
        grande.src = this.src;
    }
}

let movimientoImgs = 3, 
    posActual = 0,
    topeInicio = 0,
    topeFinal = imagenes.length - imgsChicas.length;

siguiente.addEventListener('click', (e)=>{
    posActual += movimientoImgs;
    if (posActual >= topeFinal) {
        posActual = topeFinal;
    }
    for(let i = 0; i < imgsChicas.length; i++) {
        imgsChicas[i].src = 'img/' + imagenes[i + posActual];
    }
    console.log(posActual)
})

anterior.addEventListener('click', (e)=>{
    posActual -= movimientoImgs;
    if (posActual <= topeInicio) {
        posActual = topeInicio;
    }
    for(let i = 0; i < imgsChicas.length; i++) {
        imgsChicas[i].src = 'img/' + imagenes[i + posActual];
    }
    console.log(posActual)
})

btnDark.addEventListener('click', (e)=>{
    body.className = 'dark';
})

btnLight.addEventListener('click', (e)=>{
    body.className = 'light';
})