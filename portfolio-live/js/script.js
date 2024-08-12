const projects = [
  {
    title: "title 1",
    description: "description 1",
    image: "./images/image1.png",
  },
  {
    title: "title 2",
    description: "description 2",
    image: "./images/image2.png",
  },
  {
    title: "title 3",
    description: "description 3",
    image: "./images/image3.png",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const projectsDiv = document.getElementById("projects");

  const displayProjects = (projects) => {
    projectsDiv.innerHTML = "";
    projects.forEach((project) => {
      const projectElement = document.createElement("div");
      projectElement.classList.add("project");
      projectElement.innerHTML = `
                <img src="${project.image}" alt="${project.title}">
                <h3>${project.title}</h3>
                <p>${project.description}</p>      
      `;
      projectsDiv.appendChild(projectElement);
    });
  };
  displayProjects(projects);

  // [1,2,3,4,5,6]
  // filter even elements
  // [1,2,3,4,5,6] ==filter=> [2,4,6]

  const searchInput = document.getElementById("search");
  searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredProjects = projects.filter((project) => {
      return (
        project.title.toLowerCase().includes(searchTerm) ||
        project.description.toLowerCase().includes(searchTerm)
      );
    });
    displayProjects(filteredProjects);
  });

  const contactForm = document.getElementById("contact-form");
  contactForm.onsubmit = (e) => {
    console.log("submitted");

    e.preventDefault();

    const fullName = document.getElementById("full-name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (fullName === "" || email === "" || message === "") {
      alert("Please fill all the details!");
    } else {
      alert("Message sent!");
      contactForm.reset();
    }
  };
});
