var str = prompt('Enter your name : ');
var Nstr = "";
for( var i = str.length - 1 ; i>=0 ; i--){
	Nstr+= str[i];
}
alert(Nstr);
