const hamburguesa = document.querySelector('#hamburguesa');
const exit = document.querySelector('#exit');
const menu = document.querySelector('#menu');
const login = document.querySelector('.login');
const crearCuenta = document.querySelector('.crear-cuenta');

const idioma = document.querySelector('.idioma');
const idiomaOpciones = document.querySelector('.idioma-opciones');





console.log(hamburguesa);
console.log(menu);
console.log(idiomaOpciones); 


hamburguesa.addEventListener('click', ()=>{ 
	menu.classList.toggle('mostrarMenu')
})

exit.addEventListener('click', ()=>{ 
	menu.classList.toggle('mostrarMenu')
})

login.addEventListener('click', ()=>{ 
	crearCuenta.classList.toggle('mostrarCrearCuenta')
})
idioma.addEventListener('click', ()=>{ 
	idiomaOpciones.classList.toggle('mostrar')
})




