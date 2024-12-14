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
    //
    if(hora === '00'){
        resultado = 'Son las 12:' + minutos + ' AM';
        document.body.style.backgroundColor = "rgb(64, 85, 89)";
        document.getElementById('imageDayNight').src = "/images/luna.png";
    }
    else if(hora >= 0 && hora <= 5){
        resultado = 'Son las: ' + horaConvertida + ':' + minutos + ' AM';
        document.body.style.backgroundColor = "rgb(64, 85, 89)";
        document.getElementById('imageDayNight').src = "/images/luna.png";
    }
    else if(hora >= 6 && hora <= 11){
        resultado = 'Son las: ' + horaConvertida + ':' + minutos + ' AM';
        document.body.style.backgroundColor = "rgb(224, 175, 97)";
        document.getElementById('imageDayNight').src = "/images/dia.png";
    }
    else if(hora >= 12 && hora <= 17){
        resultado = 'Son las: ' + horaConvertida + ':' + minutos + ' PM';
        document.body.style.backgroundColor = "rgb(224, 175, 97)";
        document.getElementById('imageDayNight').src = "/images/dia.png";
    }
    else if(hora >= 18 && hora <= 23){
        resultado = 'Son las: ' + horaConvertida + ':' + minutos + ' PM';
        document.body.style.backgroundColor = "rgb(64, 85, 89)";
        document.getElementById('imageDayNight').src = "/images/luna.png";
    }
    document.getElementById('resultado').innerHTML = resultado;
}