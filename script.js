//definición de efecto fadeIn en el título al cargar el archivo
const titulo = document.querySelector("h1");

titulo.className = "animacion-titulo";

setTimeout(() => {
    titulo.className = "";
}, 1000);

//definición de visualización del menú para mantenerlo fijo detectando el scroll
window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
        document.querySelector(".menu-fijo").classList.add("fijo");
    } else {
        document.querySelector(".menu-fijo").classList.remove("fijo");
    }
});

//definición de validación de campos del formulario
const formulario = document.querySelector("#contacto form");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = e.target.querySelector("input[name='nombre']").value;
    const email = e.target.querySelector("input[name='email']").value;
    const mensaje = e.target.querySelector("textarea[name='mensaje']").value;

    if (!nombre || !email || !mensaje) {
        alert("Todos los campos son obligatorios");
        return;
    }

    // aca sería bueno intentar enviar el correo a través de alguna API o similar

    alert("Formulario enviado correctamente");
});

//INTENTO de definición de barra de muestra gráfica porcentajes de dominio de habilidades
const habilidades = document.querySelectorAll("#habilidades ul li");

habilidades.forEach((habilidad) => {
    const porcentajeInicio = habilidad.getAttribute("data-porcentaje");
    const porcentajeFinal = 100 - parseInt(habilidad.getAttribute("data-porcentaje"));
    const colorInicio = "green";
    const colorFinal = "white";

    habilidad.style.background = `linear-gradient(to right, ${colorInicio} ${porcentajeInicio}%, ${colorFinal} ${porcentajeFinal}%`;
    console.log(habilidad.style.background);
});




//esto es solo para intentar hacer que el desplazamiento hacia la sección sea más controlado, no se que tan necesario sea ni que tan complejo (verificar formas más sencillas o eliminarlo quizás)
const enlaces = document.querySelectorAll("nav a");

enlaces.forEach((enlace) => {
    enlace.addEventListener("click", (e) => {
        e.preventDefault();

        const seccion = document.querySelector(e.target.getAttribute("href"));
        const offsetY = seccion.offsetTop - 80; //hay que ajustar según el diseño

        window.scrollTo({
            top: offsetY,
            behavior: "smooth",
        });
    });
});

