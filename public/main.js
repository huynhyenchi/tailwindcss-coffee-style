const topMenu = document.getElementById('yc-top-menu')
const toggleTopMenuIcon = document.getElementById('yc-toggle-top-menu-icon')

document.addEventListener('click', (e) => {
  if(toggleTopMenuIcon.contains(e.target)) {
    //Click to chính Toggle icon
    topMenu.classList.toggle('tqd-topmenu-expanded')
    topMenu.classList.toggle('hidden')
  } else {
    //Click outside from Toggle icon
    if (topMenu.classList.contains('yc-topmenu-expanded')) {
      topMenu.classList.remove('yc-topmenu-expanded')
      topMenu.classList.add('hidden')
    }
  }
})
