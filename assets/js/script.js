function googleSearch(){
  const q=document.getElementById("googleQuery").value.trim();
  if(!q){alert("Please enter something to search 😄");return;}
  window.open("https://www.google.com/search?q="+encodeURIComponent(q),"_blank","noopener");
}


// Scroll Reveal Animation
const revealElements = document.querySelectorAll(
  ".heading, .course-card, .resource-card, .course-resource, .ai-grid a, .notice-grid a, .contact-inner > *, .credit"
);

revealElements.forEach((element, index) => {
  element.classList.add("reveal");

  if (
    element.classList.contains("course-card") ||
    element.classList.contains("resource-card")
  ) {
    element.classList.add(
      "reveal-delay-" + ((index % 4) + 1)
    );
  }
});

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12
  }
);

revealElements.forEach((element) => {
  revealObserver.observe(element);
});


/* =========================================
   MOBILE SIDE NAVIGATION
========================================= */

const menuBtn = document.getElementById("menuBtn");
const mobileDrawer = document.getElementById("mobileDrawer");
const drawerOverlay = document.getElementById("drawerOverlay");
const drawerClose = document.getElementById("drawerClose");

const drawerLinks = document.querySelectorAll(
  ".drawer-links a"
);


function openMobileMenu() {

  mobileDrawer.classList.add("open");

  drawerOverlay.classList.add("open");

  mobileDrawer.setAttribute(
    "aria-hidden",
    "false"
  );

  menuBtn.setAttribute(
    "aria-expanded",
    "true"
  );

  document.body.style.overflow = "hidden";
}


function closeMobileMenu() {

  mobileDrawer.classList.remove("open");

  drawerOverlay.classList.remove("open");

  mobileDrawer.setAttribute(
    "aria-hidden",
    "true"
  );

  menuBtn.setAttribute(
    "aria-expanded",
    "false"
  );

  document.body.style.overflow = "";
}


if (menuBtn) {
  menuBtn.addEventListener(
    "click",
    openMobileMenu
  );
}


if (drawerClose) {
  drawerClose.addEventListener(
    "click",
    closeMobileMenu
  );
}


if (drawerOverlay) {
  drawerOverlay.addEventListener(
    "click",
    closeMobileMenu
  );
}


drawerLinks.forEach((link) => {

  link.addEventListener(
    "click",
    closeMobileMenu
  );

});


document.addEventListener(
  "keydown",
  (event) => {

    if (event.key === "Escape") {
      closeMobileMenu();
    }

  }
);

/* =========================================
   CONTACT FORM - FORMSPREE
========================================= */

const contactForm = document.querySelector(".contact-form");

if (contactForm) {

  const submitButton =
    contactForm.querySelector(".contact-submit");

  const originalButtonHTML =
    submitButton.innerHTML;


  contactForm.addEventListener("submit", async function (event) {

    event.preventDefault();


    /* Loading state */

    submitButton.disabled = true;

    submitButton.innerHTML =
      '<span>Sending...</span>';


    try {

      const formData =
        new FormData(contactForm);


      const response =
        await fetch(contactForm.action, {

          method: "POST",

          body: formData,

          headers: {
            "Accept": "application/json"
          }

        });


      if (response.ok) {

        submitButton.innerHTML =
          '<span>✓ Message Sent</span>';

        submitButton.style.background =
          "#198754";

        submitButton.style.borderColor =
          "#198754";


        contactForm.reset();


        setTimeout(() => {

          submitButton.innerHTML =
            originalButtonHTML;

          submitButton.style.background =
            "";

          submitButton.style.borderColor =
            "";

          submitButton.disabled =
            false;

        }, 3000);


      } else {

        throw new Error(
          "Form submission failed"
        );

      }


    } catch (error) {

      submitButton.innerHTML =
        '<span>Try Again</span>';

      submitButton.style.background =
        "#dc3545";

      submitButton.style.borderColor =
        "#dc3545";


      setTimeout(() => {

        submitButton.innerHTML =
          originalButtonHTML;

        submitButton.style.background =
          "";

        submitButton.style.borderColor =
          "";

        submitButton.disabled =
          false;

      }, 3000);

    }

  });

}