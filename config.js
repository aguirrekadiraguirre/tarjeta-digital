/* ============================================================
   CIBERRIFA · todo lo que cambias está en este archivo
   ============================================================ */
window.RIFA = {

  url: "https://ciberrifa-reloj.netlify.app/",     // CAMBIAR por la dirección real al publicar

  premio: "Reloj Paterson",
  descripcion: "Análogo y digital, con cronógrafo. Resistente al agua (WR 30 m).",
  foto: "imagenes/reloj.jpg",

  valorNumero: 10000,                                // precio de cada número en pesos
  totalNumeros: 100,                                 // 100 = del 00 al 99

  loteria: "Lotería de Manizales",
  fechaSorteo: "2026-12-16",                         // AAAA-MM-DD (día en que juega la lotería)
  regla: "Gana el número que coincida con las dos últimas cifras del premio mayor de la Lotería de Manizales ese día.",

  whatsapp: "573025915427",                          // CAMBIAR si es otro número (con 57, sin + ni espacios)
  organizador: "Kadir Aguirre",

  pago: "Nequi 302 591 5427 · Kadir Aguirre",                     // CAMBIAR si agregas otro medio (ej. "Nequi 301 460 6473 · Daviplata …")
  autorizacion: "",                                  // Si tienes permiso de la alcaldía/Coljuegos, escríbelo aquí (aparece en la página)

  /* Actualiza estas dos listas cuando vendas o apartes, guarda y vuelve a publicar */
  vendidos:  [],                                     // ejemplo: [3, 17, 25]  (pagados)
  apartados: []                                      // ejemplo: [8, 42]      (reservados, aún sin pago)
};
