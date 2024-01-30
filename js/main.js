//Archivo creado en la Clase 136
$(document).ready(function(){

    //(Clase 131) Slider 
    if(window.location.href.indexOf('index') > -1){//(Clase 136)

        $('.bxslider').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 1000,
            pager: true,
            responsive: true,
            pager: true
        });

    }

      //(Clase 132) Post

    if(window.location.href.indexOf('index') > -1){//(Clase 136)

      let post = [
            {
                title: 'Prueba de titulo 1',
                date: 'Publicado el' +' '+ moment().format("D")+"/"+ moment().format("MM")+"/"+ moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris egestas orci sed purus faucibus convallis. Aliquam laoreet massa vel interdum sodales. Aliquam non nisi facilisis, suscipit augue ultrices, tristique elit. Proin aliquet mattis mi id fringilla. Morbi pulvinar lobortis mauris. Vestibulum vitae nisl id libero lacinia laoreet. Nullam id bibendum mi.'
            },
            {
                title: 'Prueba de titulo 2',
                date: 'Publicado el' +' '+ moment().format("D")+"/"+ moment().format("MM")+"/"+ moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris egestas orci sed purus faucibus convallis. Aliquam laoreet massa vel interdum sodales. Aliquam non nisi facilisis, suscipit augue ultrices, tristique elit. Proin aliquet mattis mi id fringilla. Morbi pulvinar lobortis mauris. Vestibulum vitae nisl id libero lacinia laoreet. Nullam id bibendum mi.'
            },        
            {
                title: 'Prueba de titulo 3',
                date: 'Publicado el' +' '+ moment().format("D")+"/"+ moment().format("MM")+"/"+ moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris egestas orci sed purus faucibus convallis. Aliquam laoreet massa vel interdum sodales. Aliquam non nisi facilisis, suscipit augue ultrices, tristique elit. Proin aliquet mattis mi id fringilla. Morbi pulvinar lobortis mauris. Vestibulum vitae nisl id libero lacinia laoreet. Nullam id bibendum mi.'
            },        
            {
                title: 'Prueba de titulo 4',
                date: 'Publicado el' +' '+ moment().format("D")+"/"+ moment().format("MM")+"/"+ moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris egestas orci sed purus faucibus convallis. Aliquam laoreet massa vel interdum sodales. Aliquam non nisi facilisis, suscipit augue ultrices, tristique elit. Proin aliquet mattis mi id fringilla. Morbi pulvinar lobortis mauris. Vestibulum vitae nisl id libero lacinia laoreet. Nullam id bibendum mi.'
            },        
            {
                title: 'Prueba de titulo 5',
                date: 'Publicado el' +' '+ moment().format("D")+"/"+ moment().format("MM")+"/"+ moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris egestas orci sed purus faucibus convallis. Aliquam laoreet massa vel interdum sodales. Aliquam non nisi facilisis, suscipit augue ultrices, tristique elit. Proin aliquet mattis mi id fringilla. Morbi pulvinar lobortis mauris. Vestibulum vitae nisl id libero lacinia laoreet. Nullam id bibendum mi.'
            },        
            {
                title: 'Prueba de titulo 6',
                date: 'Publicado el' +' '+ moment().format("D")+"/"+ moment().format("MM")+"/"+ moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris egestas orci sed purus faucibus convallis. Aliquam laoreet massa vel interdum sodales. Aliquam non nisi facilisis, suscipit augue ultrices, tristique elit. Proin aliquet mattis mi id fringilla. Morbi pulvinar lobortis mauris. Vestibulum vitae nisl id libero lacinia laoreet. Nullam id bibendum mi.'
            },        
            
      ];

      post.forEach((item, index) => {//(Clase 132) 
       let post = `
       <article class="post">
       <h2>${item.title}</h2>
       <span class="date">${item.date}</span>
       <p>
       ${item.content}  
       </p>
       <a href="#" class="button-more">Leer más</a>
       </article>
       `;

       $("#post").append(post);

      });

    }
      //(Clase 133) Selector de Tema

    
        let theme = $("#theme");
        
        
        $("#to-green").click(function(){
            theme.attr("href", "css/green.css");
        });

        $("#to-red").click(function(){
            theme.attr("href", "css/red.css");
        });

        $("#to-blue").click(function(){
            theme.attr("href", "css/blue.css");
        });

       



        // (Añadido por cuenta propia)

    if(window.location.href.indexOf('index') > -1){//(Clase 136)
        let body = $("body");
        let slider;
    
        // Inicializa el bxSlider
        function initSlider() {
            slider = $('.bxslider').bxSlider({
                mode: 'fade',
                captions: true,
                slideWidth: 500,
                pager: true,
            });
        }
    
        initSlider(); // Inicializa el slider al cargar la página
    
        // Agrega evento de clic a las imágenes del slider
        $('.bxslider img').click(function(){
            let imageTitle = $(this).attr('title');
    
            // Verifica si existe un mapeo para la imagen y cambia el tema
            if (themeMap.hasOwnProperty(imageTitle)) {
                cambiarTema(themeMap[imageTitle]);
            }
        });
    
        function cambiarTema(nuevaHojaEstilos) {
            // Cambia la hoja de estilos
            theme.attr("href", nuevaHojaEstilos);
    
            // Cambia el fondo del cuerpo
            body.css("background-color", obtenerColorFondo(nuevaHojaEstilos));
    
            // Verifica si slider existe antes de destruirlo
            if (slider) {
                slider.destroySlider();
            }
    
            // Inicializa el nuevo bxSlider con el tema cambiado después de un breve tiempo (500 ms)
            setTimeout(initSlider, 500);
        }
    
        function obtenerColorFondo(nuevaHojaEstilos) {
            // Lógica para asignar un color de fondo específico basado en la hoja de estilos
            // Por ahora, simplemente devolvemos blanco como un ejemplo
            switch (nuevaHojaEstilos) {
                case "css/green.css":
                    return "#8fbc8f"; // Verde claro
                case "css/red.css":
                    return "#ff6f61"; // Rojo claro
                case "css/blue.css":
                    return "#add8e6"; // Azul claro
                default:
                    return "white"; // Color de fondo predeterminado (blanco)
            }
        }
    
        // Mapeo de títulos de imágenes a temas
        const themeMap = {
            "Hojas": "css/green.css",
            "Rojo": "css/red.css",
            "Cielo": "css/blue.css"
        };





        //(Clase 134) Scroll arriba de la web
        $('.subir').click(function(){

            $('html', 'body').animate({
                scrollTop: 0
            }, 5000);

        });

        //(Clase 135) 
        $("#login form").submit(function(){
            let for_name = $("#form_name").val();

            localStorage.setItem("form_name", for_name);

        });

        let for_name = localStorage.getItem("form_name");

        if(for_name != null && for_name != "undefined"){
            let about_parrafo = $("#about p");

            about_parrafo.html("<br><strong>Bienvenido, "+for_name+"</strong> ");
            about_parrafo.append("<a href='#' id='logout'>Cerrar sesión</a>")

            $("#login").hide();
        }

        $("#logout").click(function(){
            localStorage.clear();
            location.reload();
        });
    }


    // (Clase 136) Acordeon
    if(window.location.href.indexOf('about') > -1){
        $('#acordeon').accordion();
    }


    // (Clase 137) Reloj
    if(window.location.href.indexOf('reloj') > -1){
        
        setInterval(function(){
            let reloj = moment().format("hh:mm:ss");
            $('#reloj').html(reloj);
        }, 1000);

    }

    // (Agregdo por cuenta propia) Reloj
    if(window.location.href.indexOf('reloj') > -1){

        let secondHand = document.getElementById('second-hand');
        let minuteHand = document.getElementById('minute-hand');
        let hourHand = document.getElementById('hour-hand'); 

        function clockTick(){
            let date = new Date();
            let seconds = date.getSeconds() / 60;
            let minutes = (seconds + date.getMinutes()) / 60;
            const hours = (minutes + date.getHours()) / 12;

            rotateClockHand(secondHand, seconds);
            rotateClockHand(minuteHand, minutes);
            rotateClockHand(hourHand, hours);
        }
    
        function rotateClockHand(element, rotarion){
            element.style.setProperty('--rotate', rotarion * 360);
        }

        setInterval(clockTick, 1000);

    }

    // (Clase 137) Validación
    
    if(window.location.href.indexOf('contact') > -1){

        $("form input[name='date']").datepicker({
            dateFormat: 'dd-mm-yy'
        });

        $.validate({
            lang: 'es',
            errorMessadePosition: 'top',
            scrollToTopOnError: true
        });

    }    

      

});




