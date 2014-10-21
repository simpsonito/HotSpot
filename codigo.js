/**
 * Created by adib on 13/09/14.
 */
window.addEventListener("load", ajustar, false);
window.addEventListener("resize", ajustar, false);
function ajustar(){
    //console.log("ajustado");
    var zonaSensible = document.getElementsByClassName("zonaSensible")[0];
    var imagen = document.getElementById("imagenFondo");
    var hoverable = zonaSensible.getElementsByClassName("hoverable")[0];
    var areas = zonaSensible.getElementsByClassName("showme");
    //console.log(hoverable.offsetWidth, zonaSensible.offsetWidth);
    if(hoverable.offsetWidth > zonaSensible.offsetWidth){
        var porcentaje = zonaSensible.offsetWidth / hoverable.offsetWidth;
        hoverable.style.cssText = "-webkit-transform: scale(" + porcentaje + ", " + porcentaje + ");" +
            "-moz-transform: scale(" + porcentaje + ", " + porcentaje + ");" +
            "-ms-transform: scale(" + porcentaje + ", " + porcentaje + ");" +
            "transform: scale(" + porcentaje + ", " + porcentaje + ");";
        var compensacion = 1/porcentaje;
        for(var i=0; i < areas.length; i++){
            areas[i].style.cssText = "-webkit-transform: scale(" + compensacion + ", " + compensacion + ");" +
                "-moz-transform: scale(" + compensacion + ", " + compensacion + ");" +
                "-ms-transform: scale(" + compensacion + ", " + compensacion + ");" +
                "transform: scale(" + compensacion + ", " + compensacion + ");";
        }
    } else {
        hoverable.style.cssText = "";
        for(var i=0; i < areas.length; i++){
            areas[i].style.cssText = "";
        }
    }
}

window.addEventListener("load", activarMenu, false);
function activarMenu(){
    //console.log("activando");
    var botones = document.getElementsByClassName("puntoSensible");
    var infos = document.getElementsByClassName("informacion");
    for(var i=0; i<botones.length; i++){
        botones[i].cajaInfo = infos[i];
        botones[i].addEventListener("mouseover", activarPunto, false);
        botones[i].addEventListener("mouseout", desactivarPunto, false);
    }
    function activarPunto(e){
        this.cajaInfo.style.display = "inline";
        console.log(this.cajaInfo.offsetWidth, this.cajaInfo.offsetHeight);
        this.cajaInfo.style.cssText = "display:inline; left: " + (this.offsetLeft-this.cajaInfo.offsetWidth/2)+"px; top: " + (this.offsetTop-this.cajaInfo.offsetHeight)+ "px;";
    }
    function desactivarPunto(e){
        this.cajaInfo.style.display = "none";
    }
    function is_touch_device() {
        return 'ontouchstart' in window;
    }
}
/*
*
 -moz-
 -ms-
 -webkit-transform: scale(0.8,0.8);
 -webkit-transform-origin: 0 0;
*
* */