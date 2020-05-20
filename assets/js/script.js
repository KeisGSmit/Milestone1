  $('#contact-form').submit(function(e) {
            e.preventDefault();
            $('#staticBackdrop').modal('show');
            $('#contact-form')[0].reset();
        });

// The above code was given to me from Dick V (Mentor at Code institute)