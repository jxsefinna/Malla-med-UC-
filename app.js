const mallaData = [
  {
    semestre: 1,
    cursos: [
      { nombre: "Bases y Fundamentos I", descripcion: "Introducción a la medicina y ciencias básicas.", prereq: [] },
      { nombre: "Química", descripcion: "Curso de química general y orgánica.", prereq: [] },
      { nombre: "Psicología Médica", descripcion: "Fundamentos de psicología aplicada a la medicina.", prereq: [] },
      { nombre: "Física", descripcion: "Bases de física relevantes para ciencias médicas.", prereq: [] },
      { nombre: "Biología Molecular", descripcion: "Estudio de la biología a nivel molecular.", prereq: [] },
    ],
  },
  // Aquí sigue el resto de semestres 2 a 12, idéntico a lo anterior, por ejemplo:
  {
    semestre: 2,
    cursos: [
      { nombre: "Bases y Fundamentos II", descripcion: "Continuación del estudio básico en medicina.", prereq: ["Bases y Fundamentos I"] },
      { nombre: "Morfología I", descripcion: "Anatomía y estructura humana básica.", prereq: [] },
      { nombre: "Bioestadística", descripcion: "Métodos estadísticos aplicados a la salud.", prereq: [] },
      { nombre: "Antropología y Ética", descripcion: "Aspectos sociales y éticos en medicina.", prereq: [] },
      { nombre: "Formación General 1", descripcion: "Cursos optativos y formación transversal.", prereq: [] },
    ],
  },
  // Completa todos los semestres hasta 12 igual que el ejemplo que te di arriba.
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
