// Estructuras de Datos
const Tarea = function (
	codigo,
	titulo,
	descripcion,
	fechaAlta,
	deathline,
	observaciones,
	estado = "pendiente"
) {
	return {
		codigo: codigo,
		titulo: titulo,
		descripcion: descripcion,
		fechaAlta: fechaAlta,
		deathline: deathline,
		observaciones: observaciones,
		estado: estado,
	};
};

// Almacenamiento
let AlmacenamientoTareas = [
	Tarea(
		1,
		"Terminar JS Avanzado Clase 1",
		"Clase de Pescar",
		"15/02/2022",
		"15/02/2022",
        "Ninguna",
        "en-curso"
	),
    Tarea(
        2,
        "Sacar al gato",
        "Sacarlo a pasear",
        "15/02/2022",
        "16/02/2022",
        "Ya el gato me mira raro"
    )
];


 //Operaciones

const AgregarTarea = function (tarea) {
    AlmacenamientoTareas.push(tarea);
};

const EditarTarea = function (tarea) {
    AlmacenamientoTareas = AlmacenamientoTareas.map(function(item){
        return item.codigo == tarea.codigo ? tarea : item;
    });
};

const BorrarTarea = function (codigo) {
    AlmacenamientoTareas = AlmacenamientoTareas.filter(function(item){
        return item.codigo !== codigo;
    });
};

const ReporteTodasTareas = function () {
    return AlmacenamientoTareas;
};

const ReporteTareasEnCurso = function () {
    return AlmacenamientoTareas.filter(function(item){
        return item.estado == 'en-curso';
    });
};

const ReporteTareasPendientes = function () {
    return AlmacenamientoTareas.filter(function(item){
        return item.estado == 'pendiente';
    });
};

const ReproteTareasTerminadas = function () {
    return AlmacenamientoTareas.filter(function(item){
        return item.estado == 'terminada';
    });
};