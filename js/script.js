const signal = document.getElementById('signal')

const reproductor = document.getElementById('reproductor')

const selectEmisoras = document.getElementById('select-emisoras')

const btnPlay = document.getElementById('play')

const btnPause = document.getElementById('pause')

const ctrlVolume = document.getElementById('volume')

const emisoras = [
    {
        id: 0,
        nombre: 'Selecciona una...',
        url: '',
        param: 'selected'
    },
    {
        id: 1,
        nombre: 'Ser Rioja',
        url: 'https://25693.live.streamtheworld.com/SER_RIOJA.mp3',
        param: ''

    },
    {
        id: 2,
        nombre: 'La voz de Colombia',
        url: 'https://27603.live.streamtheworld.com/BESAME_MEDELLIN.mp3',
        param: ''
    },

    {
        id: 3,
        nombre: 'RCN radio',
        url: 'blob:https://www.rcnradio.com/aa5e547c-7da5-4fcf-b9cd-bc9a7b87ac7b',
        param: ''
    },
    {
        id: 4,
        nombre: 'Radio tiempo',
        url: 'https://i90.letio.com/9188.aac',
        param: ''
    },
    {
        id: 5,
        nombre: 'Radioactiva',
        url: 'https://playerservices.streamtheworld.com/api/livestream-redirect/RADIO_ACTIVAAAC.aac?dist=onlineradiobox',
        param: ''
    }
]

let reproduciendo;

let volumeActual;

function inicializar() {
    reproduciendo = false
    volumeActual = 10
    deshabilitarCtrls(true)
    ctrlVolume.value = volumeActual
    ctrlVolume.disabled = true
    reproductor.volume = volumeActual/100
    cambiarSignal()
    llenarSelectEmisoras()
}

function deshabilitarCtrls(val) {
    btnPlay.disabled = val
    btnPause.disabled = val
    ctrlVolume.disabled = val
}

function cambiarSignal() {
    const color = reproduciendo ? 'green' : 'red'
    /*
    equivale a:
    let color;
    if(reproduciendo) {
        color = 'green'
    }else{
        color = 'red'
    }*/
    signal.style.color = color
}

function llenarSelectEmisoras() {
    let info = '';

    for(const em of emisoras) {
        info += `<option value="${em.id}" ${em.param}>${em.nombre}</option>`
    }


    selectEmisoras.innerHTML = info;

}

function cambiarEmisora(evt) {
    if(evt.value > 0) {
        deshabilitarCtrls(false)
        reproduciendo = true
    }else{
        deshabilitarCtrls(true)
        reproduciendo = false
    }
    reproductor.src = emisoras[evt.value].url
    cambiarSignal() 
}

function reproducir(){
    reproduciendo = true
    reproductor.play()
    reproductor.volume = volumeActual/100
    cambiarSignal() 
}

function pausar() {
    reproduciendo = false
    reproductor.pause()
    cambiarSignal()
}

function cambiarVolume(evt) {
    volumeActual = evt.value
    reproductor.volume = volumeActual/100
    cambiarSignal()
}

(function(){
    inicializar()
})()