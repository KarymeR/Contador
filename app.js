document.addEventListener('DOMContentLoaded', function(){
    agregarManzana();
    agregarPera();
    agregarDurazno();
    
    contarFrutas();

    limpiar();
});


function agregarManzana() {
    const manzana = document.querySelector('#manzana');

    manzana.addEventListener('click', function(){
        let contenido = document.getElementById("frutas").value;
        document.getElementById("frutas").value = contenido + "Manzana ";
    });
}

function agregarPera(){
    const pera = document.querySelector('#pera');

    pera.addEventListener('click', function(){

        let contenido = document.getElementById("frutas").value;
        document.getElementById("frutas").value = contenido + "Pera ";
    });
}


function agregarDurazno(){
    const durazno = document.querySelector('#durazno');

    durazno.addEventListener('click', function(){

        let contenido = document.getElementById("frutas").value;
        document.getElementById("frutas").value = contenido + "Durazno ";
    });
}

function contarFrutas() {
    const contar = document.querySelector('#contar');

    contar.addEventListener('click', function(){
        let contenido = document.getElementById('frutas').value;

        // Limpiar espacios
        contenido = contenido.trim();
        frutas = contenido.split(' ');

        let manzanas = 0;
        let peras = 0;
        let duraznos = 0;

        frutas.forEach(fruta => {
            switch(fruta){
                case "Manzana":
                    manzanas += 1;
                    break;
                case "Pera":
                    peras += 1;
                    break;
                case "Durazno":
                    duraznos += 1;
                    break;
            }
        });
        
        // Crear etiqueta        
        const contenedor = document.getElementById('contenedor');
        let lblFrutas = document.createElement('LABEL');
        lblFrutas.id = 'lblFrutas'
        lblFrutas.innerHTML = 'Hay ' + manzanas + ' manzanas, ' + peras + ' peras y ' + duraznos + ' duraznos';
        
        // Mostrar resultado         
        contenedor.appendChild(lblFrutas);

    });
}

function limpiar() {
    const contar = document.querySelector('#limpiar');

    contar.addEventListener('click', function(){
        const frutas = document.getElementById('frutas');
        document.getElementById("frutas").value = "";

        const lblFrutas = document.getElementById('lblFrutas');
        contenedor.removeChild(lblFrutas);
    })
}
