const menuMobile = document.getElementById("menu-mobile");

const openMenu = () => {
  menuMobile.classList.remove("hidden")
  menuMobile.classList.add("flex")
}

const closeMenu = () => {
  menuMobile.classList.add("hidden")
  menuMobile.classList.remove("flex")
}