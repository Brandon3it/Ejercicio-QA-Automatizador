document.addEventListener('DOMContentLoaded', () => {
  const tbody = document.getElementById('casos-ejemplo-body');
  if (!tbody) return;

  const casosEjemplo = [
    {
      id: 'TC-01',
      modulo: 'usuarios',
      historiaUsuario: 'Como usuario del sistema, quiero poder registrarme con datos válidos para acceder correctamente a la plataforma.',
      nombre: 'Crear usuario válido',
      prioridad: 'Alta',
      precondiciones: 'Usuario sin registro previo y datos válidos.',
      pasos: [
        'Preparar los datos del caso TC-01',
        'Completar el formulario de registro',
        'Guardar la información y revisar que se cree correctamente'
      ],
      resultadoEsperado: 'El registro del usuario se completa correctamente.',
      estado: 'Pendiente'
    },
    {
      id: 'TC-02',
      modulo: 'usuarios',
      historiaUsuario: 'Como usuario del sistema, quiero evitar duplicados en mi correo para mantener la integridad de mis datos.',
      nombre: 'Correo ya registrado',
      prioridad: 'Alta',
      precondiciones: 'Usuario sin registro previo y datos válidos.',
      pasos: [
        'Intentar registrar un correo que ya existe',
        'Completar el resto de los datos necesarios',
        'Guardar la información'
      ],
      resultadoEsperado: 'El sistema rechaza el registro porque el correo ya está registrado.',
      estado: 'Pendiente'
    },
    {
      id: 'TC-08',
      modulo: 'solicitudes',
      historiaUsuario: 'Como gestor del sistema, quiero crear solicitudes válidas para publicar vacantes con la información correcta.',
      nombre: 'Crear solicitud válida',
      prioridad: 'Alta',
      precondiciones: 'Usuario existente en el sistema y permisos habilitados.',
      pasos: [
        'Preparar los datos de la solicitud',
        'Completar la información requerida',
        'Guardar la solicitud y revisar el resultado'
      ],
      resultadoEsperado: 'La solicitud se guarda correctamente con toda la información requerida.',
      estado: 'Pendiente'
    },
    {
      id: 'TC-09',
      modulo: 'solicitudes',
      historiaUsuario: 'Como sistema, quiero validar la relación con el usuario para evitar solicitudes no asociadas a un registro real.',
      nombre: 'Solicitud con usuario no válido',
      prioridad: 'Alta',
      precondiciones: 'Usuario existente en el sistema y permisos habilitados.',
      pasos: [
        'Intentar asociar una solicitud a un usuario inexistente',
        'Guardar la información',
        'Revisar el comportamiento del sistema'
      ],
      resultadoEsperado: 'El sistema rechaza la operación porque la relación con el usuario no es válida.',
      estado: 'Pendiente'
    }
  ];

  tbody.innerHTML = casosEjemplo.map((caso) => `
    <tr class="border-t border-slate-200 align-top">
      <td class="p-3">${caso.id}</td>
      <td class="p-3">${caso.modulo}</td>
      <td class="p-3">${caso.historiaUsuario}</td>
      <td class="p-3">${caso.nombre}</td>
      <td class="p-3">${caso.prioridad}</td>
      <td class="p-3">${caso.precondiciones}</td>
      <td class="p-3">${caso.pasos.join('<br>')}</td>
      <td class="p-3">${caso.resultadoEsperado}</td>
      <td class="p-3">${caso.estado}</td>
    </tr>
  `).join('');
});
