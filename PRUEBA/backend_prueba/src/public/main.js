
//Form
const noteForm = document.querySelector('#noteForm');

const title = document.querySelector('#title');
const description = document.querySelector('#description');
const codigo = document.querySelector('#codigo');
const foto = document.querySelector('#foto');
const precio = document.querySelector('#precio');
const stock = document.querySelector('#stock');


noteForm.addEventListener('submit', e => {
    e.preventDefault();//Para que no se reinicie la pagina. 
    
    if(savedId){
        updateNote(savedId, title.value, description.value, codigo.value, foto.value, precio.value, stock.value);//si existe lo actualizamos con el id
    }else{
        saveNote(title.value, description.value, codigo.value, foto.value, precio.value, stock.value); //caso contrario lo guardo
    }    

    title.value = "";
    description.value = "";
    codigo.value = "";
    foto.value = "";
    precio.value = "";
    stock.value = "";

    title.focus();
    
});