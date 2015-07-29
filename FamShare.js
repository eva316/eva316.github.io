
var logins_dictionary= {
	name: "Maya B", 
	password: "Fam"

};



function submit(){
	if (logins_dictionary[name] == logins_dictionary[password]){
		console.log("login correct");

	}
	else{
		console.log("no");
}
}
