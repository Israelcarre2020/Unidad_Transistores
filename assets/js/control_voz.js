var audioActivo = true;
var audioActual;

/**
 * por sí en algún momento se necesita saber el slide actual del smart wizard
 */
/*$(document).ready(iniciar);
function iniciar(){
    $("#slip2").on("mouseover", wrapAudio(1));
}*/
function onLoadAudio() {
    var stepIndex = $('#smartwizard').smartWizard("getStepIndex");
    controlAudioSlides(stepIndex);
}

function controlAudioSlides(numeroSlide) {
    
    var audioLocation;

    switch (numeroSlide) {
        case 1:
            audioLocation = 'assets/voz/U004P004001.mp3';
            break;    
        case 2:
            $(`#tabsObjetivos>div>.tabs>button`).removeClass("active");
            $(`#tabsObjetivos>div>.wrapper_tabcontent>div`).removeClass("active");
            $("#tabObjetivos").addClass("active");
            $(`#Objetivos`).addClass("active");

            audioLocation = 'assets/voz/U004P004002.mp3';
            break;
        case 3:
            $(`#unidad_aprenderas>div>.tabs>button`).removeClass("active");
            $(`#unidad_aprenderas>div>.wrapper_tabcontent>div`).removeClass("active");
            $("#tabUnidad_aprenderas").addClass("active");
            $(`#unidad_aprenderas`).addClass("active");

            audioLocation = 'assets/voz/U004P004014005.mp3';
            break;
        case 4:
            $("#carouselActividadAprendizaje1").carousel(0);
            audioLocation = 'assets/voz/U004P004014007.mp3';
            break;
        case 5:
            audioLocation = 'assets/voz/U004P004014011.mp3';
            break;
        case 6:
            audioLocation = 'assets/voz/U004P004015.mp3';
            break;
        case 7:
            audioLocation = 'assets/voz/U004P004018.mp3';
            break;
        case 8:
            audioLocation = 'assets/voz/U004P004021.mp3';
            break;
        case 9:
            audioLocation = 'assets/voz/U004P004025.mp3';
            break;
        case 10:
            audioLocation = 'assets/voz/U004P004028.mp3';
            break;
        case 11:
            //audioLocation = '';
            $("#parrafosCircuitos").hide();
            break;
        case 12:
            audioLocation = 'assets/voz/U004P004032.mp3';
            break;
        case 13:
            $("#carouselActividadAprendizaje2").carousel(0);
            audioLocation = 'assets/voz/U004P004033.mp3';
            break;
        case 14:
            // $("#flat>ul>.activo").removeClass("flipster__item--current");
            // $("#flat>ul>.activo").addClass("flipster__item--current");
            // $("#flat>ul>.remover").removeClass("flipster__item--current");
            // $("#flat>ul>.remover").addClass("flipster__item--fut");
            
            audioLocation = 'assets/voz/U004P004037.mp3';
            break;
        case 15:
            //duda slide
            $("#aplicacionVariadorVelocidad_1").hide();
            $("#aplicacionVariadorVelocidad_2").hide();
            $("#aplicacionVariadorVelocidad_3").hide();
            $("#aplicacionVariadorVelocidad_4").hide();
            audioLocation = 'assets/voz/U004P004044.mp3';
            break;
        case 16:
            $('#cardFront_1').removeClass('card-front');
            $('#cardFront_1').removeClass('card-flip');
            $('#cardBack_1').removeClass('card-flip');
            $('#cardFront_1').toggleClass('card-front');
            $('#cardBack_1').toggleClass('card-flip');

            $('#cardFront_2').removeClass('card-front');
            $('#cardFront_2').removeClass('card-flip');
            $('#cardBack_2').removeClass('card-flip');
            $('#cardFront_2').toggleClass('card-front');
            $('#cardBack_2').toggleClass('card-flip');

            $('#cardFront_3').removeClass('card-front');
            $('#cardFront_3').removeClass('card-flip');
            $('#cardBack_3').removeClass('card-flip');
            $('#cardFront_3').toggleClass('card-front');
            $('#cardBack_3').toggleClass('card-flip');

            $('#cardFront_4').removeClass('card-front');
            $('#cardFront_4').removeClass('card-flip');
            $('#cardBack_4').removeClass('card-flip');
            $('#cardFront_4').toggleClass('card-front');
            $('#cardBack_4').toggleClass('card-flip');

            audioLocation = 'assets/voz/U004P004049.mp3';
            break;
        case 17:
            audioLocation = 'assets/voz/U004P004054.mp3';
            break;
        case 18:
            $("#carouselActividadAprendizaje3").carousel(0);
            audioLocation = 'assets/voz/U004P004055.mp3';
            break;
        case 19:
            audioLocation = 'assets/voz/U004P004059.mp3';
            break;
        case 20:
            $('.collapse').removeClass('show');
            audioLocation = 'assets/voz/U004P004063.mp3';
            break;
        case 21:
            $("#carouselAplicacionesVariacionVelocidad").carousel(0);
            audioLocation = 'assets/voz/U004P004070.mp3';
            break;
        case 22:
            $("#controlIluminacion").hide();
            $("#controlTemperatura").hide();
            $("#controlVelocidadMotor").hide();
            audioLocation = 'assets/voz/U004P004075.mp3';
            break;
        case 23:
            audioLocation = 'assets/voz/U004P004078.mp3';
            break;
        case 24:
            audioLocation = 'assets/voz/U004P004080.mp3';
            break;
        case 25:
            audioLocation = 'assets/voz/U004P004081.mp3';
            break;
        case 26:
            $("#carouselActividadAprendizaje4").carousel(0);
            audioLocation = 'assets/voz/U004P004082.mp3';
            break;
        case 27:
            $(`#aplicacionesSCR_tabs>li.proceso-tab`).removeClass("active");
            $(`#aplicacionesSCR_tabs>li.proceso-tab`).removeClass("show");
            $(`#aplicacionesSCR_tabsContent>div.proceso`).removeClass("active");
            $(`#aplicacionesSCR_tabsContent>div.proceso`).removeClass("show");
            $("#proceso-tab").addClass("active");
            $("#proceso-tab").addClass("show");
            $(`#proceso`).addClass("active");
            $(`#proceso`).addClass("show");

            $(`#ventajas-tab`).removeClass("active");
            $(`#ventajas-tab`).removeClass("show");
            $(`#ventajas`).removeClass("active");
            $(`#ventajas`).removeClass("show");

            $(`#convertidores-tab`).removeClass("active");
            $(`#convertidores-tab`).removeClass("show");
            $(`#convertidores`).removeClass("active");
            $(`#convertidores`).removeClass("show");

            $(`#ondaCA-tab`).removeClass("active");
            $(`#ondaCA-tab`).removeClass("show");
            $(`#ondaCA`).removeClass("active");
            $(`#ondaCA`).removeClass("show");

            $(`#controlCarga-tab`).removeClass("active");
            $(`#controlCarga-tab`).removeClass("show");
            $(`#controlCarga`).removeClass("active");
            $(`#controlCarga`).removeClass("show");

            audioLocation = 'assets/voz/U004P004086.mp3';
            break;
        case 28:
            $(".tarjetasAplicacionesSCR").hide();
            audioLocation = 'assets/voz/U004P004092.mp3';
            break;
        case 29:
            $('.botoneraAplicacionesSCR').hide();
            audioLocation = 'assets/voz/U004P004095.mp3';
            break;
        case 30:
            audioLocation = 'assets/voz/U004P004102.mp3';
            break;
        case 31:
            $("#carouselActividadAprendizaje5").carousel(0);
            audioLocation = 'assets/voz/U004P004103.mp3';
            break;
        case 32:
            audioLocation = 'assets/voz/U004P004107.mp3';
            break;
        case 33:
            $('#slide27_collapseTarjeta2').removeClass('show');
            $('#slide27_collapseTarjeta1').removeClass('show');
            $('#slide27_collapseTarjeta3').removeClass('show');
            //audioLocation = 'assets/voz/U004P004108.mp3';
            break;
        case 34:
            audioLocation = 'assets/voz/U004P004111.mp3';
            break;
        case 35:
            $(".tarjetasCanvasTriac").hide();
            break;
        case 36:
            audioLocation = 'assets/voz/U004P004118.mp3';
            break;
        case 40:
            intentosJuego=0;                                     
        default:
            audioLocation = undefined;
            break;
    }
    
    reproducirAudio(audioLocation);
}



$("#audioActivo").click(function() { 
    audioActivoFuncion();
});

function audioActivoFuncion() {
    audioActivo = !audioActivo;
    
    if(!audioActivo) {
        $("#iconoAudioActivo").hide();
        $("#iconoAudioInactivo").show();
        $("#pauseAudio").hide();
        $("#resumeAudio").show();
        if (audioActual)
        audioActual.pause();          
    } else {
        $("#iconoAudioInactivo").hide();        
        $("#iconoAudioActivo").show();
        $("#pauseAudio").show();
        $("#resumeAudio").hide();
        if (audioActual)
        audioActual.play();  
    }
}

function pause_audio() {
    if(audioActual)
        audioActual.pause();
}

$("#pauseAudio").click(function() {

    if (!audioActivo)
        return false;

    if (audioActual)
        audioActual.pause(); 

    $("#pauseAudio").hide();
    $("#resumeAudio").show();
});

$("#resumeAudio").click(function() {

    if (!audioActivo)
        return false;

    if (audioActual)
        audioActual.play();       

    $("#resumeAudio").hide();
    $("#pauseAudio").show();
});

function reproducirAudio(audioLocation) {
    if (audioActual)
        audioActual.pause();    

    audioActual = new Audio(audioLocation);        

    if (!audioActivo) {
        $("#pauseAudio").hide();
        $("#resumeAudio").show();
        return false;
    } else {
        $("#resumeAudio").hide();
        $("#pauseAudio").show();
    }

    if (audioActual)
        audioActual.play();    
}

$('.modal').on('hidden.bs.modal', function (e) {
    if (audioActual)
        audioActual.pause();    
});

/**
 * Configuraciones personalizadas para tabs de audio
 */

function tarjetasCanvasTriac(opcion){
    switch (parseInt(opcion)) {
        case 1:
            audioLocation = 'assets/voz/U004P004112.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U004P004113.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U004P004114.mp3';
            break;
        case 4:
            audioLocation = 'assets/voz/U004P004115.mp3';
            break;
        case 5:
            audioLocation = 'assets/voz/U004P004116.mp3';
            break;
        case 6:
            audioLocation = 'assets/voz/U004P004117.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
}

function OndaAudio(opcion){
    switch (parseInt(opcion)) {
        case 1:
            audioLocation = 'assets/voz/U004P004108.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U004P004109.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U004P004110.mp3';
            break;
        case 4:
            audioLocation = 'assets/voz/U004P004111.mp3';
            break;
        case 5:
            audioLocation = 'assets/voz/U004P004112.mp3';
            break;
        case 6:
            audioLocation = 'assets/voz/U004P004113.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
}

 function botoneraAplicacionesSCR(opcion){
    switch (parseInt(opcion)) {
        case 1:
            audioLocation = 'assets/voz/U004P004096.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U004P004097.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U004P004098.mp3';
            break;
        case 4:
            audioLocation = 'assets/voz/U004P004099.mp3';
            break;
        case 5:
            audioLocation = 'assets/voz/U004P004100.mp3';
            break;
        case 6:
            audioLocation = 'assets/voz/U004P004101.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
 }

function tarjetasAplicacionesSCRAudio(opcion){
     var audioLocation;

    switch (parseInt(opcion)) {
        case 1:
            audioLocation = 'assets/voz/U004P004093.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U004P004094.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
}

function aplicacionesSCR_tabs(opcion){
     var audioLocation;

    switch (parseInt(opcion)) {
        case 1:
            audioLocation = 'assets/voz/U004P004086.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U004P004087.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U004P004088.mp3';
            break;
        case 4:
            audioLocation = 'assets/voz/U004P004089.mp3';
            break;
        case 5:
            audioLocation = 'assets/voz/U004P004091.mp3';
            break;
        case 6:
            audioLocation = 'assets/voz/U004P004090.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
}

function wrapAudio(opcion){
    var audioLocation;

    switch (parseInt(opcion)) {
        case 1:
            audioLocation = 'assets/voz/U004P004079.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
}

function audioConceptos(numeroTab) {

    var audioLocation;

    switch (parseInt(numeroTab)) {
        case 1:
            audioLocation = 'assets/voz/U04D011.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U04D012.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U04D013.mp3';
            break;
        case 4:
            audioLocation = 'assets/voz/U04D014.mp3';
            break;
        case 5:
            audioLocation = 'assets/voz/U04D015.mp3';
            break;
        case 6:
            audioLocation = 'assets/voz/U04D016.mp3';
            break;
        case 7:
            $('#carouselConceptos').carousel(0);
            audioLocation = 'assets/voz/U04D017.mp3';
            break;
        case 8:
            $('#carouselConceptos_2').carousel(0);
            audioLocation = 'assets/voz/U04D024.mp3';
            break;
    
        default:
            break;
    }

    reproducirAudio(audioLocation);
}

/**
 * Esta función se llama desde contenido.html, ya que de acuerdo al botón seleccionado
 * se abre un modal. Estos audios corresponden a esos casos específicos:
 */
function audioTiposGeneradores(tipoGenerador){
    var audioLocation;

    switch (tipoGenerador) {
        case 'pilas':
            audioLocation = 'assets/voz/U04D029.mp3';
            break;
        case 'acumuladores':
            $("#carouselModalAcumuladores").carousel(0);
            audioLocation = 'assets/voz/U04D031.mp3';
            break;
        case 'dinamos':                
            $("#carouselModalDinamos").carousel(0);
            audioLocation = 'assets/voz/U04D034.mp3';
            break;
        case 'celdas':
            $("#carouselModalCeldas").carousel(0);
            audioLocation = 'assets/voz/U04D039.mp3';
            break;
        case 'paneles':
            $("#carouselModalPaneles").carousel(0);
            audioLocation = 'assets/voz/U04D042.mp3';
            break;

        default:
            break;
    }
    
    reproducirAudio(audioLocation);
}

function audioComentariosFrecuencia(opcion){
    var audioLocation;

    switch (parseInt(opcion)) {
        case 1:
            audioLocation = 'assets/voz/U04D055.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U04D056.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U04D057.mp3';
            break;
        case 4:
            audioLocation = 'assets/voz/U04D058.mp3';
            break;
        case 5:
            audioLocation = 'assets/voz/U04D059.mp3';
            break;
        case 6:
            audioLocation = 'assets/voz/U04D060.mp3';
            break;
        case 7:
            audioLocation = 'assets/voz/U04D061.mp3';
            break;    
        default:
            break;
    }

    reproducirAudio(audioLocation);
}

function audioCollapsePuntos(opcion) {
    var audioLocation;

    switch (parseInt(opcion)) {
        case 0:
            audioLocation = 'assets/voz/U04D070.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U04D072.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U04D073.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U04D074.mp3';
            break;
        case 4:
            audioLocation = 'assets/voz/U04D075.mp3';
            break;
        default:
            break;
    }         
    
    reproducirAudio(audioLocation);
}

function audioImagenesCA(opcion) {
    var audioLocation;

    switch (parseInt(opcion)) {
        case 1:
            audioLocation = 'assets/voz/U04D078.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U04D079.mp3';
            break;
        case 3:
            $("#carouselFrecuencia_2").carousel(0)
            audioLocation = 'assets/voz/U04D080.mp3';
            break;
        case 4:
            audioLocation = 'assets/voz/U04D083.mp3';
            break;
        case 5:
            audioLocation = 'assets/voz/U04D084.mp3';
            break;            
        case 6:
            audioLocation = 'assets/voz/U04D085.mp3';
            break;            
        default:
            break;
    }

    reproducirAudio(audioLocation);    
}

function audioTransformadoresTab(opcion){
    var audioLocation;

    switch (parseInt(opcion)) {
        case 1:
            audioLocation = 'assets/voz/U04D086.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U04D087.mp3';
            break;
        case 3:            
            audioLocation = 'assets/voz/U04D088.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);       
}

function audioTiposLinea(opcion){
    var audioLocation;

    switch (parseInt(opcion)) {
        case 1:
            audioLocation = 'assets/voz/U04D090.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U04D091.mp3';
            break;
        case 3:            
            audioLocation = 'assets/voz/U04D092.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);       
}

function audioTiposCorriente(opcion){
    var audioLocation;

    switch (parseInt(opcion)) {
        case 1:
            audioLocation = 'assets/voz/U04D094.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U04D095.mp3';
            break;
        case 3:            
            $("#carouselTipoCorriente").carousel(0);
            audioLocation = 'assets/voz/U04D096.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);       
}

function audioTiposConexiones(opcion){
    var audioLocation;

    switch (parseInt(opcion)) {
        case 1:
            audioLocation = 'assets/voz/U04D099.mp3';
            break;
        case 2:
            $("#carouselConexionDelta").carousel(0);
            audioLocation = 'assets/voz/U04D100.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);       
}

function audioImanes(opcion){
    var audioLocation;

    switch (parseInt(opcion)) {
        case 1:
            audioLocation = 'assets/voz/U04D110.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U04D111.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U04D112.mp3';
            break;
        case 4:
            audioLocation = 'assets/voz/U04D113.mp3';
            break;
        case 5:
            audioLocation = 'assets/voz/U04D114.mp3';
            break;
        case 6:
            audioLocation = 'assets/voz/U04D115.mp3';
            break;
        case 7:
            audioLocation = 'assets/voz/U04D116.mp3';
            break;
        case 8:
            audioLocation = 'assets/voz/U04D117.mp3';
            break;
        case 9:
            audioLocation = 'assets/voz/U04D118.mp3';
            break;
        case 10:
            audioLocation = 'assets/voz/U04D119.mp3';
            break;
        case 11:
            audioLocation = 'assets/voz/U04D120.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);       
}

function audioElectroImanesDiapositiva(opcion) {
    var audioLocation;

    switch (parseInt(opcion)) {
        case 0:
            audioLocation = 'assets/voz/U04D132.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U04D133.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U04D134.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
}

function audioElectroImanesTabs(opcion) {
    var audioLocation;

    switch (parseInt(opcion)) {
        case 1:
            audioLocation = 'assets/voz/U04D135.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U04D136.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U04D137.mp3';
            break;
        case 4:
            $("#carouselFoucault").carousel(0);
            audioLocation = 'assets/voz/U04D138.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
}

function transistorCanvasAudio(opcion){
    var audioLocation;
    switch(parseInt(opcion)){
        case 1:
            audioLocation = 'assets/voz/U004P004012.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U004P004013.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U004P004014.mp3';
            break;
        default:
            break;
    }
    reproducirAudio(audioLocation);
}

function modaltransistorPnp(opcion){
    var audioLocation;
    switch(parseInt(opcion)){
        case 1:
            audioLocation = 'assets/voz/U004P004016.mp3';
            break;
        default:
            break;
    }
    reproducirAudio(audioLocation);
}

function modaltransistorNpn(opcion){
    var audioLocation;
    switch(parseInt(opcion)){
        case 1:
            audioLocation = 'assets/voz/U004P004017.mp3';
            break;
        default:
            break;
    }
    reproducirAudio(audioLocation);
}
function bjt(opcion){
    var audioLocation;
    switch(parseInt(opcion)){
        case 1:
            audioLocation = 'assets/voz/U004P004019.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U004P004020.mp3';
            break;
        default:
            break;
    }
    reproducirAudio(audioLocation);
}

function ventajasMosfet(opcion){
    var audioLocation;
    switch(parseInt(opcion)){
        case 1:
            audioLocation = 'assets/voz/U004P004022.mp3';
            break;
        default:
            break;
    }
    reproducirAudio(audioLocation);
}
function mosfetCanalN(opcion){
    var audioLocation;
    switch(parseInt(opcion)){
        case 1:
            audioLocation = 'assets/voz/U004P004023.mp3';
            break;
        default:
            break;
    }
    reproducirAudio(audioLocation);
}

function mosfetCanalP(opcion){
    var audioLocation;
    switch(parseInt(opcion)){
        case 1:
            audioLocation = 'assets/voz/U004P004024.mp3';
            break;
        default:
            break;
    }
    reproducirAudio(audioLocation);
}

function TransistorIgbt(opcion){
    var audioLocation;
    switch(parseInt(opcion)){
        case 1:
            audioLocation = 'assets/voz/U004P004027.mp3';
            break;
        default:
            break;
    }
    reproducirAudio(audioLocation);
}

function circuitosPolarizacion(opcion){
    var audioLocation;
    switch(parseInt(opcion)){
        case 1:
            audioLocation = 'assets/voz/U004P004029.mp3';
            break;
        default:
            break;
    }
    reproducirAudio(audioLocation);
}

function Circuitos(opcion){
    var audioLocation;
    switch(parseInt(opcion)){
        case 1:
            audioLocation = 'assets/voz/U004P004031.mp3';
            break;
        default:
            break;
    }
    reproducirAudio(audioLocation);
}

function VariadorVelocidad(opcion){
    var audioLocation;
    switch(parseInt(opcion)){
        case 1:
            audioLocation = 'assets/voz/U004P004014045.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U004P004014046.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U004P004014047.mp3';
            break;
        case 4:
            audioLocation = 'assets/voz/U004P004014048.mp3';
            break;
        default:
            break;
    }
    reproducirAudio(audioLocation);
}

function transistor(opcion){
    var audioLocation;
    switch(parseInt(opcion)){
        case 1:
            audioLocation = 'assets/voz/U004P004060.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U004P004062.mp3';
            break;
        default:
            break;
    }
    reproducirAudio(audioLocation);
}

function cardAccordion(opcion){
    var audioLocation;
    switch(parseInt(opcion)){
        case 1:
            //$("#collapseAplicacionTransistores_1").show();
            audioLocation = 'assets/voz/U004P004064.mp3';
            break;
        case 2:
            //$("#collapseAplicacionTransistores_2").show();
            audioLocation = 'assets/voz/U004P004065.mp3';
            break;
        case 3:
            //$("#collapseAplicacionTransistores_3").show();
            audioLocation = 'assets/voz/U004P004066.mp3';
            break;
        case 4:
            audioLocation = 'assets/voz/U004P004067.mp3';
            break;
        case 5:
            audioLocation = 'assets/voz/U004P004068.mp3';
            break;
        case 6:
            audioLocation = 'assets/voz/U004P004069.mp3';
            break;
        default:
            break;
    }
    reproducirAudio(audioLocation);
}

function cardanimada(opcion){
    var audioLocation;
    switch(parseInt(opcion)){
        case 1:
            audioLocation = 'assets/voz/U004P004014050.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U004P004014051.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U004P004014052.mp3';
            break;
        case 4:
            audioLocation = 'assets/voz/U004P004014053.mp3';
            break;
        default:
            break;
    }
    reproducirAudio(audioLocation);
}


function flatIndexAudio(opcion){
    var audioLocation;
    switch(parseInt(opcion)){
        case 0:
            audioLocation = '';
            break;
        case 1:
            audioLocation = 'assets/voz/U004P004038.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U004P004039.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U004P004040.mp3';
            break;
        case 4:
            audioLocation = 'assets/voz/U004P004041.mp3';
            break;
        case 5:
            audioLocation = 'assets/voz/U004P004042.mp3';
            break;
        case 6:
            audioLocation = 'assets/voz/U004P004043.mp3';
            break;
        default:
            break;
    }
    reproducirAudio(audioLocation);
}

function modalControlMotores(opcion){
    var audioLocation;
    switch(parseInt(opcion)){
        case 1:
            audioLocation = 'assets/voz/U004P004074.mp3';
            break;
        default:
            break;
    }
    reproducirAudio(audioLocation);
}

function AplicacionesControlAudio(opcion){
    var audioLocation;
    switch(opcion){
        case 'controlIluminacion':
            audioLocation = 'assets/voz/U004P004075.mp3';
            break;
        case 'controlTemperatura':
            audioLocation = 'assets/voz/U004P004076.mp3';
            break;
        case 'controlVelocidadMotor':
            audioLocation = 'assets/voz/U004P004077.mp3';
            break;
        default:
            break;
    }
    reproducirAudio(audioLocation);
}

function audioTabs(opcion) {
    var audioLocation;
    //var caso = $(this).attr("data-country");

    switch (opcion) {
        case 'Objetivos':
            audioLocation = 'assets/voz/U004P004002.mp3';
            break;
        case 'Contenido':
            audioLocation = 'assets/voz/U004P004003.mp3';
            break;
        case 'Metodologia':
            audioLocation = 'assets/voz/U004P004004.mp3';
            break;
        case 'unidad_aprenderas':
            audioLocation = 'assets/voz/U004P004014005.mp3';
            break;
        case 'unidad_necesitas':
            audioLocation = 'assets/voz/U004P004014006.mp3';
            break;
        case 'estructuraTransistor_1':
            audioLocation = 'assets/voz/U004P004012.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
}

$('#carouselActividadAprendizaje1').on('slid.bs.carousel', function () {
    
    var numeroSlide = $('#carouselActividadAprendizaje1>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U004P004014007.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U004P004014008.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U004P004014009.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U05D088.mp3';
            break;
    
        default:
            break;
    }

    reproducirAudio(audioLocation);    
})

$('#carouselActividadAprendizaje2').on('slid.bs.carousel', function () {
    
    var numeroSlide = $('#carouselActividadAprendizaje2>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U004P004033.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U004P004034.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U004P004035.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U05D088.mp3';
            break;
    
        default:
            break;
    }

    reproducirAudio(audioLocation);
})

$('#carouselActividadAprendizaje3').on('slid.bs.carousel', function () {
    
    var numeroSlide = $('#carouselActividadAprendizaje3>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U004P004055.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U004P004056.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U004P004057.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U05D088.mp3';
            break;
    
        default:
            break;
    }

    reproducirAudio(audioLocation);    
})

$('#carouselActividadAprendizaje4').on('slid.bs.carousel', function () {
    
    var numeroSlide = $('#carouselActividadAprendizaje4>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U004P004082.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U004P004083.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U004P004084.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U05D088.mp3';
            break;
    
        default:
            break;
    }

    reproducirAudio(audioLocation);    
})

$('#carouselActividadAprendizaje5').on('slid.bs.carousel', function () {
    
    var numeroSlide = $('#carouselActividadAprendizaje5>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U004P004103.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U004P004104.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U004P004105.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U05D088.mp3';
            break;
    
        default:
            break;
    }

    reproducirAudio(audioLocation);    
})

$('#carouselAplicacionesVariacionVelocidad').on('slid.bs.carousel', function () {
    
    var numeroSlide = $('#carouselAplicacionesVariacionVelocidad>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U004P004070.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U004P004071.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U004P004072.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U004P004073.mp3';
            break;
    
        default:
            break;
    }

    reproducirAudio(audioLocation);    
})

$('#carouselConceptos').on('slid.bs.carousel', function () {
    
    var numeroSlide = $('#carouselConceptos>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U04D017.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U04D018.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U04D019.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U04D020.mp3';
            break;
        case 4:
            audioLocation = 'assets/voz/U04D021.mp3';
            break;
        case 5:
            audioLocation = 'assets/voz/U04D022.mp3';
            break;
    
        default:
            break;
    }

    reproducirAudio(audioLocation);    
})



$('#carouselConceptos_2').on('slid.bs.carousel', function () {
    
    var numeroSlide = $('#carouselConceptos_2>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U04D024.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U04D025.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U04D028.mp3';
            break;
    
        default:
            break;
    }

    reproducirAudio(audioLocation);    
})

$('#carouselModalAcumuladores').on('slid.bs.carousel', function () {

    var numeroSlide = $('#carouselModalAcumuladores>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U04D031.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U04D032.mp3';
            break;        

        default:
            break;
    }

    reproducirAudio(audioLocation);
})

$('#carouselModalDinamos').on('slid.bs.carousel', function () {

    var numeroSlide = $('#carouselModalDinamos>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U04D034.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U04D035.mp3';
            break;        
        case 2:
            audioLocation = 'assets/voz/U04D036.mp3';
            break;        
        case 3:
            audioLocation = 'assets/voz/U04D037.mp3';
            break;        

        default:
            break;
    }

    reproducirAudio(audioLocation);
})

$('#carouselModalCeldas').on('slid.bs.carousel', function () {

    var numeroSlide = $('#carouselModalCeldas>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U04D039.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U04D040.mp3';
            break;        

        default:
            break;
    }

    reproducirAudio(audioLocation);
})

$('#carouselModalPaneles').on('slid.bs.carousel', function () {

    var numeroSlide = $('#carouselModalPaneles>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U04D042.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U04D043.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U04D044.mp3';
            break;

        default:
            break;
    }

    reproducirAudio(audioLocation);
})


$('#carouselFrecuencia').on('slid.bs.carousel', function () {

    var numeroSlide = $('#carouselFrecuencia>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U04D063.mp3';
            reproducirAudio(audioLocation);
            break;
        case 1:
            audioLocation = 'assets/voz/U04D064.mp3';
            reproducirAudio(audioLocation);
            break;
        case 5:
            audioLocation = 'assets/voz/U04D065.mp3';
            reproducirAudio(audioLocation);
            break;
        case 9:
            audioLocation = 'assets/voz/U04D066.mp3';
            reproducirAudio(audioLocation);
            break;

        default:
            break;
    }
})

$('#carouselGeneracionCorriente').on('slid.bs.carousel', function () {

    var numeroSlide = $('#carouselGeneracionCorriente>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U04D067.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
})

$('#carouselTipoCorriente').on('slid.bs.carousel', function () {

    var numeroSlide = $('#carouselTipoCorriente>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U04D096.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U04D097.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
})

$('#carouselConexionDelta').on('slid.bs.carousel', function () {

    var numeroSlide = $('#carouselConexionDelta>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U04D100.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U04D101.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
})

$('#carouselMagnetismo').on('slid.bs.carousel', function () {

    var numeroSlide = $('#carouselMagnetismo>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U04D121.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U04D122.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U04D123.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U04D124.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
})

$('#carouselElectromagnetismo').on('slid.bs.carousel', function () {

    var numeroSlide = $('#carouselElectromagnetismo>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U04D127.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U04D129.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U04D130.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
})

$('#carouselFrecuencia_2').on('slid.bs.carousel', function () {

    var numeroSlide = $('#carouselFrecuencia_2>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U04D080.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U04D081.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U04D082.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
})

$('#carouselFoucault').on('slid.bs.carousel', function () {

    var numeroSlide = $('#carouselFoucault>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U04D138.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U04D139.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
})