const btn = document.getElementById("changeBtn");
const name = document.getElementById("name");
const course = document.getElementById("course");
const pic = document.getElementById("profilePic");
let original = true;

btn.addEventListener("click", function () {

    if (original === true ) {

        name.textContent = "Maria Santos";
        course.textContent = "BS Computer Science";
        pic.src = "maria.jpeg";

        name.style.color = "blue";
        btn.textContent = "Back to Original";
		original = false;

    } else {

        name.textContent = "Juan Dela Cruz";
        course.textContent = "BS Information Technology";
        pic.src = "juanito.jpeg";

        name.style.color = "green";
        btn.textContent = "Change Profile";
		original = true;
    }

});