# AURORA IA — Laboratório Security by Design para LLMs

Sistema web do **Laboratório AURORA IA** — *do risco à evidência*. Um percurso
prático em três laboratórios que transforma cenários de ameaça em decisões de
segurança **verificáveis** para aplicações baseadas em LLM.

🔗 **Publicado em GitHub Pages:** `https://janeptn.github.io/SecuritybyDesign---LLM/`

## Método R-C-R-E

Toda ameaça percorre quatro estações:

| RISCO | CONTROLE | RESPONSÁVEL | EVIDÊNCIA |
|-------|----------|-------------|-----------|
| O que pode acontecer? | O que reduz probabilidade/impacto? | Quem executa e responde? | Como provar que funciona? |

> **Pergunta de qualidade:** outra equipe conseguiria verificar esse controle
> amanhã usando a evidência descrita?

## Laboratórios

- **LAB 01 — Ameaças mapeadas** · DFD, catálogo OWASP Top 10 for LLM, técnicas
  MITRE ATLAS e matriz Probabilidade × Impacto.
- **LAB 02 — Controles + responsáveis + evidências** · catálogo de controles,
  RACI e evidência verificável, mapeados a NIST SP 800-218A e OWASP GenAI.
- **LAB 03 — Testar e decidir** · teste adversarial (red team de LLM), medição
  de eficácia e decisão de risco (aceitar / tratar / escalar).

## Referenciais de apoio

NIST AI RMF · NIST AI 600-1 · NIST SP 800-218A · OWASP GenAI / Top 10 for LLM ·
MITRE ATLAS.

## Como usar

Abra `index.html` em um navegador, ou acesse a versão publicada no GitHub Pages.
Use o botão **Gerar PDF** (barra lateral) para exportar o conteúdo completo dos
laboratórios, insumos, links e tabelas em um único arquivo PDF.

## Estrutura

```
index.html    # página do sistema (conteúdo dos laboratórios)
styles.css    # identidade visual (paleta do fluxo Aurora AI)
app.js        # navegação, scrollspy e geração de PDF
```

## Identidade visual

Paleta derivada do fluxo *Aurora AI — do risco à evidência*:

- **RISCO / LAB 01** — azul `#1e3a5f`
- **CONTROLE / LAB 02** — teal `#17a398`
- **RESPONSÁVEL / LAB 03** — roxo `#7b5fc4`
- **EVIDÊNCIA** — laranja `#e8833a`

---

CISSA · CESAR · Security by Design — LLM
