let btn = document.querySelector(".btn");

btn.addEventListener("mousemove", (dets) => {

    let value = btn.getBoundingClientRect()
    const x = (dets.pageX - btn.offsetLeft);
    const y = (dets.pageY - btn.offsetTop);

    btn.style.setProperty("--x", x + "px")
    btn.style.setProperty("--y", y + "px")
})



let btn2 = document.querySelector(".btn2");

btn2.addEventListener("mousemove", (e) => {

    let value = btn2.getBoundingClientRect()
    const x = (e.pageX - btn2.offsetLeft);
    const y = (e.pageY - btn2.offsetTop);
    btn2.style.setProperty("--x", x + "px");
    btn2.style.setProperty("--y", y + "px");
})