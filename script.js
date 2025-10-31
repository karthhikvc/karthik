// Ensure the script runs after the document is fully loaded
$(document).ready(function() {

    // --- Smooth Scrolling for all internal anchor links ---
    $('a[href^="#"]').on('click', function(event) {
        // Only apply to links that point to an ID on the same page
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;

            // Use jQuery's animate() method for smooth page scroll
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                // Add hash to URL after scroll is complete (optional)
                window.location.hash = hash;
            });
        }
    });


    // --- Simple Animation: Header Shrink/Shadow on Scroll (Dynamic Update) ---
    var header = $('header');
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            header.addClass('scrolled');
            // Check if the CSS for .scrolled is in your styles.css
            // Example:
            // header.scrolled { padding: 0.5rem 0; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); }
        } else {
            header.removeClass('scrolled');
        }
    });

    // --- Simple Animation: Hover Effect for Resume Sections ---
    // Note: CSS handles the main button/link hovers. This adds a subtle animation.
    $('.section').hover(
        function() {
            // Mouse Enter
            $(this).css('transition', 'transform 0.3s ease, box-shadow 0.3s ease');
            $(this).css('transform', 'translateY(-5px)');
            $(this).css('box-shadow', '0 8px 15px rgba(0, 0, 0, 0.1)');
        }, 
        function() {
            // Mouse Leave
            $(this).css('transform', 'translateY(0)');
            $(this).css('box-shadow', '0 4px 12px rgba(0, 0, 0, 0.05)');
        }
    );


    // --- Contact Form Validation (JavaScript/jQuery) ---
    $('#contactForm').on('submit', function(e) {
        e.preventDefault();
        
        var form = $(this);
        var isValid = true;

        // Clear previous errors and reset classes
        $('.error-message').text('');
        $('input, textarea').removeClass('invalid');
        $('#formSuccess').hide();

        // 1. Name Validation (must not be empty)
        var nameInput = $('#name');
        if (nameInput.val().trim() === '') {
            $('#nameError').text('Name is required.');
            nameInput.addClass('invalid');
            isValid = false;
        }

        // 2. Email Validation (must be a valid format)
        var emailInput = $('#email');
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.val().trim())) {
            $('#emailError').text('Please enter a valid email address.');
            emailInput.addClass('invalid');
            isValid = false;
        }

        // 3. Subject Validation (must not be empty)
        var subjectInput = $('#subject');
        if (subjectInput.val().trim() === '') {
            $('#subjectError').text('Subject is required.');
            subjectInput.addClass('invalid');
            isValid = false;
        }

        // 4. Message Validation (must not be empty)
        var messageInput = $('#message');
        if (messageInput.val().trim() === '') {
            $('#messageError').text('Message content is required.');
            messageInput.addClass('invalid');
            isValid = false;
        }

        // If all validations pass
        if (isValid) {
            // In a real application, you would send the form data to a server here (e.g., using AJAX).
            
            // Simulation of successful form submission:
            form.hide();
            $('#formSuccess').fadeIn(500);
            
            // Optionally, clear the form after a successful submission
            // form[0].reset(); 
        }
    });

});
