var numSlide = 37

$(document).ready(function () {
    
    $("#sidebar").mCustomScrollbar({
        theme: "minimal"
    });

    $('.hello_world').pwstabs({
        effect: 'slideleft',
        defaultTab: 1
    });
    
    $(function () {
        $('[data-toggle="tooltip"]').tooltip();
        $('#porcentaje_curso').popover({
            container: 'body',
            html: true,
            content: '<div id="percent_curso" class="blue"></div>',
            template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
        });
    })

    $('#porcentaje_curso').on('shown.bs.popover', function () {
        var numItems = $('.done').length / 2;
        var porcent = parseFloat((numItems / numSlide) * 100).toFixed(2);
        $("#percent_curso").percircle({ percent: porcent, animate: "true" });
    })

    $('#icon_actividades').off('click').on('click', function () {
        if ($(".divcontenido").is(':visible')) {
            $(".divcontenido").animate({ width: 'hide' });
            $(".menu-actividades").show(1000);
            setTimeout(function () { toggleOptions('.selector'); }, 100);//@ sourceURL=pen.js
        } else {
            $(".menu-actividades").hide();
            setTimeout(function () { toggleOptions('.selector'); }, 10);
            $(".divcontenido").animate({ width: 'show' });
        }
    });

    $('.link_actividad').off('click').on('click', function () {
        $(".menu-actividades").hide();
        setTimeout(function () { toggleOptions('.selector'); }, 10);
        $(".divcontenido").animate({ width: 'show' });

        var number_at = $(this).attr("for");

        switch (number_at) {
            case "c1":
                $('#smartwizard').smartWizard("goToStep", 4);
                $('#smartwizard2').smartWizard("goToStep", 4);
                break;
            case "c2":
                $('#smartwizard').smartWizard("goToStep", 13);
                $('#smartwizard2').smartWizard("goToStep", 13);
                break;
            case "c3":
                $('#smartwizard').smartWizard("goToStep", 18);
                $('#smartwizard2').smartWizard("goToStep", 18);
                break;
            case "c4":
                $('#smartwizard').smartWizard("goToStep", 26);
                $('#smartwizard2').smartWizard("goToStep", 26);
                break;
            case "c5":
                $('#smartwizard').smartWizard("goToStep", 31);
                $('#smartwizard2').smartWizard("goToStep", 31);
                break;
            default:
                //Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
                break;
        }

        $(".controls-slide").show();
        $(".divcontenido").css("height","1000px");
    });  

    $('#dismiss, .overlay').on('click', function () {
        $('#sidebar').removeClass('active');
        $('.overlay').removeClass('active');
    });

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').addClass('active');
        $('.overlay').addClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });     

    $('#smartwizard').smartWizard({
        theme:'arrows',
        toolbarSettings: {
              showNextButton: false, // show/hide a Next button
              showPreviousButton: false, // show/hide a Previous button
              toolbarExtraButtons: [] // Extra buttons to show on toolbar, array of jQuery input/buttons elements
        },
        transition: {
            animation: 'slide-horizontal', // Effect on navigation, none/fade/slide-horizontal/slide-vertical/slide-swing
            speed: '500', // Transion animation speed
            easing:'' // Transition animation easing. Not supported without a jQuery easing plugin
        }
    });
    $('#smartwizard2').smartWizard({
        theme:'arrows',
        transition: {
            animation: 'slide-horizontal', // Effect on navigation, none/fade/slide-horizontal/slide-vertical/slide-swing
            speed: '500', // Transion animation speed
            easing:'' // Transition animation easing. Not supported without a jQuery easing plugin
        },
        toolbarSettings: {
              showNextButton: false, // show/hide a Next button
              showPreviousButton: false, // show/hide a Previous button
              toolbarExtraButtons: [] // Extra buttons to show on toolbar, array of jQuery input/buttons elements
        }
    });

    $('#nextSlide').on('click', function () {
        var stepIndex = parseInt($('#smartwizard').smartWizard("getStepIndex"))+1;
         
        switch (stepIndex) {
            case 4:
            case 13:
            case 18:
            case 26:
            case 31:
                pause_audio();
                $(".divcontenido").animate({ width: 'hide' }); 
                $(".menu-actividades").show(1000); 
                setTimeout(function() { toggleOptions('.selector'); }, 100);//@ sourceURL=pen.js
                $(".controls-slide").hide();
                break;
            default:
                $('#smartwizard2').smartWizard("next");
                $('#smartwizard').smartWizard("next");
                break;
        }
                         
    });

    $('#prevSlide').on('click', function () {
        $('#smartwizard2').smartWizard("prev");
        $('#smartwizard').smartWizard("prev"); 
    });

    $("#smartwizard").on("stepContent", function(e, anchorObject, stepIndex, stepDirection) {
        console.log("Here is the content for step " + stepIndex);
        controlAudioSlides(stepIndex);
        switch(stepIndex) {

            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:
                $(`.menu_actividades`).removeClass("active_actividad");
                $(`#menu_actividad1`).addClass("active_actividad");
                break;
            case 13:
            case 14:
            case 15:
            case 16:
            case 17:                
                $(`.menu_actividades`).removeClass("active_actividad");
                $(`#menu_actividad2`).addClass("active_actividad");
                break;                
            case 18:                
            case 19:                
            case 20:                
            case 21:                
            case 22:                
            case 23:                
            case 24:                
            case 25:                
                $(`.menu_actividades`).removeClass("active_actividad");
                $(`#menu_actividad3`).addClass("active_actividad");
                break;
            case 26:                
            case 27:                
            case 28:                
            case 29:                
            case 30:                
                $(`.menu_actividades`).removeClass("active_actividad");
                $(`#menu_actividad4`).addClass("active_actividad");
                break;
            case 31:                
            case 32:                
            case 33:                
            case 34:                
            case 35:                
            case 36:                
                $(`.menu_actividades`).removeClass("active_actividad");
                $(`#menu_actividad5`).addClass("active_actividad");
                break;
            default:
                break;
        }
    });

    customUnitReady();
});

  
/**
 * Se inician las funciones particulares de cada unidad
 */
function customUnitReady() {
    transistorCanvas();
    canvasEstructuraTransistor();

    $("select").imagepicker({
        show_label: true,
        clicked: function(e){
            console.log($(this).val());
            
        }
    })

    var flat = $("#flat").flipster({
        style: 'flat',
        spacing: -0.25,
        buttons: true,
        start: 0,
        buttonNext: 'Siguiente',
        onItemSwitch: function (currentItem,previousItem,index) {
            console.log(index);
            var flatIndex = $("#flat>ul>.flipster__item--current").attr("data-flip-title");
            $("#flat>ul>.flipster__item--current").addClass("remover");
            flatIndexAudio(flatIndex);
        }
    });
}

var tabLinks = document.querySelectorAll(".tablinks");
var tabContent = document.querySelectorAll(".tabcontent");


// tabs
$(".tablinks").click(function(){

    var idTabs = $(this).parent().parent().parent().attr("id");        

    $(`#${idTabs}>div>.tabs>button`).removeClass("active");
    $(`#${idTabs}>div>.wrapper_tabcontent>div`).removeClass("active");
    
    $(this).addClass("active");
    $(`#${$(this).attr("data-country")}`).addClass("active");

    audioTabs($(this).attr("data-country"));
});

function goToActivities() {
    pause_audio();
    $(".divcontenido").animate({ width: 'hide' }); 
    $(".menu-actividades").show(1000); 
    setTimeout(function() { toggleOptions('.selector'); }, 100);//@ sourceURL=pen.js
    $(".controls-slide").hide();
}