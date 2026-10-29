document.addEventListener('DOMContentLoaded', async () => {
  const container = document.getElementById('casos-prueba-container');
  const exportCsvButton = document.getElementById('export-csv');
  const exportJsonButton = document.getElementById('export-json');
  if (!container) return;

  let currentData = null;

  const downloadFile = (content, filename, type) => {
    const blob = new Blob([content], { type });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  };

  const buildPlanRows = (data) => {
    const planGroups = data.planPrueba || [];
    const caseMap = new Map((data.casos || []).map((caso) => [caso.id, caso]));
    const orderedCaseIds = planGroups.flatMap((group) => group.ids || []);

    return orderedCaseIds
      .map((id) => caseMap.get(id))
      .filter(Boolean)
      .map((caso) => ({
        id: caso.id,
        modulo: caso.epic || caso.modulo || 'General',
        historiaUsuario: caso.historiaUsuario || '',
        nombre: caso.titulo || caso.nombre || '',
        prioridad: caso.prioridad || 'Media',
        precondiciones: caso.precondiciones || '',
        pasos: (caso.pasos || '').replace(/\n/g, ' | '),
        resultadoEsperado: caso.resultadoEsperado || '',
        estado: caso.estado || 'Pendiente'
      }));
  };

  const exportCsv = () => {
    if (!currentData) return;

    const headers = ['ID', 'Módulo', 'Historia de usuario', 'Nombre', 'Prioridad', 'Precondiciones', 'Pasos', 'Resultado esperado', 'Estado'];
    const rows = buildPlanRows(currentData);
    const escapeCsv = (value) => `"${String(value ?? '').replace(/"/g, '""')}"`;

    const csvContent = [
      headers.map(escapeCsv).join(','),
      ...rows.map((row) => [
        row.id,
        row.modulo,
        row.historiaUsuario,
        row.nombre,
        row.prioridad,
        row.precondiciones,
        row.pasos,
        row.resultadoEsperado,
        row.estado
      ].map(escapeCsv).join(','))
    ].join('\n');

    downloadFile(csvContent, 'plan-pruebas.csv', 'text/csv;charset=utf-8;');
  };

  const exportJson = () => {
    if (!currentData) return;
    downloadFile(JSON.stringify(currentData, null, 2), 'plan-pruebas.json', 'application/json;charset=utf-8;');
  };

  if (exportCsvButton) exportCsvButton.addEventListener('click', exportCsv);
  if (exportJsonButton) exportJsonButton.addEventListener('click', exportJson);

  const fallbackData = {
    titulo: 'Casos de prueba - Usuarios, solicitudes y documentos',
    objetivo: 'Validar la integridad, unicidad, obligatoriedad y reglas de negocio de las tablas del sistema.',
    version: '1.0',
    planPrueba: [
      { epic: 'usuarios', grupo: 'usuarios', descripcion: 'Validaciones de creación, unicidad y campos obligatorios', ids: ['TC-01', 'TC-02', 'TC-03', 'TC-04', 'TC-05', 'TC-06', 'TC-07'] },
      { epic: 'solicitudes', grupo: 'solicitudes', descripcion: 'Validaciones de negocio y relación con usuarios', ids: ['TC-08', 'TC-09', 'TC-10', 'TC-11', 'TC-12', 'TC-13'] },
      { epic: 'documentos', grupo: 'documentos', descripcion: 'Relación con solicitudes y validación de archivos', ids: ['TC-14', 'TC-15', 'TC-16', 'TC-17'] },
      { epic: 'integridad', grupo: 'integridad', descripcion: 'Restricciones referenciales y cascade rules', ids: ['TC-18', 'TC-19', 'TC-20'] }
    ],
    casos: [
      {
        id: 'TC-01',
        epic: 'usuarios',
        modulo: 'usuarios',
        historiaUsuario: 'Como usuario del sistema, quiero poder registrarme con datos válidos para acceder correctamente a la plataforma.',
        tipo: 'Funcional',
        titulo: 'Crear usuario válido',
        tabla: 'usuarios',
        payload: { nombre_usuario: 'jgarcia' },
        resultadoEsperado: 'El registro del usuario se completa correctamente.',
        estado: 'Pendiente'
      }
    ]
  };

  const buildPrecondiciones = (caso) => {
    if (caso.precondiciones) return caso.precondiciones;
    if (caso.modulo === 'usuarios') return 'Usuario sin registro previo y datos válidos.';
    if (caso.modulo === 'solicitudes') return 'Usuario existente en el sistema y permisos habilitados.';
    if (caso.modulo === 'documentos') return 'Solicitud válida creada previamente.';
    return 'Datos base creados y restricciones del sistema vigentes.';
  };

  const buildPasos = (caso) => {
    if (caso.pasos) return caso.pasos;
    const base = `1. Preparar datos del caso ${caso.id}.\n2. Ejecutar la operación sobre la tabla ${caso.tabla || caso.modulo}.\n3. Validar la respuesta del sistema.`;
    if (caso.modulo === 'usuarios') return `${base}\n4. Confirmar que el registro se almacena o se rechaza según la validación.`;
    if (caso.modulo === 'solicitudes') return `${base}\n4. Verificar la relación con el usuario y el rango de reglas de negocio.`;
    if (caso.modulo === 'documentos') return `${base}\n4. Confirmar que el archivo se asocia correctamente o se rechaza.`;
    return `${base}\n4. Revisar la integridad referencial y el comportamiento de cascada.`;
  };

  const render = (data) => {
    currentData = data;
    const planGroups = data.planPrueba || [];
    const caseMap = new Map((data.casos || []).map((caso) => [caso.id, caso]));
    const orderedCaseIds = planGroups.flatMap((group) => group.ids || []);
    const filteredCases = orderedCaseIds.map((id) => caseMap.get(id)).filter(Boolean);

    const groups = planGroups.map((group) => `
      <div class="rounded-xl border border-slate-200 bg-slate-50 p-4">
        <h4 class="font-bold text-slate-900">${group.epic || group.grupo}</h4>
        <p class="mt-2 text-sm text-slate-600">${group.descripcion}</p>
        <div class="mt-3 flex flex-wrap gap-2">
          ${(group.ids || []).map((id) => `<span class="inline-flex items-center rounded-full bg-brand-100 text-brand-700 px-2.5 py-1 text-xs font-semibold">${id}</span>`).join('')}
        </div>
      </div>
    `).join('');

    const cases = filteredCases.map((caso) => `
      <tr class="border-t border-slate-200 align-top">
        <td class="p-3 font-semibold text-slate-900">${caso.id}</td>
        <td class="p-3">${caso.epic || caso.modulo || 'General'}</td>
        <td class="p-3">${caso.historiaUsuario || 'Como usuario del sistema, quiero validar esta funcionalidad para asegurar la calidad del proceso.'}</td>
        <td class="p-3">${caso.titulo || caso.nombre || 'Sin nombre'}</td>
        <td class="p-3"><span class="inline-flex rounded-full bg-blue-100 text-blue-700 px-2 py-1 text-xs font-semibold">${caso.prioridad || 'Media'}</span></td>
        <td class="p-3">${buildPrecondiciones(caso)}</td>
        <td class="p-3">${buildPasos(caso).replace(/\n/g, '<br>')}</td>
        <td class="p-3">${caso.resultadoEsperado}</td>
        <td class="p-3"><span class="inline-flex rounded-full bg-amber-100 text-amber-700 px-2 py-1 text-xs font-semibold">${caso.estado || 'Pendiente'}</span></td>
      </tr>
    `).join('');

    container.innerHTML = `
      <div class="mb-6 rounded-2xl border border-brand-200 bg-brand-50 p-5">
        <h4 class="text-xl font-bold text-slate-900">${data.titulo}</h4>
        <p class="mt-2 text-slate-700">${data.objetivo}</p>
        <p class="mt-3 text-sm font-medium text-brand-700">Versión: ${data.version}</p>
      </div>

      <div class="mb-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        ${groups}
      </div>

      <div class="mb-6 rounded-xl border border-slate-200 bg-slate-50 p-4">
        <p class="text-xs font-semibold uppercase tracking-wide text-slate-500">Formato de caso de prueba</p>
        <div class="mt-3 flex flex-wrap gap-2">
          ${['ID', 'Módulo', 'Historia de usuario', 'Nombre', 'Prioridad', 'Precondiciones', 'Pasos', 'Resultado esperado', 'Estado']
            .map((label) => `<span class="inline-flex items-center rounded-full bg-white border border-slate-200 px-2.5 py-1 text-xs font-semibold text-slate-700">${label}</span>`)
            .join('')}
        </div>
      </div>

      <div class="overflow-x-auto">
        <table class="min-w-full border border-slate-200 rounded-xl overflow-hidden">
          <thead class="bg-blue-50">
            <tr>
              <th class="text-left p-3 align-top">ID</th>
              <th class="text-left p-3 align-top">Módulo</th>
              <th class="text-left p-3 align-top">Historia de usuario</th>
              <th class="text-left p-3 align-top">Nombre</th>
              <th class="text-left p-3 align-top">Prioridad</th>
              <th class="text-left p-3 align-top">Precondiciones</th>
              <th class="text-left p-3 align-top">Pasos</th>
              <th class="text-left p-3 align-top">Resultado esperado</th>
              <th class="text-left p-3 align-top">Estado</th>
            </tr>
          </thead>
          <tbody class="bg-white">${cases}</tbody>
        </table>
      </div>
    `;
  };

  try {
    const response = await fetch('../test-data/casos-prueba.json');
    if (!response.ok) throw new Error('No se pudo cargar el JSON');
    const data = await response.json();
    render(data);
  } catch (error) {
    console.warn('Error al cargar el JSON de casos de prueba, usando fallback:', error);
    render(fallbackData);
  }
});
