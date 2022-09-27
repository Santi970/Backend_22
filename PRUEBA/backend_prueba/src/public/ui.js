// En este archivo tenemos funciones para pintar, sacar, añadir etc en la pantalla 

const notesList = document.querySelector('#notes')

//Esta constante guarda la nota que he seleccionado. 
let savedId = "";

//solo retorna un elemento div con todos sus eventos interfaz etc... 
const noteUI = note => {

    const div = document.createElement('div')

    div.innerHTML = `
    <div class="animate__animated animate__fadeInRight">
    <div class="card card-body rounded-2 mb-2" style="width: 18rem;">
        <img src="${note.foto}" class="card-img-top" alt="...">
        <div class="card-body">
            <h1 class="card-title">${note.title}</h1>
        </div>
        <div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">${note.description}</li>
            <li class="list-group-item">${note.codigo}</li>
            <li class="list-group-item">${note.precio}</li>
            <li class="list-group-item">${note.stock}</li>

        </ul>
        </iv>
        <div class="card-body">
            <button class="btn btn-danger delete" data-id="${note.id}"> Delete</button>
            <button class="btn btn-secondary update" data-id=${note.id}> Update</button>
        </div>
        </div>
     </div>
    `;

    const btnDelete = div.querySelector('.delete');
    const btnUpdate = div.querySelector('.update');

    btnDelete.addEventListener('click', () => {
        deleteNote(btnDelete.dataset.id)
    });

    btnUpdate.addEventListener('click', () =>{
        getNote(btnUpdate.dataset.id)
    });

    return div
}

//Con esta idea pinta todo el arreglo de nuevo cuando se refresca la pantalla
const renderNotes = (notes) => {
    notesList.innerHTML = "";
    notes.forEach(note => {
        notesList.append(noteUI(note))
    });
};

//crea una nueva nota
const appendNote = note => {
    notesList.append(noteUI(note))
}