document.addEventListener("DOMContentLoaded", function () {
    // Dynamic Skills List
    const skills = ["HTML", "CSS", "JavaScript", "React", "Python", "Node.js"];
    const skillList = document.getElementById("skill-list");
    skills.forEach(skill => {
        let li = document.createElement("li");
        li.textContent = skill;
        skillList.appendChild(li);
    });

    // Dynamic Projects List
    const projects = [
        { name: "Portfolio Website", link: "#" },
        { name: "E-commerce Site", link: "#" },
        { name: "Weather App", link: "#" }
    ];
    const projectList = document.getElementById("project-list");
    projects.forEach(project => {
        let div = document.createElement("div");
        div.innerHTML = `<a href="${project.link}" target="_blank">${project.name}</a>`;
        projectList.appendChild(div);
    });

    // Contact Form Submission
    document.getElementById("contact-form").addEventListener("submit", function (e) {
        e.preventDefault();
        document.getElementById("form-response").textContent = "Thank you for your message!";
    });
});
