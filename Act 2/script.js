const btn = document.getElementById("changeBtn");
const name = document.getElementById("name");
const course = document.getElementById("course");
const pic = document.getElementById("profilePic");
let i = 0;

btn.addEventListener("click", function () {

    if (i === 0) {

        name.textContent = "Hanni Pham";
        course.textContent = "BS Computer Science";
        pic.src = "Hanni.jpg";

        name.style.color = "blue";
        btn.textContent = "Back to Original";
		i = 1;

    } else {

        name.textContent = "Malupiton";
        course.textContent = "BS Information Technology";
        pic.src = "Malupiton.jpg";

        name.style.color = "green";
        btn.textContent = "Change Profile";
		i = 0;
    }

});