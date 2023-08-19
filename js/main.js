function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);

  function revealAbout() {
    var aboutSections = document.querySelectorAll(".about-reveal");
  
    for (var i = 0; i < aboutSections.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = aboutSections[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        aboutSections[i].classList.add("active");
      } else {
        aboutSections[i].classList.remove("active");
      }
    }
}

window.addEventListener("scroll", revealAbout);

function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");

            // Generate a random number between 1 and 3
            var randomAnimation = Math.floor(Math.random() * 3) + 1;

            // Remove any existing animation classes
            reveals[i].classList.remove("animate-from-right");
            reveals[i].classList.remove("animate-from-left");
            reveals[i].classList.remove("animate-from-top");

            // Add the appropriate animation class based on random number
            if (randomAnimation === 1) {
                reveals[i].classList.add("animate-from-right");
            } else if (randomAnimation === 2) {
                reveals[i].classList.add("animate-from-left");
            } else {
                reveals[i].classList.add("animate-from-top");
            }
        } else {
            reveals[i].classList.remove("active");
            reveals[i].classList.remove("animate-from-right");
            reveals[i].classList.remove("animate-from-left");
            reveals[i].classList.remove("animate-from-top");
        }
    }
}

window.addEventListener("scroll", reveal);

function toggleDarkMode() {
  const html = document.querySelector('body');
  const isDarkMode = html.classList.toggle('dark-mode');
  localStorage.setItem('darkMode', isDarkMode);

  const navbarBrand = document.querySelector('.nav-link .text-primary');
  if (navbarBrand) {
    navbarBrand.classList.toggle('text-light', isDarkMode);
  }

  sessionStorage.setItem('initialDarkMode', isDarkMode);
}

document.addEventListener('DOMContentLoaded', function() {
  const savedDarkMode = localStorage.getItem('darkMode');
  if (savedDarkMode === 'true') {
    const html = document.querySelector('body');
    const navbarBrand = document.querySelector('.navbar-brand .text-primary');
    if (navbarBrand) {
      navbarBrand.classList.add('text-light');
    }
    html.classList.add('dark-mode');
  }

  const initialDarkMode = sessionStorage.getItem('initialDarkMode');
  if (initialDarkMode === 'true') {
    const darkModeToggle = document.querySelector('#darkModeToggle');
    if (darkModeToggle) {
      darkModeToggle.checked = true;
    }
  }
});



const darkModeToggle = document.getElementById('darkModeToggle');
const projectCard = document.getElementById('projectCard');
const productCarousel = document.getElementById('productCarousel');

// Tambahkan event listener untuk tombol mode gelap
darkModeToggle.addEventListener('click', () => {
    projectCard.classList.toggle('dark-mode');
    productCarousel.classList.toggle('dark-mode');

    // Jika mode gelap aktif, tambahkan atau hapus kelas bg-dark dari card-body
    const cardBody = projectCard.querySelector('.card-body');
    cardBody.classList.toggle('bg-dark');
});

var tooltipTriggerList = [].slice.call(document.querySelectorAll('.pin-icon'));
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
});

// Menambahkan event listener untuk menampilkan tooltip dengan teks berbahasa Indonesia atau terjemahan
var paragraphText = document.querySelector('.mb-4').textContent;
var pinIcon = document.querySelector('.pin-icon');
pinIcon.addEventListener('click', function() {
    // Ganti dengan teks berbahasa Indonesia atau terjemahan yang diinginkan
    var translatedText = "Ini adalah terjemahan teks yang ada di atas.";
    
    // Buat tooltip baru
    var newTooltip = new bootstrap.Tooltip(pinIcon, {
        title: translatedText,
        placement: 'top',
        trigger: 'manual'
    });

    // Tampilkan tooltip
    newTooltip.show();
});