const Wesen = [
  {
    nombre: "Cracher-Mortel",
    imagen: "https://static.wikia.nocookie.net/grimm/images/a/ac/221-Cracher-Mortel_spitting2.png/revision/latest/scale-to-width-down/250?cb=20130515190017",
    tipo: "Pez globo",
    peligrosidad: "Muy peligroso",
    descripcion: "Criatura con aspecto pez globo con una gran cabeza redonda cubierta de cortas espinas las cuales simulan el cabello tanto en el cuero cabelludo como el vello facial.",
    notas: "Son conocidos por su capacidad de escupir tetradotoxina por la boca que convierte a sus victimas en zombis."
  },
  {
    nombre: "El cuegle",
    imagen: "https://static.wikia.nocookie.net/grimm/images/4/4e/604-Isidoro_Malpica_woged.png/revision/latest/scale-to-width-down/171?cb=20170211043206",
    tipo: "Monstruo",
    peligrosidad: "Muy peligroso",
    descripcion: "Criatura de piel grisacea con garras amarillas, afilados dientes y un tercer ojo que les diferencia del resto de wesens.",
    notas: "Estas criaturas comen bebes con el unico fin de aliviar sus fuertes migrañas y para pontencialmente salvar vidas de inocentes."
  },
  {
    nombre: "Blutbad",
    imagen: "https://static.wikia.nocookie.net/non-aliencreatures/images/8/8d/Blutbad2.jpg/revision/latest?cb=20210928225737",
    tipo: "Lobo",
    peligrosidad: "Neutral",
    descripcion: "Los Blutbaden son criaturas que se asemejan a lobos y tienen una fuerte afinidad por la carne cruda.",
    notas: "Tienen una rivalidad que se extiende a lo largo de los siglos con los Bauerschwein."
  },
  {
    nombre: "Fuchsbau",
    imagen: "https://static.wikia.nocookie.net/grimm-nbc/images/9/9b/221Fuchsbau.png/revision/latest?cb=20160601121818",
    tipo: "Zorro",
    peligrosidad: "Neutral",
    descripcion: "Sus rasgos faciales siguen siendo relativamente el mismo, salvo por convertirse en algo más acentuada. También ganan afilados dientes caninos, orejas de zorro como ojos de zorro similares, y una nariz negra de zorro.",
    notas: "Por lo general, prefieren evitar la confrontación; sin embargo, van a luchar cuando se ven obligados a hacerlo y no bajará hasta que, al menos, tener éxito en mordiendo algo de sus adversarios."
  },
  {
    nombre: "Hexenbiest",
    imagen: "https://i.pinimg.com/originals/d4/71/63/d471630b587f4cac8088cb64e28f9c8e.png",
    tipo: "Bestia",
    peligrosidad: "Muy peligroso",
    descripcion: "Al transformarse, su apariencia continua con características humanas, pero más parecidas a las de un cadáver. Su piel se arruga y cambia a un color gris o café, sus dientes se deforman, casi pareciendo podridos.",
    notas: "Las Hexenbiest sirven a la realeza; son criaturas extremadamente leales, pero sólo son leales a quienes sirven, y con los demás son traicioneras y manipuladoras, incluso a su propia especie."
  },
  {
    nombre: "Zauberbiest",
    imagen:"https://qph.cf2.quoracdn.net/main-qimg-d5a404439448b5858c36f0de2e64e525-pjlq",
    tipo: "Bestia",
    peligrosidad: "Muy peligroso",
    descripcion: "Son la version masculina de las Hexenbiest y tienen un aspecto similar a las de una bestia.",
    notas: "Son criaturas extremedamente sadicas cuando se les traiciona."
  },
  {
    nombre: "Leporem Venator",
    imagen: "https://static.wikia.nocookie.net/grimm/images/5/54/414-promo8_cropped.png/revision/latest/scale-to-width-down/285?cb=20150323221553",
    tipo: "Zorro",
    peligrosidad: "Peligroso",
    descripcion: " Wesen tipo perro cazador que aparecio en El gato y el ratón. Se caracterizan por ser unos excelentes rastreadores pudiendo rastrear a sus presas a kilometros.",
    notas: "Usan los pies de sus victimas para unas practicas llamadas Spedigberendess."
  },
  {
    nombre: "Hundjäger",
    imagen: "https://i.pinimg.com/originals/03/a9/2a/03a92af800c13d2c35586902092698bf.png",
    tipo: "Perro",
    peligrosidad: "Peligroso",
    descripcion: "El Hundjäger le crecen pieles peludas de perro sobre todo el cuerpo con algunas manchas negras, orejas largas caninas puntiagudas, un hocico de perro , garras y dientes afilados.",
    notas: "Son excelentes rastreadores , tienen un olfato muy desarrollado como Blutbaden, ya que pueden rastrear a una persona a una distancia considerable lo cual los hace buenos para las persecuciones."
  },
  {
    nombre: "Mauvais Dentes",
    imagen: "https://static.wikia.nocookie.net/non-aliencreatures/images/a/a2/Lucien_Petrovitch.png/revision/latest?cb=20170404214721",
    tipo: "Tigre",
    peligrosidad: "Muy peligroso",
    descripcion: "Cuando un Mauvais Dentes se transforma, crece piel gris sobre su cabeza y brazos, se desarrollan las rayas enormes y sus dientes capaces de dejar heridas punzantes en sus víctimas hasta de una pulgada de diámetro. Son usados en la realeza por ser maquinas crueles y sádicas de matar ya que el Mauvais Dentes no le importa cuando inocentes o involucrados tenga que matar o torturar para lograr su objetivo.",
    notas: "Tienden a atraer y jugar con sus victimas como comúnmente hacen los felinos."
  },
  {
    nombre: "Skalengeck",
    imagen: "https://static.wikia.nocookie.net/grimm/images/1/1d/00_skalengeck-concept_3a.jpg/revision/latest/scale-to-width-down/250?cb=20190121111125",
    descripcion: "Los Skalengeck son wesen con escamas y habilidades camaleónicas que les permiten mezclarse con su entorno.",
    peligrosidad: "Peligroso",
    descripcion: "Tienen apariencia de lagarto, con escamas y lengua larga. No son muy brillantes y tienden a comportarse como pandilleros. Representan el estereotipo de un drogadicto y son comúnmente adictos a una sustancia llamada jota llegando a ser muy agresivos bajo la influencia de ésta.",
    notas: "Disfrutan del gas pimienta."
  }
];
  
// Función para mostrar la tabla de Wesen de la parte izquierda de la página

function indiceWesen() {
  const ul = document.createElement('ul');

  Wesen.forEach((objeto, index) => {
    const li = document.createElement('li');
    const imagen = document.createElement('img');
    const nombre = document.createTextNode(objeto.nombre);

    // Agrega un evento onclick que llama a la función crearTablaWesen con el índice
    li.onclick = () => crearTablaWesen(index);

    imagen.src = objeto.imagen;
    imagen.alt = objeto.nombre;
    li.appendChild(imagen);
    li.appendChild(nombre);
    ul.appendChild(li);
  });

  document.getElementById("divWesen").appendChild(ul);
}

function borrarIndice() {
  var div = document.getElementById("divWesen");
  // Guarda la imagen en una variable
  var imagen = document.getElementById("imagen");

  // Limpia el contenido del índice
  div.innerHTML = "";
  indiceWesen();

  // Vuelve a agregar la imagen al div
  if (imagen) {
    div.appendChild(imagen);
  }
}

// Imprime la tabla de Wesen en la parte derecha de la página

function crearTablaWesen(index) {

  borrarContenidoDiv("divContenido");

// Obtener el elemento de la página donde se mostrará la tabla
const tablaContainer = document.getElementById("divContenido");

// Crear la tabla
const table = document.createElement("table");

// Crear la fila de encabezado
const headerRow = document.createElement("tr");
const headers = ["", "Nombre", "Tipo", "Peligrosidad", "Descripción", "Notas"];

headers.forEach(headerText => {
  const headerCell = document.createElement("th");
  headerCell.textContent = headerText;
  headerRow.appendChild(headerCell);
});

table.appendChild(headerRow);

// Obtener el objeto del array en la posición especificada
const wesen = Wesen[index];
if (wesen) {
  // Crear la fila de datos solo para el objeto especificado
  const row = document.createElement("tr");

  // Crear las celdas de datos
  
  const imagenCell = document.createElement("td");
  const imagen = document.createElement("img");
  imagen.src = wesen.imagen;
  imagenCell.appendChild(imagen);
  row.appendChild(imagenCell);

  const nombreCell = document.createElement("td");
  nombreCell.textContent = wesen.nombre;
  row.appendChild(nombreCell);

  const tipoCell = document.createElement("td");
  tipoCell.textContent = wesen.tipo;
  row.appendChild(tipoCell);

  const peligrosidadCell = document.createElement("td");
  peligrosidadCell.textContent = wesen.peligrosidad;
  row.appendChild(peligrosidadCell);

  const descripcionCell = document.createElement("td");
  descripcionCell.textContent = wesen.descripcion;
  row.appendChild(descripcionCell);

  const notasCell = document.createElement("td");
  notasCell.textContent = wesen.notas;
  row.appendChild(notasCell);

  table.appendChild(row);
}

tablaContainer.appendChild(table);

// Crear el botón para mostrar el detalle y añadirlo al final de la tabla

var botonMostrarDetalle = document.createElement("button");
botonMostrarDetalle.onclick = function() {
  borrarContenidoDiv("divContenido");
  editarWesen(index);
};
botonMostrarDetalle.innerHTML = "Modificar";
var botonBorrarWesen = document.createElement("button");
botonBorrarWesen.onclick = function() {
  Wesen.splice(index, 1);
    borrarIndice();
    borrarContenidoDiv("divContenido");
    crearTablaWesen(0);
}
botonBorrarWesen.innerHTML = "Borrar";

table.appendChild(botonMostrarDetalle);
table.appendChild(botonBorrarWesen);
}



// Deja en blanco el div de contenido 
function borrarContenidoDiv(divContenido) {
  var div = document.getElementById(divContenido);

  div.innerHTML = "";
}




function crearFormulario(divContenido) {

  
  borrarContenidoDiv("divContenido");

  var div = document.getElementById("divContenido");

  var form = document.createElement("form");

  var nombreLabel = document.createElement("label");
  nombreLabel.innerHTML = "Nombre: ";
  var nombreInput = document.createElement("input");
  nombreInput.type = "text";
  nombreInput.required = true;

  var imagenLabel = document.createElement("label");
  imagenLabel.innerHTML = "Imagen URL: ";
  var imagenInput = document.createElement("input");
  imagenInput.type = "url";
  imagenInput.required = true;

  var descripcionLabel = document.createElement("label");
  descripcionLabel.innerHTML = "Descripción: ";
  var descripcionInput = document.createElement("textarea");
  descripcionInput.required = true;

  var peligrosidadLabel = document.createElement("label");
  peligrosidadLabel.innerHTML = "Peligrosidad: ";
  var peligrosidadInput = document.createElement("select");
  peligrosidadInput.required = true;
  var option1 = document.createElement("option");
  option1.value = "baja";
  option1.innerHTML = "Baja";
  var option2 = document.createElement("option");
  option2.value = "media";
  option2.innerHTML = "Media";
  var option3 = document.createElement("option");
  option3.value = "alta";
  option3.innerHTML = "Alta";
  peligrosidadInput.appendChild(option1);
  peligrosidadInput.appendChild(option2);
  peligrosidadInput.appendChild(option3);

  var notasLabel = document.createElement("label");
  notasLabel.innerHTML = "Notas: ";
  var notasInput = document.createElement("textarea");
  notasInput.required = true;

  var submitButton = document.createElement("input");
  submitButton.type = "submit";
  submitButton.value = "Enviar";

  form.appendChild(nombreLabel);
  form.appendChild(nombreInput);
  form.appendChild(document.createElement("br"));
  form.appendChild(imagenLabel);
  form.appendChild(imagenInput);
  form.appendChild(document.createElement("br"));
  form.appendChild(peligrosidadLabel);
  form.appendChild(peligrosidadInput);
  form.appendChild(document.createElement("br"));
  form.appendChild(descripcionLabel);
  form.appendChild(descripcionInput);
  form.appendChild(document.createElement("br"));
  form.appendChild(notasLabel);
  form.appendChild(notasInput);
  form.appendChild(document.createElement("br"));
  form.appendChild(submitButton);

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    if (nombreInput.value.trim() === "" || imagenInput.value.trim() === "" || descripcionInput.value.trim() === "" || peligrosidadInput.value.trim() === "" || notasInput.value.trim() === "") {
      alert("Por favor, complete todos los campos.");
      return;
    }

    var nuevoObjeto = {
      nombre: nombreInput.value,
      imagen: imagenInput.value,
      descripcion: descripcionInput.value,
      peligrosidad: peligrosidadInput.value,
      notas: notasInput.value
    };
  

Wesen.push(nuevoObjeto);
borrarIndice();
borrarContenidoDiv("divContenido");
crearTablaWesen(0);
  });

  div.appendChild(form);
}
  

function editarWesen(index) {
  borrarContenidoDiv("divContenido");

  const wesen = Wesen[index];
  if (wesen) {
    // Crear un formulario
    var form = document.createElement("form");

    // Nombre
    var nombreLabel = document.createElement("label");
    nombreLabel.innerHTML = "Nombre: ";
    var nombreInput = document.createElement("input");
    nombreInput.type = "text";
    nombreInput.value = wesen.nombre;
    nombreInput.readOnly = true;

    // Imagen (puedes usar una URL o un campo para cargar una nueva imagen)
    var imagenLabel = document.createElement("label");
    imagenLabel.innerHTML = "Imagen URL: ";
    var imagenInput = document.createElement("input");
    imagenInput.type = "url";
    imagenInput.value = wesen.imagen;

    // Tipo
    var tipoLabel = document.createElement("label");
    tipoLabel.innerHTML = "Tipo: ";
    var tipoInput = document.createElement("input");
    tipoInput.type = "text";
    tipoInput.value = wesen.tipo;

    // Peligrosidad
    var peligrosidadLabel = document.createElement("label");
    peligrosidadLabel.innerHTML = "Peligrosidad: ";
    var peligrosidadInput = document.createElement("select");
    var opcionesPeligrosidad = ["Pacifico", "Neutral", "Peligroso", "Violento"];
    for (let opcion of opcionesPeligrosidad) {
      var option = document.createElement("option");
      option.value = opcion;
      option.text = opcion;
      peligrosidadInput.appendChild(option);
    }
    peligrosidadInput.value = wesen.peligrosidad;

    // Descripción
    var descripcionLabel = document.createElement("label");
    descripcionLabel.innerHTML = "Descripción: ";
    var descripcionInput = document.createElement("textarea");
    descripcionInput.value = wesen.descripcion;

    // Notas
    var notasLabel = document.createElement("label");
    notasLabel.innerHTML = "Notas: ";
    var notasInput = document.createElement("textarea");
    notasInput.value = wesen.notas;

    // Botón para guardar cambios
    var guardarButton = document.createElement("button");
    guardarButton.innerHTML = "Guardar Cambios";

    guardarButton.addEventListener("click", function () {
      wesen.nombre = nombreInput.value;
      wesen.imagen = imagenInput.value;
      wesen.tipo = tipoInput.value;
      wesen.peligrosidad = peligrosidadInput.value;
      wesen.descripcion = descripcionInput.value;
      wesen.notas = notasInput.value;
      crearTablaWesen(0);

    }
    
    );
    form.appendChild(nombreLabel);
    form.appendChild(nombreInput);
    form.appendChild(document.createElement("br"));
    form.appendChild(imagenLabel);
    form.appendChild(imagenInput);
    form.appendChild(document.createElement("br"));
    form.appendChild(tipoLabel);
    form.appendChild(tipoInput);
    form.appendChild(document.createElement("br"));
    form.appendChild(peligrosidadLabel);
    form.appendChild(peligrosidadInput);
    form.appendChild(document.createElement("br"));
    form.appendChild(descripcionLabel);
    form.appendChild(document.createElement("br"));
    form.appendChild(descripcionInput);
    form.appendChild(document.createElement("br"));
    form.appendChild(notasLabel);
    form.appendChild(document.createElement("br"));
    form.appendChild(notasInput);
    form.appendChild(document.createElement("br"));
    form.appendChild(guardarButton);

    var divContenido = document.getElementById("divContenido");
    divContenido.innerHTML = "";
    divContenido.appendChild(form);
}
}