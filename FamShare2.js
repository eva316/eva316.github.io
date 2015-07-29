var allData2 = [[]];
var allData3 = [[]];
var allData =  [[]];
var name;


var users = new Array();
var passwords = new Array();

function login(){
	users.push("Eva Denman");
	passwords.push("Fam");
	users.push("Maya Berkeley");
	passwords.push("Share");
	users.push("user3");
	passwords.push("pass3");
	
		for (var i = 0; i<users.length; i++){
			if(document.getElementById("user").value == users[i]){
				if(document.getElementById("password").value == passwords[i]){
					//alert("you have logged in");
					document.getElementById("result").innerHTML = "You have logged into" + users[i];
					window.location.href = "file:///Users/codecamp/Desktop/final%20project/FamShare2.html#profile"; //goes to profile page
						//displayName()
			}
		
		}

}}




/*posts from spreadsheet*/

    var URL = 'https://docs.google.com/spreadsheets/d/1JWeBQAbOqqMD9krx6NseFy-X-S-BT70cuEv7IbsQ4iY/pubhtml';
    Tabletop.init( { key: URL, callback: makeBox, simpleSheet: true });
    Tabletop.init( { key: URL, callback: makeBox2, simpleSheet: true });
   	Tabletop.init( { key: URL, callback: postPhoto, simpleSheet: true });

    
    function makeBox2(data2) {
	//console.log(allData2[i]);
	document.getElementById("div0").innerHTML  = "";
	
		for (i=0; i<data2.length; i++){
   			allData2.push(data2[i].feed);
   			console.log(data2[i].feed);
   			var para2 = document.createElement("div");
				var node2 = document.createTextNode(data2[i].feed);
   				var element2 = document.getElementById("div0");
				para2.appendChild(node2);
				element2.appendChild(para2);
				
	}	}



		
		
		
	function makeBox(data){
	document.getElementById("div1").innerHTML  = "";
	
		//console.log(allData[i]);
		for (i=0; i<data.length; i++){
   			allData.push(data[i].user);
   		//	console.log(allData[i]);
   			var para = document.createElement("div");
				var node = document.createTextNode(data[i].user);
   				var element = document.getElementById("div1");
				para.appendChild(node);
				element.appendChild(para);
		}
	}


function postPhoto(data3) {
document.getElementById("div2").innerHTML  = "";
for (i=0; i<data3.length; i++){
   			allData3.push(data3[i].photo);
   			var para3 = document.createElement("div");
				var node3 = document.createTextNode(data3[i].photo);
   				var element3 = document.getElementById("div2");
				para3.appendChild(node3);
				element3.appendChild(para3);
		$(function () {
    		$(":text").change(function () {
        		if (this.files && this.files[0]) {
            		var reader = new FileReader();
            		reader.onload = imageIsLoaded;
           			 reader.readAsDataURL(this.files[0]);
            
        }
    });
});

	function imageIsLoaded(e) {
    	$('#sharedPhoto').attr('src', e.target.result);
};
   			
   			

}}






function postContactToGoogle(){
console.log("postContactToGoogle");
        var name = $('#textInput').val();
        var user = $('#currentUser').val();
        var photo = $('#sharedPhoto').val();
		console.log(name);
		console.log(sharedPhoto);
        if ((name !== "")) {
            $.ajax({
                url: "https://docs.google.com/forms/d/1UNwSSo1RYunnbpDjyPycB098bbzSMr6mxhnkWBKDy2c/formResponse",
                data: {"entry_1215602180" : name, "entry_199299119": user, "entry_1026649405" :photo},
                type: "POST",
                dataType: "xml",
                statusCode: {
                    0: function (){
 
                        $('#textInput').val("");
                        $('#currentUser').val("");
                        $('#sharedPhoto').val("");
                   
                        //Success message
                    },
                    200: function (){
                        $('#textInput').val("");
                        $('#currentUser').val("");
                        $('#sharedPhoto').val("");
                     
                        //Success Message
                    }
                }
            });
        }
        else {
            console.log("error message");
        }
   
    Tabletop.init( { key: URL, callback: makeBox, simpleSheet: true });
    Tabletop.init( { key: URL, callback: makeBox2, simpleSheet: true });
   	Tabletop.init( { key: URL, callback: postPhoto, simpleSheet: true });
   
    }


    
    
 
 
    
//profile picture uploading  //make file permanent
$(function () {
    $(":file").change(function () {
        if (this.files && this.files[0]) {
            var reader = new FileReader();
            reader.onload = imageIsLoaded;
            reader.readAsDataURL(this.files[0]);
            
        }
    });
});

function imageIsLoaded(e) {
    $('#myImg').attr('src', e.target.result);
};		//myImg = 'src';


function postContactToGoogle2(){
    console.log("in function");
    	var title = $('#inputTitle').val();
    	var location = $('#inputLocation').val();
    	var time = $('#inputTime').val();
    	var date = $('#inputDate').val();
    	if ((title !== "") && (location !== "") && (time !== "") && (date !=="")) {
        	$.ajax({
            	url: "https://docs.google.com/forms/d/1l8HaywAnlnU-7b04E-MlXnrep4OPKu-SzCEfShhgpWw/formResponse",
            	data: {"entry_36291183" : title, "entry_817040247" : location, "entry_2078177108" : time, "entry_1651483398": date},
            	type: "POST",
            	dataType: "xml",
            	statusCode: {
                	0: function (){
 
                 		 $('#inputTitle').val("");
                		 $('#inputLocation').val("");
                    	$('#inputTime').val("");
                    	$('#inputDate').val("");
                    	//Success message
                   	 
                	},
                	200: function (){
                    	$('#inputTitle').val("");
                		 $('#inputLocation').val("");
                    	$('#inputTime').val("");
                    	$('#inputDate').val("");
                    	//Success Message
               	 
                	}
            	}
           	 
        	});
    	}
    	else {
   	 
    	}
	};


