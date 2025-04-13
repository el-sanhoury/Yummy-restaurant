/**Navbar */
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links a");
const sections = document.querySelectorAll("section");

// Control the hamburger menu
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
});
// Close mobile menu when clicking a link
links.forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navLinks.classList.remove("active");
  });
});

// تتبع التمرير وتفعيل الرابط المناسب
function setActiveLink() {
  let currentSection = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (
      window.scrollY >= sectionTop - 70 &&
      window.scrollY < sectionTop + sectionHeight - 70
    ) {
      currentSection = section.getAttribute("id");
    }
  });

  links.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active");
    }
  });
}
window.addEventListener("scroll", setActiveLink);
window.addEventListener("load", setActiveLink);

// menu
// Get all filter buttons
const filterButtons = document.querySelectorAll(".filter-btn");
const menuItems = document.querySelectorAll(".menu-item");

// Add click event to each filter button
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove active class from all buttons
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    // Add active class to clicked button
    button.classList.add("active");

    // Get the filter value
    const filter = button.getAttribute("data-filter");
    // Filter menu items
    menuItems.forEach((item) => {
      if (filter === "all" || item.classList.contains(filter)) {
        item.classList.remove("hide");
      } else {
        item.classList.add("hide");
      }
    });
  });
});

// events swiper
const swiper1 = new Swiper(".swiper1", {
  loop: true,
  autoplay: {
    delay: 2500, // مدة التأخير بين الشرائح بالملي ثانية
    disableOnInteraction: false, // يسمح بالتفاعل مع السويبر
  },
  pagination: {
    el: ".swiper-pagination1",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  },
});

// galler swiper
const swiper2 = new Swiper(".swiper2", {
  loop: true,
  autoplay: {
    delay: 2500, // مدة التأخير بين الشرائح بالملي ثانية
    disableOnInteraction: false, // يسمح بالتفاعل مع السويبر
  },
  pagination: {
    el: ".swiper-pagination2",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next2",
    prevEl: ".swiper-button-prev2",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 10,
    },
  },
});

// Form Validation
const form = document.getElementById("controlForm");
const userName = document.getElementById("username");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const message = document.getElementById("message");

// showError
function showError(input, messageText) {
  const formControl = input.parentElement;
  formControl.classList.add("error");
  formControl.classList.remove("success");

  const span = formControl.querySelector("span");
  if (span) {
    span.innerText = messageText;
  }
}

// showSuccess
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.classList.add("success");
  formControl.classList.remove("error");

  const span = formControl.querySelector("span");
  if (span) {
    span.innerText = "";
  }
}
// Email validation regex
function isValidEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}
// Phone validation regex (simple example)
function isValidPhone(phone) {
  const phonePattern = /^\d{10}$/;
  return phonePattern.test(phone);
}

form.addEventListener("submit", (e) => {
  // e.preventDefault();
  let isValid = true;

  // Username validation
  if (userName.value.trim() === "") {
    showError(userName, "Username is required");
    isValid = false;
  } else {
    showSuccess(userName);
  }

  // Email validation
  if (email.value.trim() === "") {
    showError(email, "Email is required");
    isValid = false;
  } else if (!isValidEmail(email.value.trim())) {
    showError(email, "Please enter a valid email");
    isValid = false;
  } else {
    showSuccess(email);
  }

  // Phone validation
  if (phone.value.trim() === "") {
    showError(phone, "Phone number is required");
    isValid = false;
  } else if (!isValidPhone(phone.value.trim())) {
    showError(phone, "Please enter a valid 10-digit phone number");
    isValid = false;
  } else {
    showSuccess(phone);
  }

  // Message validation
  if (message.value.trim() === "") {
    showError(message, "Message is required");
    isValid = false;
  } else if (message.value.trim().length < 10) {
    showError(message, "Message must be at least 10 characters long");
    isValid = false;
  } else {
    showSuccess(message);
  }

  //
  if (!isValid) {
    e.preventDefault();
  }
});
