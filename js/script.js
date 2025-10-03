// ========================================
// MENU HAMBURGER
// ========================================
const hamburger = document.getElementById("hamburger")
const nav = document.getElementById("nav")

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active")
  nav.classList.toggle("active")
})

// Fechar menu ao clicar em um link
const navLinks = document.querySelectorAll(".nav-link")
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active")
    nav.classList.remove("active")
  })
})

// ========================================
// ANIMAÇÕES AO SCROLL
// ========================================
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.animationPlayState = "running"
    }
  })
}, observerOptions)

// Observar todos os elementos com animação
const animatedElements = document.querySelectorAll(".fade-in, .slide-left, .slide-right")
animatedElements.forEach((el) => {
  el.style.animationPlayState = "paused"
  observer.observe(el)
})

// ========================================
// HEADER TRANSPARENTE AO SCROLL
// ========================================
const header = document.getElementById("header")
let lastScroll = 0

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset

  if (currentScroll > 100) {
    header.style.backgroundColor = "rgba(44, 44, 44, 0.98)"
    header.style.boxShadow = "0 5px 20px rgba(0, 0, 0, 0.3)"
  } else {
    header.style.backgroundColor = "rgba(44, 44, 44, 0.95)"
    header.style.boxShadow = "none"
  }

  lastScroll = currentScroll
})

// ========================================
// SMOOTH SCROLL PARA LINKS INTERNOS
// ========================================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      const headerHeight = header.offsetHeight
      const targetPosition = target.offsetTop - headerHeight

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      })
    }
  })
})
