export default function AdminModule () {
  handleNavbar()
  showActiveNav()
}


function handleNavbar() {
  const overlay = document.querySelector('.nav-overlay');
  const nav = document.querySelector('.navbar');
  const menuBtn = document.querySelector('#admin-menu-btn');

  // Set initial state based on localStorage
  const navState = localStorage.getItem('nav_state');
  if (navState === 'open') {
    nav?.classList.add('show');
    overlay?.classList.add('show');
  } else {
    nav?.classList.remove('show');
    overlay?.classList.remove('show');
  }

  if (!menuBtn || !overlay) return;

  // Toggle overlay visibility and update nav_state on menu button click
  menuBtn.addEventListener('click', (event) => {
    event.stopPropagation();
    overlay.classList.toggle('show');
    
    // Update nav_state accordingly
    if (overlay.classList.contains('show')) {
      localStorage.setItem('nav_state', 'open');
    } else {
      localStorage.setItem('nav_state', 'closed');
    }
  });

  // If the overlay itself is clicked (not a child), close it and update state
  overlay.addEventListener('click', (event) => {
    if (event.target === overlay) {
      overlay.classList.remove('show');
      localStorage.setItem('nav_state', 'closed');
    }
  });
}

function showActiveNav() {
  const navLinks = document.querySelectorAll('[data-admin-nav]')
  if (navLinks) {
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        nav?.classList.remove('active')
      })
      const href = link.getAttribute('href')
      if (window.location.pathname === href) {
        link.classList.add('active')
      } else {
        link.classList.remove('active')
      }
    })
  }
}
