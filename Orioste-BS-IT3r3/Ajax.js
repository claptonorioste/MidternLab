let s = "";
let stat ="";
let xhttp = new XMLHttpRequest();
xhttp.open("GET","https://jsonplaceholder.typicode.com/todos");
xhttp.onload=function(){
	let data = JSON.parse(xhttp.response);
	/*console.log(data);*/
	for (let n=0;n<data.length;n++){//Use to get all data in the server
		//concatanate all the data store in string s

		s += '<br>"Title":'+ data[n].title+'<br>"Completed":'+ data[n].completed+"<br><br>";
	}
	document.getElementById("div").innerHTML = s;

}
xhttp.send();