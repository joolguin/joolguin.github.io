document.addEventListener('DOMContentLoaded', function() {
  var heroTitleText = "Hi, I'm Josefa Olguin";
  var heroSubtitleText = "I'm a student of Civil Engineering in Computer Science, and you've landed on my personal webpage.";
  var heroWelcomeText = "Welcome!";
  var speed = 65; 

  function typeWriter(text, elementId, i) {
      if (i < text.length) {
          document.getElementById(elementId).innerHTML += text.charAt(i);
          i++;
          setTimeout(function() {
              typeWriter(text, elementId, i);
          }, speed);
      }
  }

  typeWriter(heroTitleText, "heroTitle", 0);
  setTimeout(function() { typeWriter(heroSubtitleText, "heroSubtitle", 0); }, heroTitleText.length * speed);
  setTimeout(function() { typeWriter(heroWelcomeText, "heroWelcome", 0); }, (heroTitleText.length + heroSubtitleText.length) * speed);
});


document.addEventListener('DOMContentLoaded', () => {
  // Inicializa el IntersectionObserver
  let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      // Verifica si el elemento está en el campo de visión
      if (entry.isIntersecting) {
        // Anima las barras de progreso que son hijos del elemento intersectado
        entry.target.querySelectorAll('.progress-bar').forEach(bar => {
          let percentage = bar.getAttribute('data-percentage');
          bar.style.transition = 'width 2s ease-in-out'; // Controla la velocidad de la animación
          bar.style.width = percentage + '%'; // Ajusta el ancho basado en el atributo data-percentage
        });
      }
    });
  }, { threshold: 0.6 }); // Determina cuánto del elemento debe estar visible para activar el observador

  // Observa la sección de habilidades para aplicar animaciones
  observer.observe(document.querySelector('.skills-section'));

  // Eventos de toque: Estos son esqueletos para eventos de toque. 
  // Puedes añadir interacciones específicas aquí si es necesario.
  document.addEventListener('touchstart', function(e) {
    // Implementa acciones específicas para touchstart si es necesario
  });

  document.addEventListener('touchmove', function(e) {
    // Implementa acciones específicas para touchmove si es necesario
  });
});




function changeBackgroundColor() {
  var colorInput = document.getElementById("colorInput").value;
  var heartIcon = document.getElementById("heartIcon");
  
  // Verificar si se ingresó un color válido
  if (/^#[0-9A-F]{6}$/i.test(colorInput)) {
    heartIcon.style.color = colorInput;
  } else {
    alert("Please enter a valid color in hexadecimal format (e.g. #ff0000).");
  }
}