var kodersDb = [{
    name: "Eddy Alexander",
    lastName: "Ruiz Álvarez",
    deliveredPractices: 9,
    totalAssistance: 22
}, {
    name: "Iván",
    lastName: "Pedraza Sanchéz",
    deliveredPractices: 12,
    totalAssistance: 25
}, {
    name: "Mauricio",
    lastName: "López Suarez",
    deliveredPractices: 13,
    totalAssistance: 18
}, {
    name: "Xabier Enrique",
    lastName: "Hernández Hernández",
    deliveredPractices: 8,
    totalAssistance: 22
}, {
    name: "Raquel Monserrat",
    lastName: "Cruz Torres",
    deliveredPractices: 15,
    totalAssistance: 19
}, {
    name: "Etnar Uriel",
    lastName: "Sánchez González",
    deliveredPractices: 3,
    totalAssistance: 15
}, {
    name: "Gabriela Elvira",
    lastName: "Camarillo Luna",
    deliveredPractices: 10,
    totalAssistance: 18
}, {
    name: "Ana Marcela",
    lastName: "Casasola López",
    deliveredPractices: 15,
    totalAssistance: 24
}, {
    name: "Evelyn Fernanda",
    lastName: "Palacios Vera",
    deliveredPractices: 8,
    totalAssistance: 18
}, {
    name: "Víctor Octavio",
    lastName: "Torres Jimenez",
    deliveredPractices: 11,
    totalAssistance: 16
}]

function getKodersWithLessDeliveredPractices(arrKoders) { //quitarle los parentesis y hacerlo en una sola linea 
    let filteredKoders = arrKoders.filter((koder) => {
        return koder.deliveredPractices < 10
    })
    return filteredKoders
}
function getKodersWithLessAssistence(arrKoders) {
    let filteredKoders = arrKoders.filter((koder) => {
        return koder.totalAssistance < 20
    })
    return filteredKoders
}
function getDeliveredPracticesAverage(arrKoders) {
    let totalDeliveredPractices = arrKoders.reduce((total, koder) => {
        return total + koder.deliveredPractices
    }, 0)
    let deliveredPracticesAverage = totalDeliveredPractices / arrKoders.length
    return deliveredPracticesAverage
}
function getAssistenceAverage(arrKoders) {
    let totalAssistance = arrKoders.reduce((total, koder) => {
        return total + koder.totalAssistance
    }, 0)
    let assistenceAverage = totalAssistance / arrKoders.length
    return assistenceAverage
}

//-5




/*Teniendo el array kodersDb, realizar las siguientes operaciones:
1.- Obtener a todos los koders cuyas practicas entregadas (deliveredPractices) sea menor a 10
2.- Obtener a todos los koders cuya asistencia (totalAssistance) sea menor a 20
3.- Obtener el promedio general de prácticas entregadas
4.- Obtener el promedio general de asistencias
5.- En el elemento con el id "practices-container" insertar una fila por cada koder obtenido en el paso 1, debería tener la siguiente estructura:
<tr>
    <td>{número de koder}</td>
    <td>{nombre completo del koder}</td>
    <td>{prácticas del koder}</td>
</tr>
kodersWithLessDeliveredPractices.forEach((koder, index) => {
        practicesContainer.innerHTML = `<tr>
    <td>${index}</td>
    <td>${koder.name} ${koder.lastName}</td>
    <td>${koder.deliveredPractices}</td>
 </tr>`
})
/*var practicesContainer = document.getElementById("practices-container")
var kodersWithLessDeliveredPractices = getKodersWithLessDeliveredPractices(kodersDb)
creattext node
create element
byid
apendchild
-- creamos  el tr let koderRow=document.createlement ("tr")


6.- En el elemento con el id "assistances-container" insertar una fila por cada koder obtenido en el paso 2, debería tener la siguiente estructura:
<tr>
    <td>{número de koder}</td>
    <td>{nombre completo del koder}</td>
    <td>{asistencias del koder}</td>
</tr>
7.- En el elemento con el id "practices-average", mostrar el promedio general de prácticas entregadas obtenido en el paso 3
8.- En el elemento con el id "assistance-average", mostrar el promedio general de asistencias entregadas obtenido en el paso 4

***Notas***
Recordemos que podemos acceder a alguna propiedad de un objeto y asignar su valor a una variable con la sintaxis:

    var someVar = objeto.propiedad

Podemos crear contenido dinámico insertando variables mediante la sintaxis

    ${someVar}

así que podemos crear un elemento html con contenido dinámico de la siguiente forma:

var someObject = {
    songName = "Lago en el cielo",
    author = "Gustavo Cerati"
}

var mySong = someObject.songName;
var songAuthor = someObject.author;

var someElement = document.createElement("p");
-(con esto obtenemos un elemento <p></p>)

var someText = document.createTextNode(`Mi canción es ${mySong} y el autor es ${songAuthor}`)
-(con esto obtenemos un nodo de texto que dice "Mi canción es Lago en el cielo y el autor es Gustavo Cerati")

y después podemos crear un nodo completo:

someElement.appendChild(someText)
-(con esto obtenemos <p>Mi canción es Lago en el cielo y el autor es Gustavo Cerati</p>)


Happy Hacking!!! */