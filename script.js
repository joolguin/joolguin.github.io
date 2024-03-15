function changeBackgroundColor() {
    var colorInput = document.getElementById("colorInput").value;
    var changeableSection = document.getElementById("changeableSection");
    
    // Verificar si se ingresó un color válido
    if (/^#[0-9A-F]{6}$/i.test(colorInput)) {
      changeableSection.style.backgroundColor = colorInput;
    } else {
      alert("Please enter a valid color in hexadecimal format (e.g. #ff0000).");
    }
  }
  