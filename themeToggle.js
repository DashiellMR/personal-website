const darkModeSVG = `
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="40" height="40" viewBox="0 0 256 256" xml:space="preserve">

<defs>
</defs>
<g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(25,25,25); fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
	<circle cx="45" cy="45" r="45" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(25,25,25);; fill-rule: nonzero; opacity: 1;" transform="  matrix(1 0 0 1 0 0) "/>
	<path d="M 70 43 h -7.475 c -0.382 -3.368 -1.717 -6.447 -3.727 -8.97 l 5.294 -5.294 c 0.781 -0.781 0.781 -2.047 0 -2.828 c -0.781 -0.781 -2.047 -0.781 -2.828 0 l -5.294 5.294 c -2.523 -2.01 -5.601 -3.345 -8.97 -3.727 V 20 c 0 -1.104 -0.896 -2 -2 -2 s -2 0.896 -2 2 v 7.475 c -3.368 0.382 -6.447 1.717 -8.97 3.727 l -5.294 -5.294 c -0.78 -0.781 -2.048 -0.781 -2.828 0 c -0.781 0.781 -0.781 2.047 0 2.828 l 5.294 5.294 c -2.01 2.523 -3.345 5.602 -3.727 8.97 H 20 c -1.104 0 -2 0.896 -2 2 s 0.896 2 2 2 h 7.475 c 0.382 3.368 1.717 6.447 3.727 8.97 l -5.294 5.294 c -0.781 0.781 -0.781 2.047 0 2.828 c 0.391 0.391 0.902 0.586 1.414 0.586 s 1.024 -0.195 1.414 -0.586 l 5.294 -5.294 c 2.523 2.01 5.602 3.345 8.97 3.727 V 70 c 0 1.104 0.896 2 2 2 s 2 -0.896 2 -2 v -7.475 c 3.368 -0.382 6.447 -1.717 8.97 -3.727 l 5.294 5.294 c 0.391 0.391 0.902 0.586 1.414 0.586 s 1.023 -0.195 1.414 -0.586 c 0.781 -0.781 0.781 -2.047 0 -2.828 l -5.294 -5.294 c 2.01 -2.523 3.345 -5.602 3.727 -8.97 H 70 c 1.104 0 2 -0.896 2 -2 S 71.104 43 70 43 z M 45 58.646 c -7.525 0 -13.646 -6.122 -13.646 -13.646 c 0 -7.525 6.122 -13.646 13.646 -13.646 c 7.524 0 13.646 6.122 13.646 13.646 C 58.646 52.524 52.524 58.646 45 58.646 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: #fff; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
</g>
</svg>
`;

const lightModeSVG = `
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="40" height="40" viewBox="0 0 256 256" xml:space="preserve">

<defs>
</defs>
<g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
	<path d="M 45 0 C 20.147 0 0 20.147 0 45 c 0 24.853 20.147 45 45 45 s 45 -20.147 45 -45 C 90 20.147 69.853 0 45 0 z M 69.172 59.485 c -4.927 7.509 -13.213 11.991 -22.165 11.991 C 32.391 71.477 20.5 59.586 20.5 44.97 c 0 -14.145 11.076 -25.76 25.215 -26.443 c 0.759 -0.033 1.459 0.352 1.833 1.005 c 0.373 0.653 0.348 1.46 -0.064 2.089 c -2.411 3.674 -3.685 7.935 -3.685 12.32 c 0 12.41 10.096 22.507 22.506 22.507 c 0.219 0 0.434 -0.016 0.649 -0.03 l 0.447 -0.028 c 0.749 -0.021 1.46 0.352 1.834 1.005 C 69.609 58.048 69.585 58.855 69.172 59.485 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: #fff; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
	<path d="M 39.799 33.941 c 0 -3.793 0.809 -7.507 2.362 -10.926 C 32.003 25.231 24.5 34.244 24.5 44.97 c 0 12.41 10.097 22.507 22.507 22.507 c 6.315 0 12.242 -2.63 16.466 -7.179 C 50.185 58.879 39.799 47.601 39.799 33.941 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: #fff; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
</g>
</svg>
`;
const themeIcon = document.getElementById("themeIconContainer");

function setSVGForTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  themeIcon.innerHTML = currentTheme === "dark" ? darkModeSVG : lightModeSVG;
}

setSVGForTheme();

themeIcon.addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  if (currentTheme === "dark") {
    document.documentElement.setAttribute("data-theme", "light");
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
  }
  setSVGForTheme();
});
