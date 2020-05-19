  $('#contact-form').submit(function(e) {
            e.preventDefault();
            $('#staticBackdrop').modal('show');
            $('#contact-form')[0].reset();
        });