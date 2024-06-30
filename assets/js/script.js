/*Elementos necesarios*/
const listadoDeTareas = document.getElementById("lista-tareas");
const inputTarea = document.getElementById("escribir-tareas");
const btnAgregar = document.getElementById("agregar-tareas");
const cuentaTotalTareas = document.getElementById("total-tareas")
const cuentaTareasHechas = document.getElementById("tareas-realizadas")

/*Arreglo guardar tareas*/
const tareas = [];

/*Renderizar tareas en el DOM*/
function renderTareas() {
  let html = "";
  for (let tarea of tareas) {
    html += `<tr>
    <td class="punto-lista">${tarea.id}</td>
    <td class="punto-lista">${tarea.tarea}</td>
    <td><input class="input-seleccionar" type="checkbox"> <button class="btnx-eliminar" onclick="borrar(${tarea.id})">❌</button></td>
    </tr>`;
  }

  listadoDeTareas.innerHTML = html;
  cuentaTareasHechas.textContent = `Total de tareas: ${tareas.length}`
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
