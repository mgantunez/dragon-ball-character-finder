# 🐉 Dragon Ball Character Finder

Una aplicación React que permite buscar personajes de Dragon Ball por nombre y rango de poder (Ki) utilizando la API pública [dragonball-api.com](https://web.dragonball-api.com/documentation).

## 🛠️ Tecnologías utilizadas

- React
- Sass
- Font Awesome
- [Dragon Ball API](https://web.dragonball-api.com/documentation)

## 🚀 Características

- Búsqueda por nombre de personaje.
- Filtrado por valores mínimos y máximos de **Ki**.
- Visualización de resultados con detalles desplegables (imagen y descripción).
- Estilos personalizados con Sass.
- Validaciones de entrada para asegurar búsquedas coherentes.

## ❗ Notas importantes

- Es obligatorio seleccionar **Ki mínimo** y **Ki máximo** antes de realizar una búsqueda.
- Si el rango de Ki es inválido (es decir, si el valor mínimo es mayor que el máximo), se mostrará un mensaje de error.
- Los valores de Ki de los personajes se formatean eliminando los **puntos** (`.`) antes de convertirlos a número, para evitar errores en la comparación.

## 📁 Estructura del proyecto

```
src/
├── characters/
│ └── CharacterCard.jsx
│ └── CharacterList.jsx
├── layout/
│ └── Header.jsx
│ └── Footer.jsx
├── search/
│ └── SearchForm.jsx
├── styles/
│ └── App.scss
│ └── core/
│ └── components/
├── App.jsx
└── main.jsx
```

## ⚙️ Instalación y ejecución local

Sigue estos pasos para clonar y correr la aplicación localmente:

1. **Clona el repositorio:**

```bash
git clone https://github.com/mgantunez/dragon-ball-character-finder/
cd dragon-ball-character-finder

```

2. **Instala las dependencias:**

```bash
npm install

```

3. **Instala Font Awesome:**

```bash
npm install --save @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons @fortawesome/fontawesome-svg-core

```

4. **Ejecuta la aplicación:**

```bash
npm run dev
```
