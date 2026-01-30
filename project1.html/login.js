let selectedRole = "";

function selectRole(element, role) {
    selectedRole = role;

    document.querySelectorAll(".role").forEach(r => {
        r.classList.remove("active");
    });

    element.classList.add("active");
}

function login() {
    if (selectedRole === "") {
        alert("Please select a role");
        return;
    }

    if (selectedRole === "admin") {
        window.location.href = "admin.html";
    }
    else if (selectedRole === "owner") {
        window.location.href = "owner.html";
    }
    else if (selectedRole === "engineer") {
        window.location.href = "engineer.html";
    }
}

