# Tecnologias de Interface por Área de Desenvolvimento

| Área | Camada / responsabilidade | Para que serve | Tecnologias que podem ocupar essa camada |
|---|---|---|---|
| **Web** | **Interface (UI)** | Criar telas, componentes, formulários e interação | **React**, **Vue**, **Angular**, Svelte |
| **Web** | **Framework da aplicação** | Organizar a aplicação, rotas, renderização e recursos de servidor | **Next.js** (React), **Nuxt** (Vue), SvelteKit |
| **Web** | **Desenvolvimento e Build** | Rodar localmente, processar o projeto e gerar a versão de produção | **Vite**, Webpack, Turbopack |
| **Web** | **Execução** | Executar a aplicação final | Browser |
| **Desktop** | **Interface (UI)** | Criar janelas, botões, menus, tabelas e telas | React/Vue/Angular (com Electron), Qt, JavaFX, .NET UI |
| **Desktop** | **Camada Desktop** | Conectar a aplicação ao sistema operacional | **Electron**, Tauri, Qt |
| **Desktop** | **Execução** | Executar como aplicação do computador | Windows, Linux, macOS |
| **Mobile** | **Interface nativa** | Criar telas e componentes específicos do sistema | Android UI, iOS UI |
| **Mobile** | **Interface multiplataforma** | Criar uma aplicação para Android e iOS | **React Native**, **Flutter** |
| **Mobile** | **Framework / plataforma** | Fornecer acesso à interface e recursos do celular | React Native, Flutter, frameworks nativos |
| **Mobile** | **Execução** | Executar a aplicação | Android ou iOS |
| **Embarcado** | **Interface física** | Permitir interação com o equipamento | Botões, LEDs, displays LCD/OLED, touchscreen |
| **Embarcado** | **Camada de UI** | Controlar o que aparece no display e interpretar entradas | LVGL, Qt for Embedded, frameworks específicos |
| **Embarcado** | **Hardware/Drivers** | Fazer a comunicação com os componentes físicos | GPIO, I2C, SPI, UART, drivers |
| **Embarcado** | **Execução** | Executar o software diretamente no equipamento | Microcontrolador, microprocessador, RTOS ou sistema embarcado |

---

# Fluxo por Área

## Web

```text
Interface (UI)
React / Vue / Angular / Svelte
        ↓
Framework da aplicação (opcional)
Next.js / Nuxt / SvelteKit
        ↓
Desenvolvimento e Build
Vite / Webpack / Turbopack
        ↓
Execução
Browser
```

---

## Desktop

Interface (UI)
React / Vue / Angular
OU
Qt / JavaFX / .NET UI
        ↓
Camada Desktop
Electron / Tauri / Qt
        ↓
Execução
Windows / Linux / macOS

---

## Mobile

### Multiplataforma 
Interface
React Native / Flutter
        ↓
Framework / Plataforma
React Native / Flutter
        ↓
Execução
Android / iOS

### Nativo
Interface Nativa
Componentes Android / iOS
        ↓
Framework Nativo
Ferramentas do sistema operacional
        ↓
Execução
Android / iOS

---

## Sistemas embarcados

Interface
Display / Botões / LEDs / Touchscreen
        ↓
Camada de UI
LVGL / Qt for Embedded / Framework específico
        ↓
Hardware e Drivers
GPIO / I2C / SPI / UART
        ↓
Execução
Microcontrolador / Microprocessador / RTOS

---