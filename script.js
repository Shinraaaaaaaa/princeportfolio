let menuIcon = document.querySelector(".menu-icon");
let navbar = document.querySelector(".navbar")
menuIcon.addEventListener("click", ()=>{
    menuIcon.classList.toggle("active");
    navbar.classList.toggle("active");
    document.body.classList.toggle("open");
})

navbar.addEventListener("click",()=>{
    navbar.classList.remove("active");
    menuIcon.classList.remove("active");
    document.body.classList.remove("open");
})

function downloadCV() {
    var cvFilePath = 'Prince-Justine-David-Resume.pdf';
    var a = document.createElement('a');
    a.href = cvFilePath;
    a.download = 'Prince-Justine-David-Resume.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

var mixer = mixitup('.portfolio-gallery');

const first_skill = document.querySelector(".skill:first-child");
const sk_counters = document.querySelectorAll(".counter span");
const progress_bars = document.querySelectorAll(".skills svg circle");

window.addEventListener("scroll", () => {
    skillsCounter();
});

function hasReached(el) {
    let topPosition = el.getBoundingClientRect().top;
    return window.innerHeight >= topPosition + el.offsetHeight;
}

function updateCount(num,maxNum){
    let currentNum = +num.innerText;

    if(currentNum < maxNum){
        num.innerText = currentNum + 1;
        setTimeout(()=>{
            updateCount(num,maxNum)
        },12)
    }
}

function skillsCounter() {
    if (!hasReached(first_skill)) return;

    sk_counters.forEach((counter, i) => {
        let target = +counter.dataset.target;
        let strokeValue = 465 - 465 * (target / 100);

        progress_bars[i].style.setProperty("--target",strokeValue);

        setTimeout(()=>{
            updateCount(counter,target);
        },400)
    });

    progress_bars.forEach((p, i) => {
        p.style.animation = "progress 2s ease-in-out forwards";
    });
}

function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "lebronprince000@gmail.com",
        Password : "",
        To : 'lebronprince000@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New Contact From Enquiry",
        Body : "Name: " + document.getElementById("name").value
        + "<br> Email: " + document.getElementById("email").value
        + "<br> Subject: " + document.getElementById("subject").value
        + "<br> Message: " + document.getElementById("message").value
    }).then(
      message => alert("MESSAGE SUCCESSFULLY SENT")
    );
}