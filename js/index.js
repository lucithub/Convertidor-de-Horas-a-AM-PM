function convertirHora() {
    let hora = document.getElementById('hora').value;
    let minutos = document.getElementById('minutos').value;
    if(hora >= 24 && minutos >= 60){
        alert("Ha ingresado incorrectamente la hora. Vuelva a intentarlo.");
        return;
    }
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
        if(isSunset(horaConvertida)){
            document.body.style.backgroundColor = "rgb(228, 161, 0)";
        }
        else{
            document.body.style.backgroundColor = "rgb(224, 175, 97)";
        }
        resultado = 'Son las: ' + horaConvertida + ':' + minutos + ' AM';
        document.getElementById('imageDayNight').src = "/images/dia.png";
    }
    else if(hora >= 12 && hora <= 17){
        resultado = 'Son las: ' + horaConvertida + ':' + minutos + ' PM';
        document.body.style.backgroundColor = "rgb(224, 175, 97)";
        document.getElementById('imageDayNight').src = "/images/dia.png";
    }
    else if(hora >= 18 && hora <= 23){
        if(isSunset(horaConvertida)){
            document.body.style.backgroundColor = "rgb(228, 161, 0)";
        }
        else{
            document.body.style.backgroundColor = "rgb(64, 85, 89)";
        }
        resultado = 'Son las: ' + horaConvertida + ':' + minutos + ' PM';
        document.getElementById('imageDayNight').src = "/images/luna.png";
    }
    document.getElementById('resultado').innerHTML = resultado;
}
//
function isSunset(horaConvertida){
    if(horaConvertida === 6){
        return true;
    }
    else{
        return false;
    }
}