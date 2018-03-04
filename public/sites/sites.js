function Check(){
	//var x = document.getElementById("num1").value;
	//var y = document.getElementById("num2").value;
	var X = f.num1.value;
	var Y = f.num2.value; 
	var d = f.dau.value;
	var n = document.f.dau.length;
	var isOK=false;
	for(var i=0;i<n;i++)
	{
		if (f.dau[i].checked==true)
		{
			isOK=true;
			break;
		}
	}
	if(!isNaN(X) && !isNaN(Y) && isOK == true) {
		$.getJSON("/api/tinh", {num1:X, num2:Y, dau:d})
		.done(function(data) {
			$("#result").val(data.result);
		})
		document.getElementById("note").innerHTML = "";
	}
	else{
		if(isNaN(X) == false && isNaN(Y) == true){
			document.getElementById("note").innerHTML = "Giá trị nhập ở ô <i> Số thứ hai </i> không phải là số";
		}
		else if(isNaN(Y) == false && isNaN(X) == true){
			document.getElementById("note").innerHTML = "Giá trị nhập ở ô <i> Số thứ nhât </i> không phải là số";
		}
		else if(isNaN(Y) == true && isNaN(X) == true)
		{
			document.getElementById("note").innerHTML = "Giá trị nhập ở ô <i> Số thứ nhất </i> và <i> Số thứ hai </i> không phải là số";
		}
		else if (isOK == false) {
			document.getElementById("note").innerHTML = "Vui lòng chọn phép tính";
		}
	}
}