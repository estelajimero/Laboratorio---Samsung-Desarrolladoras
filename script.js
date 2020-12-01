let valueButton = document.getElementById('valoracion');
let accountButton = document.getElementById('mostrar-cuenta');
let dayButton = document.getElementById('dia');

//Valoración
valueButton.addEventListener('click', () => {
    let valorInput = document.getElementById('valor')
    alert(`Has valorado con ${valorInput.value}`);
})

//Cuenta
accountButton.addEventListener('click', () => {
    let paisCuenta = document.getElementById('pais');
    let iban = document.getElementById('iban');
    let entidad = document.getElementById('entidad');
    let sucursal = document.getElementById('sucursal');
    let dc = document.getElementById('dc');
    let valorCuenta = document.getElementById('cuenta');
    let cuentaCompleta = paisCuenta.value + iban.value + "-" + entidad.value + "-" + sucursal.value  + "-" + dc.value + "-" + valorCuenta.value;
    alert(`Le informamos que su cuenta bancaria es ${cuentaCompleta}`);  
})

//Día
dayButton.addEventListener('click', () => {
    let diaSemana = document.getElementById('dia-semana');
    diaSemana = new Date(diaSemana.value);
    let currentDay = diaSemana.getDay()
    const days = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    alert("La fecha seleccionada en el elemento fecha es un" + " " + days[currentDay]);
}) 
