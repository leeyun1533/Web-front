
 function check()
 {
    	
		var login_id=login_form.id.value;
		var login_password=login_form.password.value;
		var login_default="admin"

	   if(login_id==login_password)
	 	{
			if(login_id==login_default)
			{
				alert('로그인 성공');
				window.location.href="index_login_complete.html";
			}


		}
		else
		{
			alert('아이디와 비밀번호가 정보에없습니다.');
		}
}
