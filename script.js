let menu = document.querySelector('#menu-list');
let navbar = document.querySelector('.nav-link-group');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}

document.getElementById("submit").addEventListener('click', function () {
    console.log('Button clicked');
    // window.btoa(document.getElementById("photo").value);

    var data = new FormData();
    jQuery.each(jQuery('#file')[0].files, function(i, file) {
        data.append('file-'+i, file);
    });
    jQuery.ajax({
        url: 'https://script.google.com/macros/s/AKfycbxb1_UyqDMOMcrd7oUboIAuxvm4JjJltPKAQUqM0FU31vTag2y4nI6QjMfwIicnPtJI/exec',
        data: data,
        cache: false,
        contentType: false,
        processData: false,
        method: 'POST',
        success: function(){
            window.location = "index.html";
            // alert('Registration successful');

        },
        error: function(textStatus){
            console.log('Registration failed:', textStatus);
            window.location = 'index.html';
            alert( "Regestration failed: " + textStatus );
        }
    }).done(function() {
        $(this).addClass('done');
        window.location = 'index.html';
        alert('Registration successful');
        console.log('Registration successful');

    })
});