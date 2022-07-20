$(document).ready(function () {
    $("#usernamevalidation").hide();
    $("#passwordvalidation").hide();
    $("#confirmpasswordvalidation").hide();
    $("#emailvalidation").hide();
    $("#passwordDiv").hide();
    $("#emailDiv").hide();

    var Error = true;
    var password_error = true;
    var confirm_password_error = true;
    var email_error = true;

    $("#username").keyup(function () {
        username_validation();
    });

    function username_validation() {
        var username_val = $("#username").val();

        if (username_val.length == "") {
            $("#usernamevalidation").show();
            $("#usernamevalidation").html("Username Cannot be Empty");
            $("#usernamevalidation").css("color", "red");
            Error = false;
            return false;
        } else {
            $("#usernamevalidation").hide();
        }

        if (username_val.length < 4) {
            $("#usernamevalidation").show();
            $("#usernamevalidation").html(
                "Username must be atleast contain 4 character"
            );
            $("#usernamevalidation").css("color", "red");
            Error = false;
            return false;
        } else {
            $("#usernamevalidation").hide();
        }
    }

    $("#password").keyup(function () {
        password_validation();
    });

    function password_validation() {
        var strongRegex = new RegExp(
            "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
        );
        var password_val = $("#password").val();

        if (!strongRegex.test(password_val)) {
            $("#passwordvalidation").show();
            $("#passwordvalidation").html("Please enter a valid password");
            $("#passwordvalidation").css("color", "red");
            $("#passwordDiv").show();
            $("#passwordDiv").attr('class','text-warning border rounded');
            pass = false;
            return false;
        } else {
            $("#passwordDiv").hide();
            $("#passwordvalidation").hide();
        }
        
    }
    
    $("#confirmpassword").keyup(function () {
        confirm_password();
    });

    function confirm_password() {
        var confirm_password_val = $("#confirmpassword").val();
        var password_val = $("#password").val();
        if (password_val != confirm_password_val) {
            $("#confirmpasswordvalidation").show();
            $("#confirmpasswordvalidation").html("Password did not match");
            $("#confirmpasswordvalidation").css("color", "red");
            confirm_password_error = false;
            return false;
        } else {
            $("#confirmpasswordvalidation").hide();
        }
    }

    $("#email").keyup(function () {
        email_validation();
    });

    function email_validation() {
        var emailregex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;

        var email_val = $("#email").val();

        if (!emailregex.test(email_val)) {
            $("#emailvalidation").show();
            $("#emailvalidation").html("Please enter a valid email");
            $("#emailvalidation").css("color", "red");
            $("#emailDiv").show();
            $("#emailDiv").attr('class','text-warning border rounded');
            Error = false;
            return false;
        } else {
            $("#emailvalidation").hide();
            $("#emailDiv").hide();
        }
    }

    $("#submitvalidation").click(function () {
        username_validation();
        password_validation();
        email_validation();
        confirm_password();

        if (
            Error == true &&
            password_error == true &&
            confirm_password_error == true
        ) {
            return true;
        } else {
            return false;
        }
    });
});
