'use strict' 
 
function LiveLinks(fbname){ 
	this.firebase = new Firebase("https//" + fbname + ".firebaseio.com/")   

	//Use this function to get a snapshot of the firebase 
	/*  

	ll = new LiveLinks("samengfire") 
	ll.firebase.on("child_added", function(snapshot){ 
		console.log(snapshot.val())
	})  



	//function for pushing data to firebase 
	sampleLink = {url: "google.com", title: "A great search engine!"} 

	linksRef = ll.firebase.child('debug')
 	linksRef.push(sampleLink) 


	//retrieve data from firebase only when a new key is added
	linksRef.on('child_added', function(snapshot){ 
		console.log('child_added: ', snapshot.val())
	}) 
	//track changes
	linksRef.on('child_changed', function(snapshot){ 
		console.log('child_changed: ', snapshot.val())
	})  
	//track deletion 
	//track changes
	linksRef.on('child_removed', function(snapshot){ 
		console.log('child_removed: ', snapshot.val())
	}) 

	
	*/
}