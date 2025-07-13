const mallaData = [
  {
    semestre: 1,
    cursos: [
      { nombre: "Bases y Fundamentos I", descripcion: "Introducción a la medicina, ciencias básicas.", prereq: [] },
      { nombre: "Química", descripcion: "Curso de química general y orgánica.", prereq: [] },
      { nombre: "Psicología Médica", descripcion: "Fundamentos de psicología aplicada a la medicina.", prereq: [] },
      { nombre: "Física", descripcion: "Bases de física relevantes para ciencias médicas.", prereq: [] },
      { nombre: "Biología Molecular", descripcion: "Estudio de la biología a nivel molecular.", prereq: [] },
    ],
  },
  {
    semestre: 2,
    cursos: [
      { nombre: "Bases y Fundamentos II", descripcion: "Continuación del estudio básico en medicina.", prereq: ["Bases y Fundamentos I"] },
      { nombre: "Morfología I", descripcion: "Anatomía y estructura humana básica.", prereq: [] },
      { nombre: "Bioestadística", descripcion: "Métodos estadísticos aplicados a la salud.", prereq: [] },
      { nombre: "Antropología y Ética", descripcion: "Aspectos sociales y éticos en medicina.", prereq: [] },
      { nombre: "Formación General 1", descripcion: "Curso optativo transversal UC.", prereq: [] },
    ],
  },
  {
    semestre: 3,
    cursos: [
      { nombre: "Morfología II", descripcion: "Anatomía avanzada y técnicas de diagnóstico.", prereq: ["Morfología I"] },
      { nombre: "Inmunología y Genética", descripcion: "Estudio del sistema inmune y genética humana.", prereq: [] },
      { nombre: "Razonamiento Matemático", descripcion: "Desarrollo del pensamiento lógico y matemático.", prereq: [] },
      { nombre: "Formación General 2", descripcion: "Curso optativo transversal UC.", prereq: [] },
    ],
  },
  {
    semestre: 4,
    cursos: [
      { nombre: "Morfología III", descripcion: "Estudio avanzado de estructuras corporales.", prereq: ["Morfología II"] },
      { nombre: "Bases y Mecanismos Enfermedad I", descripcion: "Introducción a patologías y mecanismos de enfermedad.", prereq: [] },
      { nombre: "Salud Pública", descripcion: "Principios de salud colectiva y promoción.", prereq: [] },
      { nombre: "Formación General 3", descripcion: "Curso optativo transversal UC.", prereq: [] },
    ],
  },
  {
    semestre: 5,
    cursos: [
      { nombre: "Clínica I", descripcion: "Primer contacto clínico con pacientes.", prereq: ["Bases y Mecanismos Enfermedad I"] },
      { nombre: "Microbiología Médica", descripcion: "Estudio de microorganismos y su relación con la salud.", prereq: [] },
      { nombre: "ICM I", descripcion: "Integrado Ciencias Médicas I.", prereq: [] },
      { nombre: "Farmacología Médica", descripcion: "Principios básicos de medicamentos.", prereq: [] },
    ],
  },
  {
    semestre: 6,
    cursos: [
      { nombre: "Clínica II", descripcion: "Continuación de la formación clínica.", prereq: ["Clínica I"] },
      { nombre: "Bases de la Práctica Profesional", descripcion: "Introducción a la práctica médica profesional.", prereq: [] },
      { nombre: "ICM II", descripcion: "Integrado Ciencias Médicas II.", prereq: [] },
      { nombre: "ICM III", descripcion: "Integrado Ciencias Médicas III.", prereq: [] },
    ],
  },
  {
    semestre: 7,
    cursos: [
      { nombre: "Clínica III", descripcion: "Avanzado en formación clínica.", prereq: ["Clínica II"] },
      { nombre: "Neurociencias", descripcion: "Estudio del sistema nervioso.", prereq: [] },
      { nombre: "ICM IV", descripcion: "Integrado Ciencias Médicas IV.", prereq: [] },
      { nombre: "Formación General 4", descripcion: "Curso optativo transversal UC.", prereq: [] },
    ],
  },
  {
    semestre: 8,
    cursos: [
      { nombre: "Integrado Quirúrgico", descripcion: "Formación quirúrgica integrada.", prereq: [] },
      { nombre: "ICM V", descripcion: "Integrado Ciencias Médicas V.", prereq: [] },
      { nombre: "ICM VI", descripcion: "Integrado Ciencias Médicas VI.", prereq: [] },
    ],
  },
  {
    semestre: 9,
    cursos: [
      { nombre: "Pediatría y Cirugía Infantil", descripcion: "Atención médica infantil.", prereq: [] },
      { nombre: "Medicina del Adulto", descripcion: "Clínica en adultos.", prereq: [] },
      { nombre: "Obstetricia y Ginecología", descripcion: "Salud de la mujer.", prereq: [] },
    ],
  },
  {
    semestre: 10,
    cursos: [
      { nombre: "Cirugía", descripcion: "Formación en técnicas quirúrgicas.", prereq: [] },
      { nombre: "Neuropsiquiatría Clínica", descripcion: "Psiquiatría y neurología clínica.", prereq: [] },
      { nombre: "Urgencias", descripcion: "Manejo de urgencias médicas.", prereq: [] },
      { nombre: "Dermatología", descripcion: "Estudio de enfermedades de la piel.", prereq: [] },
      { nombre: "Oftalmología", descripcion: "Salud visual y enfermedades oculares.", prereq: [] },
      { nombre: "Otorrinolaringología", descripcion: "Estudio de oído, nariz y garganta.", prereq: [] },
    ],
  },
  {
    semestre: 11,
    cursos: [
      { nombre: "Internado Medicina Interna", descripcion: "Práctica clínica avanzada en medicina interna.", prereq: [] },
      { nombre: "Internado Pediatría", descripcion: "Práctica clínica avanzada en pediatría.", prereq: [] },
      { nombre: "Internado Obstetricia", descripcion: "Práctica clínica avanzada en obstetricia.", prereq: [] },
    ],
  },
  {
    semestre: 12,
    cursos: [
      { nombre: "Medicina Familiar", descripcion: "Práctica y teoría en medicina familiar.", prereq: [] },
      { nombre: "Internado Electivo", descripcion: "Práctica electiva en área de interés.", prereq: [] },
      { nombre: "Profundización", descripcion: "Cursos para profundización académica.", prereq: [] },
    ],
  },
];

const malla = document.getElementById('malla');
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const btnToggleComplete = document.getElementById('btnToggleComplete');
const modalClose = document.getElementById('modalClose');
const filterSelect = document.getElementById('filterSelect');
const resetBtn = document.getElementById('resetBtn');
const exportBtn = document.getElementById('exportBtn');
const progressBar = document.getElementById('progressBar');
const progressText = document.getElementById('progressText');

let currentFilter = 'all';

function getAllCourses() {
  return mallaData.flatMap(s => s.cursos);
}

function countCompleted() {
  return getAllCourses().filter(c => localStorage.getItem(c.nombre) === 'completado').length;
}

function updateProgressBar() {
  const total = getAllCourses().length;
  const done = countCompleted();
  const percent = total === 0 ? 0 : Math.round((done / total) * 100);
  progressBar.style.width = percent + '%';
  progressText.textContent = `Progreso: ${percent}% (${done} de ${total})`;
}

function renderMalla() {
  malla.innerHTML = '';
  mallaData.forEach(({ semestre, cursos }) => {
    const divSem = document.createElement('div');
    divSem.classList.add('semestre');
    divSem.style.gridColumn = semestre;

    const h2 = document.createElement('h2');
    h2.textContent = `Semestre ${semestre}`;
    divSem.appendChild(h2);

    cursos.forEach(curso => {
      const isCompleted = localStorage.getItem(curso.nombre) === 'completado';

      if (currentFilter === 'completed' && !isCompleted) return;
      if (currentFilter === 'pending' && isCompleted) return;

      const divCurso = document.createElement('div');
      divCurso.classList.add('curso');
      divCurso.textContent = curso.nombre;
      divCurso.dataset.nombre = curso.nombre;

      if (curso.prereq.length > 0) {
        const tooltip = document.createElement('span');
        tooltip.classList.add('tooltip');
        tooltip.title = "Prerrequisitos:\n" + curso.prereq.join('\n');
        tooltip.textContent = "i";
        divCurso.appendChild(tooltip);
      }

      if (isCompleted) {
        divCurso.classList.add('completado');
      }

      divCurso.addEventListener('click', () => openModal(curso));

      divSem.appendChild(divCurso);
    });

    malla.appendChild(divSem);
  });

  updateProgressBar();
}

function openModal(curso) {
  modalTitle.textContent = curso.nombre;
  modalDesc.textContent = curso.descripcion;
  const completado = localStorage.getItem(curso.nombre) === 'completado';

  btnToggleComplete.textContent = completado ? 'Marcar como NO completado ❌' : 'Marcar como completado ✅';
  btnToggleComplete.onclick = () => {
    if (completado) {
      localStorage.removeItem(curso.nombre);
    } else {
      localStorage.setItem(curso.nombre, 'completado');
    }
    renderMalla();
    closeModal();
  };

  modal.style.display = 'flex';
}

function closeModal() {
  modal.style.display = 'none';
}

modalClose.onclick = closeModal;
window.onclick = e => {
  if (e.target === modal) closeModal();
};

filterSelect.onchange = () => {
  currentFilter = filterSelect.value;
  renderMalla();
};

resetBtn.onclick = () => {
  if(confirm("¿Seguro quieres resetear todo el progreso?")) {
    getAllCourses().forEach(c => localStorage.removeItem(c.nombre));
    renderMalla();
  }
};

exportBtn.onclick = () => {
  const completedCourses = getAllCourses()
    .filter(c => localStorage.getItem(c.nombre) === 'completado')
    .map(c => c.nombre);

  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(completedCourses, null, 2));
  const dlAnchorElem = document.createElement('a');
  dlAnchorElem.setAttribute("href", dataStr);
  dlAnchorElem.setAttribute("download", "progreso_malla_med_uc.json");
  document.body.appendChild(dlAnchorElem);
  dlAnchorElem.click();
  dlAnchorElem.remove();
};

renderMalla();
