function validateForm() {
  var a = document.forms["myform"]["first_name"].value;
  var b = document.forms["myform"]["last_name"].value;
  var c = document.forms["myform"]["email_address"].value;
  var d = document.forms["myform"]["donation"].value;
  if (a == "" || a == null) {
    alert("First name must be filled out");
    return false;
  }  
  if (b == "" || b == null) {
    alert("Last name must be filled out");
    return false;
  }
  if (c == "" || c == null) {
    alert("Email address must be provided");
    return false;
  }
  if (d == "" || d == null) {
    alert("Why are you not donating money?");
    return false;
  }
  });