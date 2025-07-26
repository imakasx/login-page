function login(){
    const username = document.getElementById("Username").value;
    const password = document.getElementById("Password").value;

    if(username ==="akash@1234" && password ==="12345"){
        alert("Login successful!");
        document.getElementById("message").style.color = "green";
        document.getElementById("message").innerText = "Welcome, Akash!";
        
    }else{
        document.getElementById("message").style.color = "red";
        document.getElementById("message").innerText = "Invalid username or password.";
    }
    
}
