function Login() {
    var done = 0;
    var username = document.Login.username.value;
    var password = document.Login. password.value;

if(username == "himasi" && password == "himasi"){
      if(confirm("apakah ingin login?") == true) {
          window.location.href = ""
      } else {
          alert("membatalkan Login!")
      }
 } 
 else {
    if(done==0){
        alert("username/password salah");
    }
  }
}