
/*Funcionamiento
1. Toma las dos primeras letras de tu apellido paterno.
2. Añade la primera letra de tu apellido materno.
3. Continúa con la primera letra de tu nombre.
4. Luego, agrega los últimos dos dígitos de tu año de nacimiento.
5. A continuación, incluye los dos dígitos de tu mes de nacimiento.
6. Finalmente, completa con los dos dígitos de tu día de nacimiento.*/

//Funcion para calcular el RFC

function Calcular_RFC(){
    //Obtenemos las variables de entrada para calcular el rfc
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("Apellidos").value;
    let fechaNacimiento = document.getElementById("fecha_Nacimiento").value;



    //Separamos los apellidos
    let apellidoPaterno = "";
    let apellidoMaterno = "";

    let espacio = false;//variable para saber el espacio entre los dos apellidos, lo iniciamos como false

    //recorremos nuestra variable apellidos

    for (let i = 0; i < apellido.length; i++) {
        if (apellido[i] === " " && !espacio) {
            espacio = true;
        } else if (!espacio) {
            apellidoPaterno += apellido[i];
        } else {
            apellidoMaterno += apellido[i];
        }
    }

    //1. Toma las dos primeras letras de tu apellido paterno.
    let dosLetrasApellido_P = apellidoPaterno[0] + apellidoPaterno[1];


    //2.Añade la primera letra de tu apellido materno.

    let primerLetraApellido_M = apellidoMaterno[0];

    //3. Continúa con la primera letra de tu nombre.
    let primerLetra_N = nombre[0];


    //Siguiendo el formato AAAA-MM-DD = 0123 45 6789
    // 4. Luego, agrega los últimos dos dígitos de tu año de nacimiento.

    let dosDigitos_AN = fechaNacimiento[2] + fechaNacimiento[3];

    // 5. A continuación, incluye los dos dígitos de tu mes de nacimiento.

    let dosDigitos_Mes = fechaNacimiento[5] + fechaNacimiento[6];


    // 6. Finalmente, completa con los dos dígitos de tu día de nacimiento.

    let dosDigitos_Dia = fechaNacimiento[8] + fechaNacimiento[9];

    //Variable para almacenar el rfc
    let RFC = dosLetrasApellido_P + primerLetraApellido_M + primerLetra_N + dosDigitos_AN + dosDigitos_Mes + dosDigitos_Dia;

    document.getElementById("textoRFC").textContent = "Hola " + nombre + " tu RFC es: " + RFC;
    alert("RFC calculado");
    limpiarCampos()
}


// Función para calcular el salario neto mensual
function Calcular_SalarioNetoM(){
    // Obtiene el valor del sueldo bruto ingresado en el campo "Sueldo" y lo convierte a un número
    let sueldoBruto = Number(document.getElementById("Sueldo").value);

    // Calculo del ISR mensual usando la función calcularISR
    let isrMensual = calcularISR(sueldoBruto);

    // Calculo del salario neto mensual restando el ISR mensual al sueldo bruto
    let sueldoNetoMensual = sueldoBruto - isrMensual;

    // Se imprime el resultado del salario neto mensual en el elemento con id "resultadoMensual"
    document.getElementById("resultadoMensual").textContent = "El Salario Neto Mensual es: $" + sueldoNetoMensual.toFixed(2);

    // Muestra una alerta indicando que el salario neto mensual ha sido calculado
    alert("Salario Neto Mensual Calculado");
    limpiarCampos()
}

// Función para calcular el salario neto anual
function Calcular_SalarioNetoA(){
    // Obtiene el valor del sueldo bruto ingresado en el campo "Sueldo" y lo convierte a un número
    let sueldoBruto = Number(document.getElementById("Sueldo").value);

    // Calculo del ISR anual, suponiendo que el ISR mensual es el mismo cada mes
    let isrAnual = calcularISR(sueldoBruto) * 12;

    // Calculo del salario neto anual multiplicando el sueldo bruto por 12 y restando el ISR anual
    let salarioNetoAnual = sueldoBruto * 12 - isrAnual;

    // Se imprime el resultado del salario neto anual en el elemento con id "resultadoAnual"
    document.getElementById("resultadoAnual").textContent = "El Salario Neto Anual es: $" + salarioNetoAnual.toFixed(2);

    // Muestra una alerta indicando que el salario neto anual ha sido calculado
    alert("Salario Neto Anual Calculado");
    limpiarCampos()
}

// Función para calcular el ISR mensual basado en el sueldo bruto
function calcularISR(sueldo){
    // Tablas simplificadas de ISR para calcular el monto según el rango de sueldo
    if (sueldo <= 746.04) {
        return sueldo * 0.0192; // Tasa de ISR para sueldos hasta 746.04
    } else if (sueldo <= 6332.05) {
        return 14.32 + (sueldo - 746.04) * 0.064; // Cálculo ISR para sueldos entre 746.05 y 6332.05
    } else if (sueldo <= 11128.01) {
        return 371.83 + (sueldo - 6332.05) * 0.1088; // Cálculo ISR para sueldos entre 6332.06 y 11128.01
    } else if (sueldo <= 12935.82) {
        return 893.63 + (sueldo - 11128.01) * 0.16; // Cálculo ISR para sueldos entre 11128.02 y 12935.82
    } else if (sueldo <= 15487.71) {
        return 1182.88 + (sueldo - 12935.82) * 0.1792; // Cálculo ISR para sueldos entre 12935.83 y 15487.71
    } else if (sueldo <= 31236.49) {
        return 1640.18 + (sueldo - 15487.71) * 0.2136; // Cálculo ISR para sueldos entre 15487.72 y 31236.49
    } else if (sueldo <= 49233.00) {
        return 5004.12 + (sueldo - 31236.49) * 0.2352; // Cálculo ISR para sueldos entre 31236.50 y 49233.00
    } else if (sueldo <= 93993.90) {
        return 9236.89 + (sueldo - 49233.00) * 0.30; // Cálculo ISR para sueldos entre 49233.01 y 93993.90
    } else if (sueldo <= 125325.20) {
        return 22665.17 + (sueldo - 93993.90) * 0.32; // Cálculo ISR para sueldos entre 93993.91 y 125325.20
    } else {
        return 32691.18 + (sueldo - 125325.20) * 0.34; // Cálculo ISR para sueldos mayores a 125325.20
    }


}


function limpiarCampos() {

    document.getElementById('nombre').value = '';
    document.getElementById('Segundo_Nombre').value = '';
    document.getElementById('Apellidos').value = '';
    document.getElementById('fecha_Nacimiento').value = '';
    document.getElementById('Sueldo').value = '';
}
