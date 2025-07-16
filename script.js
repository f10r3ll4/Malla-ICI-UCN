const ramos = [
  // I
  { id:"fisica", nombre:"Introducción a la física", sem:1, abre:["mecanica"] },
  { id:"calculo1", nombre:"Cálculo I", sem:1, abre:["mecanica","calculo2"] },
  { id:"algebra1", nombre:"Álgebra I", sem:1, abre:["algebra2","programacion"] },
  { id:"identidad", nombre:"Identidad, universidad, equidad y género", sem:1, abre:["dialogo1"] },
  { id:"comunicacion1", nombre:"Comunicación efectiva I", sem:1, abre:["comunicacion2"] },
  { id:"ingles1", nombre:"Inglés I", sem:1, abre:["ingles2"] },
  { id:"proy_intro", nombre:"Proyecto Introducción a la ingeniería", sem:1, abre:["programacion","proy_diseno1"] },
  // II
  { id:"mecanica", nombre:"Mecánica", sem:2, req:["fisica","calculo1"], abre:["electromagnetismo"] },
  { id:"calculo2", nombre:"Cálculo II", sem:2, req:["calculo1"], abre:["ec_dif","calculo3","estadistica","prod1","termo","economia"] },
  { id:"algebra2", nombre:"Álgebra II", sem:2, req:["algebra1"], abre:["ec_dif","programacion","economia","prod1"] },
  { id:"quimica", nombre:"Química general", sem:2, abre:["termo"] },
  { id:"dialogo1", nombre:"Diálogo, fe-cultura", sem:2, req:["identidad"], abre:["dialogo2"] },
  { id:"ingles2", nombre:"Inglés II", sem:2, req:["ingles1"] },
  // III
  { id:"ec_dif", nombre:"Ecuaciones diferenciales", sem:3, req:["calculo2","algebra2"], abre:["electivo1"] },
  { id:"calculo3", nombre:"Cálculo III", sem:3, req:["calculo2"], abre:["electromagnetismo","io1"] },
  { id:"estadistica", nombre:"Estadística", sem:3, req:["calculo2"], abre:["estadistica_ap"] },
  { id:"programacion", nombre:"Programación", sem:3, req:["algebra1","proy_intro"], abre:["cien_datos"] },
  { id:"electivo_general3", nombre:"Formación general electiva", sem:3 },
  { id:"proy_diseno1", nombre:"Proyecto diseño e innovación", sem:3, req:["proy_intro"], abre:["proy_diseno2"] },
  // IV
  { id:"electromagnetismo", nombre:"Electromagnetismo", sem:4, req:["mecanica","calculo3"] },
  { id:"prod1", nombre:"Administración producción I", sem:4, req:["calculo2","algebra2"], abre:["proy_diseno2","prod2"] },
  { id:"estadistica_ap", nombre:"Estadística aplicada", sem:4, req:["estadistica"], abre:["io2"] },
  { id:"termo", nombre:"Termodinámica", sem:4, req:["calculo2","quimica"] },
  { id:"economia", nombre:"Economía", sem:4, req:["calculo2","algebra2"], abre:["conta_dir","cien_datos"] },
  { id:"comunicacion2", nombre:"Comunicación efectiva II", sem:4, req:["comunicacion1"] },
  // V
  { id:"electivo1", nombre:"Electivo ciencias de la ingeniería", sem:5, req:["ec_dif"] },
  { id:"io1", nombre:"Investigación operativa I", sem:5, req:["calculo3"], abre:["io2","prod2"] },
  { id:"cien_datos", nombre:"Ciencias de datos", sem:5, req:["programacion","economia"], abre:["ti"] },
  { id:"conta_dir", nombre:"Contabilidad de dirección", sem:5, req:["economia"], abre:["ing_econ"] },
  { id:"electivo_pro1", nombre:"Electivo profesional 1", sem:5 },
  { id:"proy_diseno2", nombre:"Proyecto diseño de sistemas productivos", sem:5, req:["proy_diseno1","prod1"], abre:["proy_calidad"] },
  // VI
  { id:"emprendimiento", nombre:"Emprendimiento", sem:6 },
  { id:"io2", nombre:"Investigación operativa II", sem:6, req:["io1","estadistica_ap"], abre:["simulacion","cadena"] },
  { id:"prod2", nombre:"Administración producción II", sem:6, req:["prod1","io1"], abre:["ti","cadena"] },
  { id:"ing_econ", nombre:"Ingeniería económica", sem:6, req:["conta_dir"], abre:["proy_inv","gest_act"] },
  { id:"electivo_pro2", nombre:"Electivo profesional 2", sem:6 },
  { id:"dialogo2", nombre:"Diálogo, fe-ciencia", sem:6, req:["dialogo1"], abre:["etica"] },
  { id:"proy_calidad", nombre:"Proyecto calidad", sem:6, req:["proy_diseno2"] },
  // VII
  { id:"sostenibilidad", nombre:"Ingeniería y desarrollo sostenible", sem:7 },
  { id:"simulacion", nombre:"Simulación", sem:7, req:["io2"] },
  { id:"ti", nombre:"Tecnologías de la información", sem:7, req:["cien_datos","prod2"], abre:["org_dig"] },
  { id:"cadena", nombre:"Cadena de suministro", sem:7, req:["io2","prod2"], abre:["gest_act","proy_cad"] },
  { id:"electivo_pro3", nombre:"Electivo profesional 3", sem:7 },
  { id:"etica", nombre:"Ética moral-profesional", sem:7, req:["dialogo2"] },
  { id:"proy_inv", nombre:"Proyecto de inversión", sem:7, req:["ing_econ"], abre:["proy_cad"] },
  // VIII
  { id:"plan_estrat", nombre:"Planificación estratégica", sem:8 },
  { id:"gest_hum", nombre:"Gestión capital humano", sem:8 },
  { id:"org_dig", nombre:"Organización digital", sem:8, req:["ti"] },
  { id:"gest_act", nombre:"Gestión de activos", sem:8, req:["ing_econ","cadena"] },
  { id:"electivo_pro4", nombre:"Electivo profesional 4", sem:8 },
  { id:"proy_cad", nombre:"Proyecto cadena de suministro", sem:8, req:["cadena","proy_inv"] },
  // IX
  { id:"electivo_pro5", nombre:"Electivo profesional 5", sem:9 },
  { id:"electivo_pro6", nombre:"Electivo profesional 6", sem:9 },
  { id:"electivo_pro7", nombre:"Electivo profesional 7", sem:9 },
  { id:"electivo_pro8", nombre:"Electivo profesional 8", sem:9 },
  { id:"electivo_pro9", nombre:"Electivo profesional 9", sem:9 },
  { id:"electivo_pro10", nombre:"Electivo profesional 10", sem:9 },
  // X
  { id:"capstone", nombre:"CAPSTONE PROJECT", sem:10, req:["proy_cad"] }
];

let estado = {};
const cont = document.getElementById("malla");

function puede(r) {
  return !r.req || r.req.every(id=>estado[id]);
}

function render() {
  cont.innerHTML="";
  ramos.forEach(r=>{
    const d = document.createElement("div");
    d.className="ramo";
    d.dataset.id=r.id;
    d.dataset.sem="S"+r.sem;
    d.textContent=r.nombre;
    if(estado[r.id]) d.classList.add("approved");
    else if(!puede(r)) d.classList.add("locked");
    d.onclick=()=>{
      if(!puede(r)) return;
      estado[r.id]=!estado[r.id];
      render();
    };
    cont.appendChild(d);
  });
}

render();

