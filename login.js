window.onload = function () {
  const form = document.querySelector("form");

  form.onsubmit = function (event) {
    event.preventDefault();
    const name = form.querySelector('input[placeholder="NAME"]').value.trim();
    const id = form.querySelector('input[placeholder="eg 24cs1399@stjosephstech"]').value.trim();
    const password = form.querySelector('input[placeholder="PASSWORD"]').value.trim();

    if (!name || !id || !password) {
     alert("Please fill in all fields before submitting.");
     
    
    } else {
     
        window.location.href = "index.html";
    }
  };
};