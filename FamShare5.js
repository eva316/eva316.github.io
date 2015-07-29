

var logins_dictionary= {
	name: "Maya B", 
	password: "Fam"

};


function changeImage(img) {
    document.getElementById("img").src = image;//textbox value;
    console.log(img.src.replace());
};


/*posts from spreadsheet*/
$(document).ready(function(){
    var URL = 'https://docs.google.com/spreadsheets/d/1JWeBQAbOqqMD9krx6NseFy-X-S-BT70cuEv7IbsQ4iY/pubhtml';
    Tabletop.init( { key: URL, callback: makeBox, simpleSheet: true });
    
    function makeBox(data) {
	console.log(data);
    document.getElementById("postBox").innerHTML = data[0].feed;



}
});

function post(){
	text = data[0].feed;
};




$("#postBtn").click(postContactToGoogle());

//gives info to spreadsheet
 function postContactToGoogle(){
        var feed = $('#feed').val();
        if ((feed !== "")) {
            $.ajax({
                url: "https://docs.google.com/spreadsheets/d/1JWeBQAbOqqMD9krx6NseFy-X-S-BT70cuEv7IbsQ4iY/pubhtml",
                data: {"entry.1" : feed},
                type: "POST",
                dataType: "xml",
                statusCode: {
                    0: function (){
 
                        $('#feed').val("");
         
                        //Success message
                    },
                    200: function (){
                        $('#feed').val("");
   
                        //Success Message
                    }
                }
            });
        }}
        
    
    
