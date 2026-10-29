document.addEventListener("DOMContentLoaded", async () => {
  const isInPages = window.location.pathname.includes("/pages/");
  const homeHref = isInPages ? "../index.html" : "index.html";
  const formatoHref = isInPages ? "formato-casos-prueba.html" : "pages/formato-casos-prueba.html";
  const planHref = isInPages ? "plan-pruebas-api.html" : "pages/plan-pruebas-api.html";
  const bibliografiaHref = isInPages ? "bibliografia.html" : "pages/bibliografia.html";
  const componentBase = isInPages ? "../components/" : "components/";
  const faviconPath = isInPages ? "../assets/img/LOGO-1.webp" : "assets/img/LOGO-1.webp";

  if (!document.querySelector('link[rel="icon"]')) {
    const favicon = document.createElement("link");
    favicon.rel = "icon";
    favicon.type = "image/webp";
    favicon.href = faviconPath;
    document.head.appendChild(favicon);
  }

  if (!document.body.querySelector('[data-component="scroll-top"]')) {
    const scrollTopPlaceholder = document.createElement("div");
    scrollTopPlaceholder.setAttribute("data-component", "scroll-top");
    document.body.appendChild(scrollTopPlaceholder);
  }

  const placeholders = document.querySelectorAll("[data-component]");

  for (const placeholder of placeholders) {
    const componentName = placeholder.dataset.component;
    const componentFile =
      componentName === "navbar"
        ? "navbar.html"
        : componentName === "scroll-top"
          ? "scroll-top.html"
          : "footer.html";

    try {
      const response = await fetch(`${componentBase}${componentFile}`);
      if (!response.ok) continue;

      let html = await response.text();
      html = html.replace(/\{\{HOME_LINK\}\}/g, homeHref);
      html = html.replace(/\{\{FORMATO_LINK\}\}/g, formatoHref);
      html = html.replace(/\{\{PLAN_LINK\}\}/g, planHref);
      html = html.replace(/\{\{BIBLIOGRAFIA_LINK\}\}/g, bibliografiaHref);

      const wrapper = document.createElement("div");
      wrapper.innerHTML = html.trim();
      const component = wrapper.firstElementChild;

      if (component) {
        placeholder.replaceWith(component);
        if (componentName === "scroll-top") {
          window.dispatchEvent(new Event("scroll-top:ready"));
        }
      }
    } catch (error) {
      console.warn(`No se pudo cargar el componente ${componentFile}:`, error);
    }
  }

  const year = new Date().getFullYear();
  const yearElement = document.getElementById("currentYear");
  if (yearElement) {
    yearElement.textContent = year;
  }

  const scrollToTopicsButton = document.getElementById("scrollToTopics");
  const topicsSection = document.getElementById("temas-principales");
  if (scrollToTopicsButton && topicsSection) {
    scrollToTopicsButton.addEventListener("click", () => {
      topicsSection.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  const scrollTopScriptPath = isInPages ? "../assets/js/scroll-to-top.js" : "assets/js/scroll-to-top.js";
  const existingScrollTopScript = document.querySelector('script[data-scroll-top-script]');

  if (!existingScrollTopScript) {
    const scrollTopScript = document.createElement("script");
    scrollTopScript.src = scrollTopScriptPath;
    scrollTopScript.setAttribute("data-scroll-top-script", "true");
    document.body.appendChild(scrollTopScript);
  }
});
