/*Elementos necesarios*/
const listadoDeTareas = document.getElementById("lista-tareas");
const inputTarea = document.getElementById("escribir-tareas");
const btnAgregar = document.getElementById("agregar-tareas");

/*Arreglo guardar tareas*/
const tareas = [];

/*Renderizar tareas en el DOM*/
function renderTareas() {
  let html = "";
  for (let tarea of tareas) {
    html += `<li class="punto-lista">${tarea.id} ${tarea.tarea} <input class="input-seleccionar" type="checkbox"> <button class="btnx-eliminar" onclick="borrar(${tarea.id})">❌</button></li>`;
  }

  listadoDeTareas.innerHTML = html;
}

/*Función borrar id tareas*/
function borrar(id) {
  const index = tareas.findIndex((ele) => ele.id == id);
  if (index !== -1) {
    tareas.splice(index, 1);
    renderTareas();
  }
}

/*Para agregar una tarea */
btnAgregar.addEventListener("click", () => {
  const nuevaTarea = inputTarea.value;
  tareas.push({
    id: Date.now(),
    tarea: nuevaTarea,
  }); /*Agregar un objeto con el ID-> Date.now() genera el id con la fecha*/
  inputTarea.value = ""; /*Vaciar Input después de escribir*/
  renderTareas();
});
