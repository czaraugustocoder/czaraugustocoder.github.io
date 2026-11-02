"""
NOTAS DE CESAR — gera as páginas de compartilhamento dos gráficos.

Para cada item de graficos.js cria:
    g/<id>/index.html  → página com as tags Open Graph (título, linha, imagem)
                          que WhatsApp, Facebook, Messenger, Threads e Instagram
                          leem para montar a prévia; o visitante é levado
                          na hora para site/#<id>.
    g/<id>/capa.jpg    → o gráfico num cartão 1200x630 (formato que o
                          Facebook/WhatsApp exibem sem cortar), leve (< 150 KB).

Roda sozinho no GitHub Actions a cada push que mexe em graficos.js ou nas
imagens (.github/workflows/compartilhar.yml). Para rodar à mão:
    python compartilhar/gerar.py          (requer Node e Pillow)
"""
import html
import json
import shutil
import subprocess
from pathlib import Path

from PIL import Image

SITE = "https://cesaraugustoandrade.com"
RAIZ = Path(__file__).resolve().parent.parent
SAIDA = RAIZ / "g"
PAPEL = (240, 239, 235)      # #F0EFEB
VERMELHO = (227, 18, 11)     # #E3120B
LARG, ALT = 1200, 630


def ler_graficos():
    js = (
        "const fs=require('fs');"
        "eval(fs.readFileSync(process.argv[1],'utf8')+';process.stdout.write(JSON.stringify(GRAFICOS))')"
    )
    saida = subprocess.run(
        ["node", "-e", js, str(RAIZ / "graficos.js")],
        check=True, capture_output=True, text=True,
    ).stdout
    return json.loads(saida)


def gerar_capa(origem: Path, destino: Path):
    im = Image.open(origem).convert("RGB")
    faixa = 8
    margem = 18
    alt_util = ALT - faixa - 2 * margem
    escala = min(alt_util / im.height, (LARG - 2 * margem) / im.width)
    im = im.resize((round(im.width * escala), round(im.height * escala)), Image.LANCZOS)
    cartao = Image.new("RGB", (LARG, ALT), PAPEL)
    cartao.paste(Image.new("RGB", (LARG, faixa), VERMELHO), (0, 0))
    x = (LARG - im.width) // 2
    y = faixa + margem + (alt_util - im.height) // 2
    cartao.paste(im, (x, y))
    cartao.save(destino, "JPEG", quality=85, optimize=True, progressive=True)


MODELO = """<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!-- Página gerada por compartilhar/gerar.py — não edite à mão -->
  <title>{titulo} — Notas de Cesar</title>
  <meta name="description" content="{linha}">
  <link rel="canonical" href="{url}">

  <meta property="og:site_name" content="Notas de Cesar">
  <meta property="og:locale" content="pt_BR">
  <meta property="og:type" content="article">
  <meta property="og:url" content="{url}">
  <meta property="og:title" content="{titulo}">
  <meta property="og:description" content="{linha}">
  <meta property="og:image" content="{imagem}">
  <meta property="og:image:secure_url" content="{imagem}">
  <meta property="og:image:type" content="image/jpeg">
  <meta property="og:image:width" content="{larg}">
  <meta property="og:image:height" content="{alt}">
  <meta property="og:image:alt" content="{alt_txt}">
  <meta name="twitter:card" content="summary_large_image">

  <script>location.replace({destino_js});</script>
  <style>
    body {{ margin: 0; background: #F0EFEB; color: #121212; font-family: Georgia, serif; }}
    main {{ max-width: 680px; margin: 0 auto; padding: 40px 20px; }}
    a {{ color: #E3120B; font-family: Arial, sans-serif; font-weight: 600; }}
  </style>
</head>
<body>
  <main>
    <h1>{titulo}</h1>
    <p>{linha}</p>
    <p><a href="{destino}">Ver o gráfico em Notas de Cesar →</a></p>
  </main>
</body>
</html>
"""


def main():
    graficos = ler_graficos()
    SAIDA.mkdir(exist_ok=True)
    ids = set()
    for g in graficos:
        gid = g["id"]
        ids.add(gid)
        pasta = SAIDA / gid
        pasta.mkdir(exist_ok=True)
        gerar_capa(RAIZ / g["imagem"], pasta / "capa.jpg")
        url = f"{SITE}/g/{gid}/"
        destino = f"{SITE}/#{gid}"
        e = lambda s: html.escape(str(s or ""), quote=True)
        (pasta / "index.html").write_text(MODELO.format(
            titulo=e(g["titulo"]), linha=e(g.get("linha")), url=e(url),
            imagem=e(f"{url}capa.jpg"), larg=LARG, alt=ALT, alt_txt=e(g.get("alt")),
            destino=e(destino), destino_js=json.dumps(destino),
        ), encoding="utf-8")
        print("ok", gid)

    # remove páginas de gráficos que saíram da lista
    for pasta in SAIDA.iterdir():
        if pasta.is_dir() and pasta.name not in ids:
            shutil.rmtree(pasta)
            print("removido", pasta.name)


if __name__ == "__main__":
    main()
