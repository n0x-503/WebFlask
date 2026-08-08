# 🚀 Mostra Técnica — Sistema de Divulgação

<p align="center">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-plain.svg" width="80"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original-wordmark.svg" width="100"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" width="80"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg" width="80"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" width="80"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-line.svg" width="80"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/arduino/arduino-plain-wordmark.svg" width="100"/>
</p>

<p align="center">
  <strong>🌐 Desenvolvimento Web + 🔌 Sistemas Embarcados + 📡 Bluetooth BLE</strong>
</p>

---

## 📖 Sobre o Projeto

Este projeto tem como objetivo desenvolver um **site para a Mostra Técnica da nossa escola**, apresentando informações sobre o curso, a exposição e os projetos desenvolvidos pelos alunos.

Para facilitar o acesso dos visitantes ao site, utilizaremos um **microcontrolador com tecnologia Bluetooth Low Energy (BLE)**.

A ideia é utilizar a comunicação Bluetooth para disponibilizar a **URL do site aos visitantes** que chegarem ao barracão do nosso curso.

Dessa forma, o visitante poderá acessar informações sobre:

- 🎓 Nosso curso;
- 🔬 A Mostra Técnica;
- 🛠️ Os projetos desenvolvidos;

O projeto une **hardware, sistemas embarcados e desenvolvimento web**, criando uma experiência tecnológica e interativa para os visitantes.

---

# 🎯 Objetivos

- 🌐 Desenvolver um site para a Mostra Técnica;
- 🎓 Apresentar informações sobre o nosso curso;
- 🔬 Divulgar a Mostra Técnica;
- 🛠️ Apresentar os projetos desenvolvidos pelos alunos;
- 📡 Utilizar **Bluetooth Low Energy (BLE)** para disponibilizar a URL do site;
- 🔌 Integrar um microcontrolador com uma aplicação web;
- 📱 Facilitar o acesso dos visitantes às informações;
- 💻 Aplicar conhecimentos de desenvolvimento web;
- ⚙️ Trabalhar com sistemas embarcados e comunicação sem fio.

---

# ⚙️ Funcionamento

O projeto será dividido em duas partes principais:

### 🔌 Hardware

O hardware será responsável pela comunicação através do **Bluetooth Low Energy (BLE)**.

Um microcontrolador será programado para disponibilizar as informações necessárias para que os visitantes possam obter a URL do site.

### 🌐 Software

O software será responsável pelo desenvolvimento do site e pelo gerenciamento das informações apresentadas aos visitantes.

A aplicação web será desenvolvida utilizando **Python, Flask, HTML, CSS e JavaScript**.

---

# 📡 Bluetooth Low Energy — BLE

O **Bluetooth Low Energy (BLE)** será utilizado para realizar a comunicação sem fio entre o sistema embarcado e os visitantes.

O microcontrolador será configurado para trabalhar com BLE e disponibilizar a informação necessária para o acesso ao site.

O BLE foi escolhido por ser uma tecnologia de comunicação sem fio que possui **baixo consumo de energia**, sendo muito utilizada em sistemas embarcados e dispositivos que precisam transmitir pequenas quantidades de dados.

### 🔗 Fluxo da comunicação

```text
┌─────────────────────────┐
│    🔌 MICROCONTROLADOR  │
│                         │
│          BLE            │
└────────────┬────────────┘
             │
             │ 📡 Bluetooth
             ▼
┌─────────────────────────┐
│       📱 VISITANTE      │
│                         │
│      Obtém a URL        │
└────────────┬────────────┘
             │
             │ 🌐 Internet
             ▼
┌─────────────────────────┐
│        💻 WEBSITE       │
│                         │
│  🎓 Curso               │
│  🔬 Mostra Técnica      │
│  🛠️ Projetos            │
└─────────────────────────┘
