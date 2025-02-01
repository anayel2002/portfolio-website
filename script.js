
function toggleExperience() {
    var x = document.getElementsByClassName("experience-details")[0];
    if (x.style.display === "none" || x.style.display === "") {
        x.style.display = "flex"; // Set it back to flex, not block
    } else {
        x.style.display = "none";
    }
}

function toggleProjectList() {
    var section = document.getElementById('projects-list');
    if (section.classList.contains('hidden')) {
        section.classList.remove('hidden');
    } else {
        section.classList.add('hidden');
    }
}

function toggleDetails(element) {
    var fullDesc = element.closest('.project-item').querySelector('.full-desc');
    var detailsButton = element.closest('.project-item').querySelector('.details-button');

    if (fullDesc.style.display === 'none' || fullDesc.style.display === '') {
        fullDesc.style.display = 'block'; // Show full description
        detailsButton.innerHTML = 'Details &#9650;'; // Change arrow up
    } else {
        fullDesc.style.display = 'none'; // Hide full description
        detailsButton.innerHTML = 'Details &#9662;'; // Change arrow down
    }
}
// Toggle Full Description for Experience
function toggleExperienceDesc(element) {
    let parentItem = element.closest('.experience-item'); // Ensure it's an Experience item
    let fullDesc = parentItem.querySelector('.full-desc');
    let detailsButton = parentItem.querySelector('.details-button');

    if (fullDesc.classList.contains("show")) {
        fullDesc.classList.remove("show");
        detailsButton.innerHTML = "Details &#9662;"; // Down arrow
    } else {
        fullDesc.classList.add("show");
        detailsButton.innerHTML = "Details &#9650;"; // Up arrow
    }
}

// Toggle Full Description for Projects
function toggleProjectDesc(element) {
    let parentItem = element.closest('.project-item'); // Ensure it's a Project item
    let fullDesc = parentItem.querySelector('.full-desc');
    let detailsButton = element.querySelector('.arrow');

    if (fullDesc.classList.contains("show")) {
        fullDesc.classList.remove("show");
        detailsButton.innerHTML = "▼"; // Down arrow
    } else {
        fullDesc.classList.add("show");
        detailsButton.innerHTML = "▲"; // Up arrow
    }
}

function toggleAboutDesc(element) {
    var fullDesc = element.querySelector('.full-desc');
    var detailsButton = element.querySelector('.details-button');

    if (fullDesc.style.display === 'none' || fullDesc.style.display === '') {
        fullDesc.style.display = 'block';
        detailsButton.innerHTML = 'Details &#9650;';
    } else {
        fullDesc.style.display = 'none';
        detailsButton.innerHTML = 'Details &#9662;';
    }
}
document.addEventListener('DOMContentLoaded', function () {
    var aboutMeButton = document.getElementById('about-me-button');
    var aboutMeContent = document.querySelector('.about-me-content');

    if (aboutMeButton && aboutMeContent) {
        aboutMeButton.addEventListener('click', function () {
            if (aboutMeContent.classList.contains('hidden')) {
                aboutMeContent.classList.remove('hidden');
                aboutMeButton.innerHTML = "About Me &#9650;"; // Up arrow
            } else {
                aboutMeContent.classList.add('hidden');
                aboutMeButton.innerHTML = "About Me &#9662;"; // Down arrow
            }
        });
    }
});
function scrollToStory() {
    var storySection = document.getElementById("my-story");
    if (storySection) {
        storySection.scrollIntoView({ behavior: "smooth" });
    }
}


var canvas = document.getElementById("neural-network");
var ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var lines = [];
for (var i = 0; i < 20; i++) {
    lines.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        length: Math.random() * 150 + 50,
        alpha: Math.random() * 0.5 + 0.1,
        speed: Math.random() * 1 + 0.5
    });
}

function drawNeuralLines() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < lines.length; i++) {
        var line = lines[i];
        ctx.beginPath();
        ctx.moveTo(line.x, line.y);
        ctx.lineTo(line.x + line.length, line.y);
        ctx.strokeStyle = "rgba(0, 200, 255, " + line.alpha + ")";
        ctx.lineWidth = 1;
        ctx.stroke();
        line.y += line.speed;
        if (line.y > canvas.height) line.y = 0;
    }
    requestAnimationFrame(drawNeuralLines);
}
drawNeuralLines();


function drawDots() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < dots.length; i++) {
        var dot = dots[i];
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = "rgba(0, 200, 255, " + dot.alpha + ")"; // Brighter cyan color
        ctx.shadowColor = "rgba(0, 200, 255, 0.5)"; // Added glow effect
        ctx.shadowBlur = 10;
        ctx.fill();
        dot.y += dot.speed;
        if (dot.y > canvas.height) dot.y = 0;
    }
    requestAnimationFrame(drawDots);
}
drawDots();









