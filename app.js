(function () {
  "use strict";
  var C = window.RIFA, $ = function (id) { return document.getElementById(id); };
  var N = C.totalNumeros || 100, ancho = String(N - 1).length;
  var vendidos = (C.vendidos || []).map(Number), apartados = (C.apartados || []).map(Number), sel = [];
  function fmtN(n) { return String(n).padStart(ancho, "0"); }
  function pesos(v) { return "$" + Number(v).toLocaleString("es-CO"); }
  function aviso(m) { var t = $("toast"); t.textContent = m; t.classList.add("ver"); clearTimeout(t._h); t._h = setTimeout(function () { t.classList.remove("ver"); }, 2200); }
  function fechaLarga(s) {
    var p = String(s).split("-"); if (p.length !== 3) return s;
    var d = new Date(+p[0], +p[1] - 1, +p[2]);
    try { return d.toLocaleDateString("es-CO", { weekday: "long", day: "numeric", month: "long", year: "numeric" }); } catch (e) { return s; }
  }

  document.title = "CiberRifa · Rifa de " + C.premio;
  $("foto").src = C.foto; $("foto").alt = C.premio;
  $("premio").textContent = C.premio; $("desc").textContent = C.descripcion || "";
  $("valor").textContent = pesos(C.valorNumero);
  $("fecha").textContent = fechaLarga(C.fechaSorteo);
  $("loteria").textContent = C.loteria;
  $("regla").textContent = C.regla;
  $("pago").textContent = C.pago ? "Medios de pago: " + C.pago : "";
  $("pago").hidden = !C.pago;
  if (C.autorizacion) { $("autorizacion").textContent = C.autorizacion; $("autorizacion").hidden = false; }
  $("org").textContent = C.organizador || "";

  var tablero = $("tablero");
  for (var i = 0; i < N; i++) {
    var b = document.createElement("button");
    b.type = "button"; b.className = "num"; b.textContent = fmtN(i); b.dataset.n = i;
    if (vendidos.indexOf(i) > -1) { b.classList.add("vend"); b.disabled = true; b.setAttribute("aria-label", "Número " + fmtN(i) + ", vendido"); }
    else if (apartados.indexOf(i) > -1) { b.classList.add("apart"); b.disabled = true; b.setAttribute("aria-label", "Número " + fmtN(i) + ", apartado"); }
    else { b.setAttribute("aria-label", "Número " + fmtN(i) + ", libre"); b.addEventListener("click", alternar); }
    tablero.appendChild(b);
  }
  var libres = N - vendidos.length - apartados.length;
  var pct = Math.round(((vendidos.length + apartados.length) / N) * 100);
  $("barra").style.width = pct + "%";
  $("textoProgreso").textContent = libres === 0 ? "¡Todos los números están ocupados!" : "Quedan " + libres + " de " + N + " números · " + pct + "% ocupado";

  function alternar(e) {
    var n = +e.currentTarget.dataset.n, k = sel.indexOf(n);
    if (k > -1) sel.splice(k, 1); else sel.push(n);
    e.currentTarget.classList.toggle("sel", k === -1);
    e.currentTarget.setAttribute("aria-pressed", k === -1 ? "true" : "false");
    pintarCarrito();
  }
  function pintarCarrito() {
    var c = $("carrito");
    if (!sel.length) { c.hidden = true; return; }
    sel.sort(function (a, b) { return a - b; });
    var lista = sel.map(fmtN).join(", ");
    $("cantidad").textContent = (sel.length === 1 ? "Número " : "Números ") + lista;
    $("total").textContent = "Total: " + pesos(sel.length * C.valorNumero);
    var msg = "Hola " + (C.organizador || "") + ", quiero apartar " + (sel.length === 1 ? "el número " : "los números ") + lista +
      " de la rifa del " + C.premio + " (" + pesos(sel.length * C.valorNumero) + "). Mi nombre es: ";
    $("apartar").href = "https://wa.me/" + String(C.whatsapp).replace(/\D/g, "") + "?text=" + encodeURIComponent(msg);
    c.hidden = false;
  }
  $("vaciar").addEventListener("click", function () {
    sel = []; tablero.querySelectorAll(".num.sel").forEach(function (b) { b.classList.remove("sel"); b.setAttribute("aria-pressed", "false"); });
    pintarCarrito();
  });
  $("compartir").addEventListener("click", function () {
    var url = (C.url && C.url.indexOf("ciberrifa-reloj") === -1) ? C.url : (C.url || location.href);
    var datos = { title: "CiberRifa · " + C.premio, text: "Rifa de " + C.premio + " · " + pesos(C.valorNumero) + " por número", url: url };
    if (navigator.share) navigator.share(datos).catch(function () {});
    else if (navigator.clipboard) navigator.clipboard.writeText(url).then(function () { aviso("Enlace copiado ✔"); }, function () { window.prompt("Copia el enlace:", url); });
    else window.prompt("Copia el enlace:", url);
  });
})();
