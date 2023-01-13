//capturar formulario
const form = document.querySelector('.form');
form.addEventListener('submit', (event) =>{
    event.preventDefault();
    //array hijos de form

    const keyForm = Object.values(form);

    //array elementos con dos propiedades

    const valoresInputs = ValuesForm.map(valueInput =>{
        idTarget: valueInput.id; 
        valueTarget: valueInput.value
    })

})