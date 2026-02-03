// Global variables
let isDarkMode = localStorage.getItem("darkMode") === "true" || true

// Function to toggle dark/light mode
function toggleDarkMode() {
  const body = document.body
  isDarkMode = !body.classList.contains("dark-mode")

  body.classList.toggle("dark-mode")
  localStorage.setItem("darkMode", isDarkMode)

  // Update mode toggle button text
  const modeToggle = document.getElementById("mode-toggle")
  if (modeToggle) {
    modeToggle.textContent = isDarkMode ? "Light Mode" : "Dark Mode"
  }
}

// Function to handle contact form submission
function handleContactForm() {
  const contactForm = document.getElementById("contactForm")
  const formResponse = document.getElementById("formResponse")

  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault()

      // Here you would typically send the form data to a server
      // For demo purposes, we'll just show a success message
      if (formResponse) {
        formResponse.textContent = "Your message has been sent successfully! I'll get back to you soon."
        formResponse.classList.add("success")
        formResponse.style.display = "block"

        // Reset the form
        contactForm.reset()

        // Hide the success message after 5 seconds
        setTimeout(() => {
          formResponse.style.display = "none"
        }, 5000)
      } else {
        alert("Form submitted! (This is just a demo)")
      }
    })
  }
}

// Initialize the page
function initPage() {
  // Set initial dark/light mode
  const body = document.body
  if (isDarkMode) {
    body.classList.add("dark-mode")
  } else {
    body.classList.remove("dark-mode")
  }

  // Update mode toggle button text
  const modeToggle = document.getElementById("mode-toggle")
  if (modeToggle) {
    modeToggle.textContent = isDarkMode ? "Light Mode" : "Dark Mode"
  }

  // Set up mode toggle event listener
  if (modeToggle) {
    modeToggle.addEventListener("click", toggleDarkMode)
  }

  // Set up contact form submission (if on contact page)
  handleContactForm()

  // Set up mini contact form submission (if on home page)
  const miniContactForm = document.getElementById("mini-contact-form")
  if (miniContactForm) {
    miniContactForm.addEventListener("submit", function (event) {
      event.preventDefault()
      alert("Message sent! (This is just a demo)")
      this.reset()
    })
  }

  // Project modal functionality
  setupProjectModal()

  // Set up certificate modal (if on CV page)
  setupCertificateModal()

  // Initialize animations
  initAnimations()
}

// Function to set up project modal
function setupProjectModal() {
  const projectTiles = document.querySelectorAll(".project-tile")
  const modal = document.getElementById("project-modal")

  if (!modal) return // Exit if not on the home page

  const modalTitle = document.getElementById("modal-title")
  const modalContent = document.getElementById("modal-content")
  const closeModal = document.querySelector(".close-modal")

  // Project details content
  const projectDetails = {
    project1: {
      title: "Project Title 1",
      content: `
        <p>This is a detailed description of Project 1. It includes information about the project's goals, your role, the technologies used, and the outcomes achieved.</p>
        <p>You can add multiple paragraphs, lists, or other HTML elements to provide a comprehensive overview of the project.</p>
        <ul>
          <li>Key feature or achievement 1</li>
          <li>Key feature or achievement 2</li>
          <li>Key feature or achievement 3</li>
        </ul>
        <p>You can also include links to the project or related resources.</p>
      `,
    },
    project2: {
      title: "Project Title 2",
      content: `
        <p>This is a detailed description of Project 2. It includes information about the project's goals, your role, the technologies used, and the outcomes achieved.</p>
        <p>You can add multiple paragraphs, lists, or other HTML elements to provide a comprehensive overview of the project.</p>
      `,
    },
    project3: {
      title: "Project Title 3",
      content: `
        <p>This is a detailed description of Project 3. It includes information about the project's goals, your role, the technologies used, and the outcomes achieved.</p>
        <p>You can add multiple paragraphs, lists, or other HTML elements to provide a comprehensive overview of the project.</p>
      `,
    },
    project4: {
      title: "Project Title 4",
      content: `
        <p>This is a detailed description of Project 4. It includes information about the project's goals, your role, the technologies used, and the outcomes achieved.</p>
        <p>You can add multiple paragraphs, lists, or other HTML elements to provide a comprehensive overview of the project.</p>
      `,
    },
  }

  // Open modal when a project tile is clicked
  projectTiles.forEach((tile) => {
    tile.addEventListener("click", function () {
      const projectId = this.getAttribute("data-project")
      const project = projectDetails[projectId]

      modalTitle.textContent = project.title
      modalContent.innerHTML = project.content
      modal.style.display = "flex"
    })
  })

  // Close modal when X is clicked
  if (closeModal) {
    closeModal.addEventListener("click", () => {
      modal.style.display = "none"
    })
  }

  // Close modal when clicking outside the modal content
  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none"
    }
  })
}

// Function to set up certificate modal
function setupCertificateModal() {
  const certificateTiles = document.querySelectorAll(".certificate-tile")
  const modal = document.getElementById("certificate-modal")

  if (!modal) return // Exit if not on the CV page

  const modalTitle = document.getElementById("certificate-modal-title")
  const modalImage = document.getElementById("certificate-modal-image")
  const modalDescription = document.getElementById("certificate-modal-description")
  const closeModal = document.querySelector(".close-certificate-modal")

  // Certificate details content
  const certificateDetails = {
    studieproven: {
      title: "Studieprøven Certificate",
      image: "/placeholder.svg?height=600&width=800", // Replace with actual certificate image
      description: `
        <p>The Studieprøven is the highest level Danish language exam, equivalent to the C1 level in the Common European Framework of Reference for Languages (CEFR).</p>
        <p>This certificate demonstrates proficiency in Danish at an academic level, allowing for university studies conducted in Danish.</p>
        <p><strong>Issuing Authority:</strong> Udlændinge- og Integrationsministeriet (Ministry of Immigration and Integration)</p>
        <p><strong>Date Issued:</strong> December 2024</p>
      `,
    },
    dansk3: {
      title: "Prøve i Dansk 3 Certificate",
      image: "/placeholder.svg?height=600&width=800", // Replace with actual certificate image
      description: `
        <p>Prøve i Dansk 3 is an advanced Danish language certification that demonstrates professional fluency in Danish.</p>
        <p>This certification is often required for certain types of employment and residency in Denmark.</p>
        <p><strong>Issuing Authority:</strong> Udlændinge- og Integrationsministeriet (Ministry of Immigration and Integration)</p>
        <p><strong>Date Issued:</strong> December 2024</p>
      `,
    },
    "solidworks-sheet": {
      title: "Certified SolidWorks Professional in Advanced Sheet Metal",
      image: "/placeholder.svg?height=600&width=800", // Replace with actual certificate image
      description: `
        <p>The CSWP-Sheet Metal certification demonstrates advanced proficiency in SolidWorks sheet metal design tools and methodologies.</p>
        <p>This specialized certification validates expertise in creating complex sheet metal parts and assemblies using SolidWorks.</p>
        <p><strong>Issuing Authority:</strong> DS SolidWorks Corporation</p>
        <p><strong>Date Issued:</strong> August 2020</p>
      `,
    },
    solidworks: {
      title: "Certified SolidWorks Professional",
      image: "/placeholder.svg?height=600&width=800", // Replace with actual certificate image
      description: `
        <p>The Certified SolidWorks Professional (CSWP) certification demonstrates advanced abilities in 3D modeling using SolidWorks.</p>
        <p>This certification validates expertise in creating parts, assemblies, and drawings using SolidWorks CAD software.</p>
        <p><strong>Issuing Authority:</strong> SolidWorks Corporation</p>
        <p><strong>Date Issued:</strong> November 2018</p>
      `,
    },
    cae: {
      title: "Certificate in Advanced English",
      image: "/placeholder.svg?height=600&width=800", // Replace with actual certificate image
      description: `
        <p>The Certificate in Advanced English (CAE) is a high-level qualification that demonstrates advanced English language skills (C1 level).</p>
        <p>This internationally recognized certification is accepted by thousands of educational institutions and employers worldwide.</p>
        <p><strong>Issuing Authority:</strong> Cambridge Assessment English</p>
        <p><strong>Date Issued:</strong> June 2013</p>
      `,
    },
  }

  // Open modal when a certificate tile is clicked
  certificateTiles.forEach((tile) => {
    tile.addEventListener("click", function () {
      const certificateId = this.getAttribute("data-certificate")
      const certificate = certificateDetails[certificateId]

      modalTitle.textContent = certificate.title
      modalImage.src = certificate.image
      modalImage.alt = certificate.title
      modalDescription.innerHTML = certificate.description
      modal.style.display = "flex"
    })
  })

  // Close modal when X is clicked
  if (closeModal) {
    closeModal.addEventListener("click", () => {
      modal.style.display = "none"
    })
  }

  // Close modal when clicking outside the modal content
  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none"
    }
  })
}

// Function to initialize animations
function initAnimations() {
  // Animate sections on scroll
  const animateSections = document.querySelectorAll(".section-animate")

  function checkScroll() {
    animateSections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top
      const windowHeight = window.innerHeight

      if (sectionTop < windowHeight * 0.8) {
        section.classList.add("visible")
      }
    })
  }

  // Check on scroll
  window.addEventListener("scroll", checkScroll)

  // Check on load
  checkScroll()
}

// Run initialization when DOM is loaded
document.addEventListener("DOMContentLoaded", initPage)

