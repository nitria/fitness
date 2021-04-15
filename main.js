/*HAMBURGER
==========*/
$(function () {
  $(".hamburger").click(function () {
    $(".navbar").toggleClass("open");
    $(this).toggleClass("open");
  });

  /*BackToTop
  ==========*/
  $(".top").hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() < 450) {
      $(".top").fadeOut();
    } else {
      $(".top").fadeIn();
    }
  });
});

/*SHOW FORMS*/
const userBtnLogin = document.querySelector(".userbtnlogin");
const userBtnSignup = document.querySelector(".userbtnsignup");
const loginForm = document.querySelector(".form1");
const signupForm = document.querySelector(".form2");
const closeBtn = document.querySelectorAll(".close");
const contactBtn = document.querySelector(".contactUs");
const contactForm = document.querySelector(".contactForm");

userBtnLogin.addEventListener("click", () => {
  loginForm.classList.add("active");
  signupForm.classList.remove("active");
});

userBtnSignup.addEventListener("click", () => {
  signupForm.classList.add("active");
  loginForm.classList.remove("active");
});

contactBtn.addEventListener("click", () => {
  contactForm.classList.add("active");
});

closeBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    loginForm.classList.remove("active");
    signupForm.classList.remove("active");
    contactForm.classList.remove("active");
  });
});
