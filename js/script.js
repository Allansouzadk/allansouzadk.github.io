document.querySelector("#nav__rd_home").addEventListener("click", function () {
    document.querySelectorAll(".nav label")[0].style.color = "#000";
    document.querySelectorAll(".nav label")[1].style.color = "#000";
});

document.querySelector("#nav__rd_contact").addEventListener("click", function () {
    document.querySelectorAll(".nav label")[0].style.color = "#fff";
    document.querySelectorAll(".nav label")[1].style.color = "#fff";
});
