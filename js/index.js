function convertirHora() {
    let hora = document.getElementById('hora').value;
    let minutos = document.getElementById('minutos').value;
    let horaConvertida;
    let resultado;
    if (hora > 12){
        horaConvertida = hora - 12;
    }
    else{
        horaConvertida = hora * 1;
    }
    if(hora === '00'){
        resultado = 'Son las 12:' + minutos + ' AM';
        document.body.style.backgroundColor = "rgb(64, 85, 89)";
        document.getElementById('imageDayNight').src = "/images/luna.png";
    }
    else if(hora >= 12){
        resultado = 'Son las: ' + horaConvertida + ':' + minutos + ' PM';
        document.body.style.backgroundColor = "rgb(64, 85, 89)";
        document.getElementById('imageDayNight').src = "/images/luna.png";
    }
    else{
        resultado = 'Son las: ' + horaConvertida + ':' + minutos + ' AM';
        document.body.style.backgroundColor = "rgb(224, 175, 97)";
        document.getElementById('imageDayNight').src = "/images/dia.png";
    }
    document.getElementById('resultado').innerHTML = resultado;
}