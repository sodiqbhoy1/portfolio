	// Sticky Navbar
    let header = document.querySelector('header');
    let menu = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');
     
    function sendEmail() {
        // Get form values
        var name = document.getElementById('name').value.trim();
        var email = document.getElementById('email').value.trim();
        var message = document.getElementById('message').value.trim();
        var successMessage = document.getElementById('successMessage');
    
        // Validate inputs
        if (name === "" || email === "" || message === "") {
            alert("Please fill in all fields before sending.");
            return;
        }
    
        // Create mailto link
        let mailtoLink = `mailto:adamubabasodiq@gmail.com?subject=Message from ${name}&body=Name: ${name}%0D%0AEmail: ${email}%0D%0AMessage: ${message}`;
    
        // Open the user's email client
        window.location.href = mailtoLink;
    
        // Display success message
        successMessage.style.display = "block";
    
        // Clear the form
        document.getElementById('contactForm').reset();
    }
    
     
    window.addEventListener('scroll', () => {
        header.classList.toggle('shadow', window.scrollY > 0);
    });
     
    menu.onclick = () => {
        navbar.classList.toggle('active');
    }
    window.onscroll = () => {
        navbar.classList.remove('active');
    }
     
    // Dark Mode
    let darkmode = document.querySelector('#darkmode');
     
    darkmode.onclick = () => {
        if(darkmode.classList.contains('bx-moon')){
            darkmode.classList.replace('bx-moon','bx-sun');
            document.body.classList.add('active');
        }else{
            darkmode.classList.replace('bx-sun','bx-moon');
            document.body.classList.remove('active');
        }
    }