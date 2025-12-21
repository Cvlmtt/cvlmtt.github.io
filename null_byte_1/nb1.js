// nb1.js - lightweight image lightbox for walkthrough screenshots
(function () {
  const lightbox = document.getElementById("nb1-lightbox");
  const lightboxImg = document.getElementById("nb1-lightbox-img");
  const lightboxCaption = document.getElementById("nb1-lightbox-caption");
  const closeBtn = document.getElementById("nb1-lightbox-close");

  if (!lightbox || !lightboxImg || !lightboxCaption || !closeBtn) return;

  function openLightbox(src, caption) {
    lightboxImg.src = src;
    lightboxImg.alt = caption || "Screenshot";
    lightboxCaption.textContent = caption || "";
    lightbox.classList.add("open");
    closeBtn.focus();
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    lightbox.classList.remove("open");
    lightboxImg.src = "";
    lightboxCaption.textContent = "";
    document.body.style.overflow = "";
  }

  document.addEventListener("click", (e) => {
    const a = e.target.closest("a.nb1-img-link");
    if (!a) return;
    e.preventDefault();
    const src = a.getAttribute("href");
    const caption = a.getAttribute("data-caption") || a.querySelector("img")?.getAttribute("alt") || "";
    openLightbox(src, caption);
  });

  closeBtn.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && lightbox.classList.contains("open")) closeLightbox();
  });
})();
