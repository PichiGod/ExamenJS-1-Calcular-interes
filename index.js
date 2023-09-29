/*2- Calcular el interés que tiene una cuenta de ahorros a fin de año, sabiendo que
- La cuenta genera un interés del 15% anual, lo que equivale a 1,25% mensual
- El monto inicial se ingresa en el mes de enero y mensualmente se ingresan 250,00 Bs
- El cálculo se requiere hasta el mes de diciembre
*/

//Declaracion de las variables a utilizar
var capital = 0; //3000 segun el enunciado, 250 * 12 = 3000
var i = 15; // Interes anual
var t = 12; //Cantidad de meses
var im = 1.25; // Interes mensual

document.getElementById('body').innerHTML += `<h1>Ejercicio de Calculo de Interes</h1>
<h3>- Realizado por José Duarte</h3>   
<h4>Iniciar la actividad</h4>
<button onclick="proceso()">Iniciar</button>`;

// Declaracion de la operacion a ejecutar
function proceso(){
    do{
        capital = prompt("Ingrese su capital mensual");  
        capital = parseInt(capital)
    }
    while(isNaN(capital));

    if (capital <= 0){
        document.getElementById('resp').innerHTML = `
            <h3>ERROR: La cantidad ingresada es invalida</h3>`; 
        // console.log("Yo estoy activo");
    }else{
        var interesimple = capital * im * t;
        document.getElementById("resp").innerHTML = `
            <h1> Tomando en cuenta el interes que tiene su cuenta de ahorros sabiendo que: </h1>
            <p>- La cuenta genera un interés del 15% anual, lo que equivale a 1,25% mensual </p>
            <p>- La capital mensual ingresada fue: ` + (capital) + `Bs</p>
            <p>- El cálculo se realiza hasta el mes de diciembre: `+ (capital)  +` * 12 = `+ (capital)*12 + `Bs </p>
            <p>- El interes simple que se obtuvo hasta el mes de diciembre es de: ` + (interesimple) + `Bs </p>
        `
    }
}