const mayusculas = /[A-Z\u00C0-\u017F]/gm;
document.getElementById("copiarAlPortapapeles").style.display = "hidden";

// funcion que encripta
function f_encriptar(text) {
  if (text.match(mayusculas) != null) {
    swal("No se aceptan mayúsculas ni acentos");
  } else {
    if (text == "") {
      swal("Escriba un mensaje para encriptar");
    } else {
      var NewText = text.split("");
      for (i = 0; i < NewText.length; i++) {
        if (NewText[i] == "a") {
          NewText[i] = "ai";
        }
        if (NewText[i] == "e") {
          NewText[i] = "enter";
        }
        if (NewText[i] == "i") {
          NewText[i] = "imes";
        }
        if (NewText[i] == "o") {
          NewText[i] = "ober";
        }
        if (NewText[i] == "u") {
          NewText[i] = "ufat";
        }
      }
    }

    var Text_out = NewText.join("");
    document.getElementById("text_in").value = "";
    document.getElementById("info-text").style.visibility = "hidden";
    document.getElementById("copiarAlPortapapeles").style.visibility = "visible";
    return (document.getElementById("text_out").value = Text_out);
  }
}

// Funcion que desencripta
function f_desencriptar(text) {
  if (text.match(mayusculas) != null) {
    swal("No se aceptan mayúsculas ni acentos");
  } else {
    if (text == "") {
      swal("Necesita un mensaje para desencriptar");
    } else {
      var newText = text.toLowerCase();
      document.getElementById("text_in").value = "";

      let a = newText.replace(/ai/gm, "a");
      let e = a.replace(/enter/gm, "e");
      let i = e.replace(/imes/gm, "i");
      let o = i.replace(/ober/gm, "o");
      let u = o.replace(/ufat/gm, "u");

      document.getElementById("info-text").style.visibility = "hidden";
      document.getElementById("copiarAlPortapapeles").style.visibility =
        "visible";
      return (document.getElementById("text_out").value = u);
    }
  }
}

//funcion que copia
function copiarAlPortapapeles() {
  var TextOut = document.getElementById("text_out");
  var aux = document.createElement("input");
  aux.setAttribute("value", TextOut.value);
  document.body.appendChild(aux);
  aux.select();
  document.execCommand("copy");
  document.body.removeChild(aux);
  swal("Se copio el texto, con exito!");
}

//funcion que reestablece todo por defecto
function limpiar() {
  document.getElementById("info-text").style.visibility = "visible";
  document.getElementById("copiarAlPortapapeles").style.visibility = "hidden";
  document.getElementById("text_in").value = "";
  document.getElementById("text_out").value = "";
}
