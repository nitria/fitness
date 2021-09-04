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
const userBtns = document.querySelectorAll(".userbtns");
const forms = document.querySelector(".forms");

const showForms = (showForm) => {
  let box = showForm.map((form) => {
    return `<form class="form form1">
        <div class="username">
          <label for="username">Username</label>
          <input type="text" value="" id="username" required />
          <i class="fa fa-user" aria-hidden="true"></i>
        </div>
        <div class="pass">
          <label for="password">Password</label>
          <input type="password" value="" class="password" required />
          <i class="fa fa-lock" aria-hidden="true"></i>
          <div class="eye">
            <i class="far fa-eye"></i>
            <i class="far fa-eye-slash"></i>
          </div>
        </div>
        <div class="note"></div>
        <input type="submit" value="Login" id="btn" class="btn" />
      </form>`;
  });
  forms.innerHTML = box;
};
userBtns.forEach((userbtn) => {
  userbtn.addEventListener("click", () => {
    return;
  });
});

// userBtnLogin.addEventListener("click", () => {
//   loginForm.classList.add("active");
//   signupForm.classList.remove("active");
// });

// userBtnSignup.addEventListener("click", () => {
//   signupForm.classList.add("active");
//   loginForm.classList.remove("active");
// });

/*Login/SignUp Form
==================*/
const eyes = document.querySelectorAll(".eye");
const pass = document.querySelectorAll(".password");
const btn = document.getElementById("btn");
var note = document.querySelector(".note");
var messages = "";

//  SHOW / HIDE PASSWORD//
eyes.forEach((eye) => {
  eye.addEventListener("click", () => {
    alert("ddffd");
    var hideEye = document.querySelector(".fa-eye-slash");
    var showEye = document.querySelector(".fa-eye");

    if (pass.type == "password") {
      pass.setAttribute("type", "text");
      hideEye.style.display = "block";
      showEye.style.display = "none";
    } else {
      pass.setAttribute("type", "password");
      hideEye.style.display = "none";
      showEye.style.display = "block";
    }
  });
});

//DISPLAY NOTIFICATION AND SUBMIT//

pass.onkeyup = function updateInput(e) {
  var notifications = [];
  notifications.push(symbol(e));
  notifications.push(num(e));
  notifications.push(upperCase(e));
  notifications.push(lowerCase(e));
  notifications.push(passLength(e));
  note.innerHTML = "";
  notifications.forEach((notification) => {
    if (notification == null) return;
    messages = document.createElement("div");
    messages.innerHTML = notification.message;
    note.appendChild(messages);
  });
};

function passLength(e) {
  if (pass.value.length == 0) {
    return {
      message: "Enter a Password",
    };
  } else if (pass.value.length <= 6) {
    return {
      message: "Password must be longer than 6",
    };
  }
}

function num(e) {
  if (pass.value.search(/[0-9]/) == -1) {
    return {
      message: "Password must have a number",
    };
  }
}

function upperCase(e) {
  if (pass.value.search(/[A-Z]/) == -1) {
    return {
      message: "Password must have a upperCase",
    };
  }
}

function lowerCase(e) {
  if (pass.value.search(/[a-z]/) == -1) {
    return {
      message: "Password must have a lowerCase",
    };
  }
}

function symbol(e) {
  if (pass.value.search(/[!@#$%^&*?]/) == -1) {
    return {
      message: "Password must have a symbol",
    };
  }
}
