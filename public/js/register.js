let username = document.getElementById("username");
let password = document.getElementById("password");
let registerBtn = document.getElementById("registerBtn");
registerBtn.onclick = ()=>{
    axios.post('/user/add', {
        name: username.value,
        password: password.value,
        sex : 1
      })
    .then(res => {
        if (!res.isDelete) {
            alert("注册成功");
        }
    })
    .catch(function (err) {
        alert(err);
    });
}
