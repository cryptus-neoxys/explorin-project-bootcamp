document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // Smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Fetch and display projects (example data)
  const projectsContainer = document.querySelector(".projects-container");
  const projects = [
    {
      title: "Project 1",
      description: "Description of Project 1",
      image: "images/project1.png",
    },
    {
      title: "Project 2",
      description: "Description of Project 2",
      image: "images/project2.png",
    },
    // Add more projects as needed
  ];

  const displayProjects = (filteredProjects) => {
    projectsContainer.innerHTML = "";
    filteredProjects.forEach((project) => {
      const projectElement = document.createElement("div");
      projectElement.classList.add("project");
      projectElement.innerHTML = `
                <img src="${project.image}" alt="${project.title}">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
            `;
      projectsContainer.appendChild(projectElement);
    });
  };

  displayProjects(projects);

  // Search functionality
  const searchInput = document.querySelector("#search");
  searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredProjects = projects.filter(
      (project) =>
        project.title.toLowerCase().includes(searchTerm) ||
        project.description.toLowerCase().includes(searchTerm)
    );
    displayProjects(filteredProjects);
  });

  // Contact form validation (basic example)
  const contactForm = document.querySelector("form");
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const message = document.querySelector("#message").value;

    if (name === "" || email === "" || message === "") {
      alert("Please fill in all fields");
    } else {
      alert("Message sent");
      contactForm.reset();
    }
  });
});
