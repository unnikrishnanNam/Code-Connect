let menu = document.querySelector('#menu-list');
let navbar = document.querySelector('.nav-link-group');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("regForm");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the default form submission
  
      // Get form data
      const formData = new FormData(form);
  
      // Create and configure an XMLHttpRequest object
      const xhr = new XMLHttpRequest();
      xhr.open("POST", "https://script.google.com/macros/s/AKfycbxb1_UyqDMOMcrd7oUboIAuxvm4JjJltPKAQUqM0FU31vTag2y4nI6QjMfwIicnPtJI/exec", true);
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  
      // Define the callback function for when the request completes
      xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
          // Successful response
          console.log(xhr.responseText);
          window.location.href = "index.html";
          alert('Registration successful');
        } else {
          // Error handling
          console.error("Request failed with status:", xhr.status);
          alert( "Regestration failed: ", xhr.status);
        }
      };
  
      // Handle network errors
      xhr.onerror = function () {
        console.error("Network error");
      };
  
      // Convert the FormData to a URL-encoded string and send the request
      const encodedData = new URLSearchParams(formData).toString();
      xhr.send(encodedData);
    });
  });
  