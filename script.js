const ramos = [
  // Semestre I
  { id: "fisica", nombre: "Introducción a la física", sem: 1, abre: ["mecanica"] },
  { id: "calculo1", nombre: "Cálculo I", sem: 1, abre: ["mecanica", "calculo2"] },
  { id: "algebra1", nombre: "Álgebra I", sem: 1, abre: ["algebra2", "programacion"] },
  { id: "identidad", nombre: "Identidad, universidad, equidad y género", sem: 1, abre: ["dialogo1"] },
  { id: "comunicacion1", nombre: "Comunicación efectiva I", sem: 1, abre: ["comunicacion2"] },
  { id: "ingles1", nombre: "Inglés I", sem: 1, abre: ["ingles2"] },
  { id: "proy_intro", nombre: "Proyecto Introducción a la ingeniería", sem: 1, abre: ["programacion", "proy_diseno1"] },

  // Semestre II
  { id: "mecanica", nombre: "Mecánica", sem: 2, abre: ["electromagnetismo"], req: ["fisica", "calculo1"] },
  { id: "calculo2", nombre: "Cálculo II", sem: 2, abre: ["ec_dif", "calculo3", "estadistica", "prod1", "termo", "economia"], req: ["calculo1"] },
  { id: "algebra2", nombre: "Álgebra II", sem: 2, abre: ["ec_dif", "programacion", "economia", "prod1"], req: ["algebra1"] },
  { id: "quimica", nombre: "Química general", sem: 2, abre: ["termo"] },
  { id: "dialogo1", nombre: "Diálogo, fe-cultura", sem: 2, abre: ["dialogo2"], req: ["identidad"] },
  { id: "ingles2", nombre: "Inglés II", sem: 2, req: ["ingles1"] },

  // Aquí seguirían los semestres III a X...
];

const estadoRamos = {};
const malla = document.getElementById("malla");

function renderMalla() {
  malla.innerHTML = "";
  ramos.forEach(ramo => {
    const btn = document.createElement("div");
    btn.className = "ramo";
    btn.dataset.id = ramo.id;
    btn.dataset.sem = `S${ramo.sem}`;
    btn.textContent = ramo.nombre;

    if (!puedeDesbloquear(ramo)) {
      btn.classList.add("locked");
    }

    if (estadoRamos[ramo.id]) {
      btn.classList.remove("locked");
      btn.classList.add("approved");
    }

    btn.addEventListener("click", () => toggleRamo(ramo.id));
    malla.appendChild(btn);
  });
}

function puedeDesbloquear(ramo) {
  if (!ramo.req) return true;
  return ramo.req.every(id => estadoRamos[id]);
}

function toggleRamo(id) {
  const ramo = ramos.find(r => r.id === id);
  if (!puedeDesbloquear(ramo)) return;
  estadoRamos[id] = !estadoRamos[id];
  renderMalla();
}

renderMalla();

