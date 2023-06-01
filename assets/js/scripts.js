function asignarEventos() {
  var btnGuardar = document.getElementById("btnGuardar");
  btnGuardar.addEventListener("click", getInfoFromForm);
}

const getInfoFromForm = () => {
  let nombre = document.getElementById('nombre').value;
  let apellido = document.getElementById('apellido').value;
  let telefono = document.getElementById('telefono').value;
  let correo = document.getElementById('correo').value;
  let nota = document.getElementById('nota').value;
  if (nombre == '') {
    rellenoModal('nombre');
  } else if (!correo.includes('@') || !correo.includes('.')) {
    rellenoModal('correo');
  } else if (apellido == '') {
    rellenoModal('apellido');
  } else if (telefono == '') {
    rellenoModal('telefono');
  } else if (nota == '') {
    rellenoModal('nota');
  } else if (nombre != '' && apellido != '' && telefono != '' && correo.includes('@') && correo.includes('.') && nota != '') {
    const userContacto = crearUser(nombre, apellido, telefono, correo, nota);
    rellenoModal(userContacto);
  }
};
const crearUser = (nombre, apellido, telefono, correo, nota) => {
  const user = {
    'nombre': nombre,
    'apellido': apellido,
  }
  const contacto = { ...user, telefono: telefono, correo: correo, nota: nota }
  return contacto;
};
const rellenoModal = (contacto) => {
  let tituloCard = document.getElementById('tituloCard');
  let infoContacto = document.getElementById('infoContacto');
  if (contacto == 'nombre') {
    tituloCard.innerText = '';
    infoContacto.innerText = 'El campo *Nombre no puede estar vacío.';
    document.getElementById('btnLLamar').style.display = "none";
    document.getElementById('btnCorreo').style.display = "none";
  } else if (contacto == 'correo') {
    tituloCard.innerText = '';
    infoContacto.innerText = 'El campo *Correo no puede estar vacío y debes escribir un correo válido.';
    document.getElementById('btnLLamar').style.display = "none";
    document.getElementById('btnCorreo').style.display = "none";
  } else if (contacto == 'apellido') {
    tituloCard.innerText = '';
    infoContacto.innerText = 'El campo *Apellido no puede estar vacío.';
    document.getElementById('btnLLamar').style.display = "none";
    document.getElementById('btnCorreo').style.display = "none";
  } else if (contacto == 'telefono') {
    tituloCard.innerText = '';
    infoContacto.innerText = 'El campo *Teléfono no puede estar vacío.';
    document.getElementById('btnLLamar').style.display = "none";
    document.getElementById('btnCorreo').style.display = "none";
  } else if (contacto == 'nota') {
    tituloCard.innerText = '';
    infoContacto.innerText = 'El campo *Nota no puede estar vacío.';
    document.getElementById('btnLLamar').style.display = "none";
    document.getElementById('btnCorreo').style.display = "none";
  } else {
    tituloCard.innerText = 'Contacto Guardado';
    const { nombre: nombreC, apellido: apellidoC, correo: correoC, telefono: telefonoC } = contacto;
    infoContacto.innerText = `Nombre: ${nombreC} ${apellidoC} Email:${correoC} ${telefonoC}`;
    document.getElementById('btnLLamar').style.display = "block";
    document.getElementById('btnCorreo').style.display = "block";
    limpiar();
  }

};
const limpiar = () => {
  document.getElementById('nombre').value = '';
  document.getElementById('apellido').value = '';
  document.getElementById('telefono').value = '';
  document.getElementById('correo').value = '';
  document.getElementById('nota').value = '';
};