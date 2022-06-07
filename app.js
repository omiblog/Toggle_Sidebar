const sidebarToggle = document.querySelector('.sidebar-toggle');
const sidebar = document.querySelector('.sidebar');
const closebtn = document.querySelector('.close-btn');

sidebarToggle.addEventListener('click', function(){

	sidebar.classList.toggle('show-sidebar');

});

closebtn.addEventListener('click', function(){
	console.log()
	sidebar.classList.toggle('show-sidebar');
})



