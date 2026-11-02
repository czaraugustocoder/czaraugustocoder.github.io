/* =====================================================================
   NOTAS DE CESAR — botões de compartilhar (WhatsApp, Facebook, Threads,
   Messenger, Instagram via menu do celular, copiar link)
   ---------------------------------------------------------------------
   Uso nos artigos: basta incluir no <head>
       <script src="../compartilhar.js" defer></script>
   Os botões aparecem sozinhos abaixo da assinatura e no fim do texto.

   Uso manual: Compartilhar.montar(elemento, { url, titulo, texto })
   ===================================================================== */
(function () {
  const SITE = "https://cesaraugustoandrade.com";
  const celular = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  const css = `
    .compartilhar { display: flex; flex-wrap: wrap; align-items: center; gap: 8px; margin: 18px 0 0; }
    .compartilhar .rotulo { font-family: "Libre Franklin", Arial, sans-serif; font-size: 11.5px; font-weight: 700;
      text-transform: uppercase; letter-spacing: .09em; color: #75736E; margin-right: 4px; }
    .compartilhar a, .compartilhar button {
      font-family: "Libre Franklin", Arial, sans-serif; font-size: 13px; font-weight: 600; line-height: 1;
      text-decoration: none; background: transparent; color: #121212; border: 1px solid #121212;
      padding: 8px 12px; cursor: pointer; border-radius: 0; }
    .compartilhar a:hover, .compartilhar button:hover { background: #121212; color: #fff; }
    .compartilhar .zap { border-color: #121212; }
    .cabeca .compartilhar { margin-bottom: 14px; }
    .compartilhar-fim { margin: 40px 0 0; padding-top: 16px; border-top: 1px solid #CFCCC4; }
  `;
  const estilo = document.createElement("style");
  estilo.textContent = css;
  document.head.appendChild(estilo);

  function urlCanonica() {
    const og = document.querySelector('meta[property="og:url"]');
    if (og && og.content) return og.content;
    return SITE + location.pathname;
  }

  function registrar(metodo, url) {
    if (typeof gtag === "function") gtag("event", "share", { method: metodo, item_id: url });
  }

  function links({ url, titulo, texto }) {
    const u = encodeURIComponent(url);
    const msg = encodeURIComponent(`${titulo}${texto ? " — " + texto : ""}\n${url}`);
    const lista = [
      ["WhatsApp", `https://api.whatsapp.com/send?text=${msg}`],
      ["Facebook", `https://www.facebook.com/sharer/sharer.php?u=${u}`],
      ["Threads", `https://www.threads.net/intent/post?text=${encodeURIComponent(titulo + " " + url)}`]
    ];
    if (celular) lista.push(["Messenger", `fb-messenger://share/?link=${u}`]);
    return lista;
  }

  function montar(alvo, dados, opcoes = {}) {
    const caixa = document.createElement("div");
    caixa.className = "compartilhar" + (opcoes.classe ? " " + opcoes.classe : "");
    const rotulo = document.createElement("span");
    rotulo.className = "rotulo";
    rotulo.textContent = opcoes.rotulo || "Compartilhar";
    caixa.appendChild(rotulo);

    for (const [nome, href] of links(dados)) {
      const a = document.createElement("a");
      a.textContent = nome;
      a.href = href;
      if (!href.startsWith("fb-messenger")) { a.target = "_blank"; a.rel = "noopener"; }
      a.addEventListener("click", () => registrar(nome.toLowerCase(), dados.url));
      caixa.appendChild(a);
    }

    // Menu nativo do celular: é por aqui que aparecem Instagram (Direct/Stories) e demais apps
    if (navigator.share) {
      const b = document.createElement("button");
      b.type = "button";
      b.textContent = "Instagram e outros";
      b.addEventListener("click", async () => {
        try {
          await navigator.share({ title: dados.titulo, text: dados.texto || dados.titulo, url: dados.url });
          registrar("nativo", dados.url);
        } catch (e) { /* usuário cancelou */ }
      });
      caixa.appendChild(b);
    }

    const copiar = document.createElement("button");
    copiar.type = "button";
    copiar.textContent = "Copiar link";
    copiar.addEventListener("click", async () => {
      try { await navigator.clipboard.writeText(dados.url); copiar.textContent = "Link copiado"; }
      catch { copiar.textContent = dados.url; }
      registrar("copiar", dados.url);
      setTimeout(() => (copiar.textContent = "Copiar link"), 1800);
    });
    caixa.appendChild(copiar);

    alvo.replaceChildren ? alvo.replaceChildren(caixa) : (alvo.innerHTML = "", alvo.appendChild(caixa));
    return caixa;
  }

  // Montagem automática nas páginas de artigo
  function automatico() {
    const assinatura = document.querySelector("article .assinatura");
    if (!assinatura) return;
    const meta = n => (document.querySelector(`meta[property="og:${n}"]`) || {}).content || "";
    const dados = {
      url: urlCanonica(),
      titulo: meta("title") || document.title,
      texto: meta("description")
    };
    const topo = document.createElement("div");
    assinatura.after(topo);
    montar(topo, dados);

    const autor = document.querySelector("article .autor");
    if (autor) {
      const fim = document.createElement("div");
      autor.before(fim);
      montar(fim, dados, { classe: "compartilhar-fim", rotulo: "Gostou? Compartilhe" });
    }
  }

  window.Compartilhar = { montar, SITE };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", automatico);
  else automatico();
})();
