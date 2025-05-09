const alfabeto = ["A","B","C","D","E", "F","G","H","L", "O", ];
const inputOriginal = document.getElementById('input-original');
const cifrador = document.getElementById('cifrador');
const resultado = document.getElementById('resultado');
const rango = document.getElementById('rango');


const shifMessage = ()=>{
    const wordArray = [...inputOriginal.value.toUpperCase()];
    alert(wordArray);
}

const submit =e =>{
    e.preventDefault();
    resultado.innerHTML ='';
    shifMessage();
}


cifrador.onsubmit = submit