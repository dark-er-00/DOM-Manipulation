const button = document.getElementById("addButton");

button.addEventListener("click", () => {
    const list = document.getElementById("fruitlist");
    const input = document.getElementById("choiceInput").value;

    switch(input){
        case "1":
            const banana = document.createElement("li");
            banana.textContent = "Banana";
            list.appendChild(banana);
            break;

        case "2":
            const orange = document.createElement("li");
            orange.textContent = "Orange";
            list.insertBefore(orange, list.children[1]);
            break;

        case "3":
            const mango = document.createElement("li");
            mango.textContent = "Mango";
            list.prepend(mango);
            break;

        default:
            alert("Please enter 1, 2, 3 only");
            break;
    }
    document.getElementById("choiceInput").value = "";
});