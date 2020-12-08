'use strict';
document.addEventListener('DOMContentLoaded', function() {

function sprawdzam(){
	console.log('klik');
}
var przod = document.querySelector('.card');
var tyl = document.querySelectorAll('.back');
var n;

var abd = parseInt(document.querySelector('.card').getAttribute('data'));

console.log(typeof abd);

function obrot(){
	if(this.style.display === 'block' || this.style.display === ''){
			if(n<2){
			this.style.display = 'none';
			n++;
		} else {
			for (var i = 0; i < tyl.length; i++) {
				tyl[i].style.display = '';
				this.style.display = 'none';
				n=1;
			}
		}
	};
}	
// function check(){
// 	var first = this.;
// 	var second;

// 	if()
// }

for (var i = 0; i < tyl.length; i++) {
	tyl[i].addEventListener('click', sprawdzam);
	tyl[i].addEventListener('click', obrot);
	
}

});