document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('dataForm');
    const nombreInput = document.getElementById('nombre');
    const apellidoInput = document.getElementById('apellido');
    const fechaNacimientoInput = document.getElementById('fechaNacimiento');
    const dniInput = document.getElementById('dni');
    const telefonoInput = document.getElementById('telefono');
    const correoInput = document.getElementById('correo');
    const guardarButton = document.getElementById('guardar');
    const buscarDNIInput = document.getElementById('buscarDNI');
    const buscarButton = document.getElementById('buscar');
    const dataList = document.getElementById('dataList');

    // Función para agregar un elemento a la lista
    function agregarElementoLista(datos) {
        const listItem = document.createElement('li');
        listItem.textContent = `${datos.nombre} ${datos.apellido}, DNI: ${datos.dni}, Teléfono: ${datos.telefono}, Correo: ${datos.correo}, Fecha de Nacimiento: ${datos.fechaNacimiento}`;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Borrar';
        deleteButton.addEventListener('click', function() {
            localStorage.removeItem(datos.dni);
            dataList.removeChild(listItem);
        });

        listItem.appendChild(deleteButton);
        dataList.appendChild(listItem);
    }

    // Cargar datos almacenados previamente al cargar la página
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = JSON.parse(localStorage.getItem(key));
        agregarElementoLista(value);
    }

    // Agregar evento de click al botón de guardar
    guardarButton.addEventListener('click', function () {
        const nombre = nombreInput.value;
        const apellido = apellidoInput.value;
        const fechaNacimiento = fechaNacimientoInput.value;
        const dni = dniInput.value;
        const telefono = telefonoInput.value;
        const correo = correoInput.value;
        
        if (nombre && apellido && fechaNacimiento && dni && telefono && correo) {
            const datos = {
                nombre: nombre,
                apellido: apellido,
                fechaNacimiento: fechaNacimiento,
                dni: dni,
                telefono: telefono,
                correo: correo
            };
            localStorage.setItem(dni, JSON.stringify(datos));
            agregarElementoLista(datos);
            // Limpiar los campos del formulario
            nombreInput.value = '';
            apellidoInput.value = '';
            fechaNacimientoInput.value = '';
            dniInput.value = '';
            telefonoInput.value = '';
            correoInput.value = '';
        }
    });

    // Agregar evento de click al botón de buscar
    buscarButton.addEventListener('click', function () {
        const buscarDNI = buscarDNIInput.value;
        if (buscarDNI) {
            const value = JSON.parse(localStorage.getItem(buscarDNI));
            if (value && value.dni === buscarDNI) {
                alert('------------ARBITRO------------')
            } else {
                alert('No se encontraron resultados.');
            }
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const formContainer = document.getElementById('form-container');
    const appointmentsList = document.getElementById('appointments-list');

    // Función para agregar una designación de partido
    function agregarDesignacion(designacion) {
        const appointmentDiv = document.createElement('div');
        appointmentDiv.className = 'appointment';
        appointmentDiv.innerHTML = `
            <p>Equipo Local: ${designacion.equipoLocal}</p>
            <p>Equipo Visitante: ${designacion.equipoVisitante}</p>
            <p>Árbitro: ${designacion.arbitro}</p>
            <p>Tipo: ${designacion.tipo}</p>
            <p>Viaja con: ${designacion.viajaCon}</p>
            <p>Lugar: ${designacion.lugar}</p>
            <p>Hora: ${designacion.hora}</p>
            <p>Estado: ${designacion.estado}</p>
        `;
        appointmentsList.appendChild(appointmentDiv);
    }

    // Agregar evento de submit al formulario
    formContainer.addEventListener('submit', function (event) {
        event.preventDefault();
        
        const equipoLocal = event.target.equipoLocal.value;
        const equipoVisitante = event.target.equipoVisitante.value;
        const arbitro = event.target.arbitro.value;
        const tipo = event.target.tipo.value;
        const viajaCon = event.target.viajaCon.value;
        const lugar = event.target.lugar.value;
        const hora = event.target.hora.value;
        const estado = 'Pendiente'; // Estado inicial

        const nuevaDesignacion = {
            equipoLocal,
            equipoVisitante,
            arbitro,
            tipo,
            viajaCon,
            lugar,
            hora,
            estado
        };

        agregarDesignacion(nuevaDesignacion);

        // Limpiar el formulario
        event.target.reset();
    });
});
