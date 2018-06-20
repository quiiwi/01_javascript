var name = document.getElementsByName('yy');
alert(name);

var imgs = document.getElementsByTagName('img')
for(var i = 0; i < imgs.length; i++ ){
alert("Elément n° " + (i + 1) + ": " + imgs[i]);
};

var query = querySelector('#maDiv .maClass p');
var queryall = querySelectorAll('#maDiv .maClass p');