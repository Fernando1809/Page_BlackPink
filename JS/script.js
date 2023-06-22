      // Cálculo del tiempo transcurrido desde el debut
      var debutDate = new Date("08/08/2016"); // Fecha de debut de Black Pink
      var currentDate = new Date(); // Fecha actual
      var timeDiff = currentDate.getTime() - debutDate.getTime();
      var yearsSinceDebut = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365.25)); // Cálculo de los años teniendo en cuenta los años bisiestos
    
      // Mostrar el contador de años activas
      document.getElementById("yearsActive").textContent = yearsSinceDebut;


      // Función para desplazarse al principio de la página
      function topFunction() {
        document.body.scrollTop = 0; // Para Safari
        document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE y Opera
      }

      // Mostrar el botón cuando se desplaza hacia abajo
      window.onscroll = function() {
        scrollFunction();
      };

      function scrollFunction() {
        if (
          document.body.scrollTop > 20 ||
          document.documentElement.scrollTop > 20
        ) {
          document.getElementById("back-to-top").style.display = "block";
        } else {
          document.getElementById("back-to-top").style.display = "none";
        }
      }