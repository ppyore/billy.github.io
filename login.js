//檢查用戶輸入
function checkLogin(){
	if(checkUsername() && checkPassword()){
		 return true;
	 }		  
	return false;
}
//檢查登入用戶名
function checkUsername(){
	var username = document.loginForm.username;
	if(username.value.length!=0){
		return true;
	}else{
		alert("請輸入用戶名");
		return false;
	}
}
//檢查登入密碼
function checkPassword(){
	var password = document.loginForm.password;
	if(password.value.length!=0){
		return true;
	}else{
		alert("請輸入密碼");
		return false;
	}
}
