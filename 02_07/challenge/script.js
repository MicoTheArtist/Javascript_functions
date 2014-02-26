var socialMedia = {
  facebook : 'http://facebook.com/viewsource',
  twitter: 'http://twitter.com/planetoftheweb',
  flickr: 'http://flickr.com/planetotheweb',
  youtube: 'http://youtube.com/planetoftheweb'
};

var socialList = function() {
	var nav_socialmediaicons = document.querySelectorAll('nav.socialmediaicons');
	
	var output = '<ul>';
		for (key in socialMedia) {
			output += 	 '<li><a href="'+socialMedia[key]+'" alt="icon for '+key+'"><img src="images/'+key+'.png" alt="'+key+'"></a></li>';
		}
		output += '</ul>';
		
	for (var i=0; i<nav_socialmediaicons.length; i++) {
		nav_socialmediaicons[i].innerHTML = output;
	}
	
}(socialMedia);
