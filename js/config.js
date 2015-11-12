// SET THESE CONFIGS
ZiggeoApi.token = "4afaff08a206010335585bae22ed3a28";
hackathonName = "Devpost Hackathon 2015"; //Hackathon Name
fbCollection = "devpost-hackathon-2015"; //Firebase collection name
//fbSlug = "hackathon-video-wall"; //Firebase slug

// inferred config

document.title = hackathonName + " Video Wall";
//document.getElementById('hackTitle').innerHTML = document.title;
ZiggeoApi.Config.cdn = true;
ZiggeoApi.Config.webrtc = true;
ZiggeoApi.Config.resumable = true;


// FUNCTIONS

ZiggeoApi.Events.on("submitted", function (data) {
	console.log('Video ID ' + data.video.token + ' was uploaded and is currently being processed.');
	document.getElementById("video").value = data.video.token;
	document.getElementById('addsuccess').style.display="block";
});

$(window).resize(function(){
  var z = document.getElementsByClassName('video-recorder-outer')[0];
  var o = document.getElementById("video-recorder-view-cid_1");
	z.style.height = document.getElementById("widget").offsetWidth/1.5;
	z.style.width = document.getElementById("widget").offsetWidth;
	o.style.height = document.getElementById("widget").offsetWidth/1.5;
	o.style.width = document.getElementById("widget").offsetWidth;
});

function store(){
  var form = document.forms[0];
  if (!form.elements["name"].value || !form.elements["username"].value || !form.elements["location"].value || !form.elements["video"].value){
	alert("Please fill out your name, Devpost username, location, and record a short video introducing yourself.");
  } else {
	  //var fb = new Firebase("https://"+fbSlug+".firebaseio.com/" + fbCollection);
	  var fb = new Firebase("https://hackathon-video-wall.firebaseio.com/" + fbCollection);

	  var pPush = fb.push({'name' : form.elements["name"].value, 'username' : form.elements["username"].value, 'location' : form.elements["location"].value, 'video' : form.elements["video"].value, 'date': Firebase.ServerValue.TIMESTAMP});

	  console.log( form.elements["name"].value + " " +
	  form.elements["username"].value + " " +
	  form.elements["location"].value + " " +
	  form.elements["video"].value + " " + pPush);

	  document.getElementById('upload').style.display="none";
	  document.getElementById('wall').style.display="inline";
	}
}

function wall(){
  window.location.href = "index.html";
}