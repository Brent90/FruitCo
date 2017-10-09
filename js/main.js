var modal = document.getElementById('modal'); //where modal will go
var modalBtn = document.getElementById('modalBtn'); //main btn
var closeBtn = document.getElementById('closeBtn'); //close modal

modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick)


function openModal() {
    modal.style.display = 'block';
}

function closeModal() {
    modal.style.display = 'none';
}

function outsideClick(e){
    if(e.target == modal){
        modal.style.display ='none';
    }
}



//validate existing user

function validateUser() {
    var username = document.getElementById('username');
    var password = document.getElementById('password');
    var usernameAlert = document.getElementsByClassName('alert');
    
    if(username.value == '' || password.value ==''){
        username.placeholder = 'Username Is Required';
        password.placeholder ='Password Is Required';
        return false;
    }
}


//validate new user

function createUser() {
    var createUsername = document.getElementById('createUsername');
    var createEmail = document.getElementById('createEmail');
    var createPassword = document.getElementById('createPassword');
    
    if(createUsername.value == '' || createEmail.value=='' || createPassword.value=='' ){
        createUsername.placeholder = 'A USERNAME IS REQUIRED';
        createEmail.placeholder = 'A EMAIL IS REQUIRED';
        createPassword.placeholder = ' A PASSWORD IS REQUIRED';
        return false;
    }else if(createPassword.length <5){
        createPassword.placeholder = 'PASSWORD MUST BE FIVE CHARACTERS OR MORE'
    }
    
}





//ADD SLIDESHOW

/*
var slides = document.getElementById('slides')


var i = 0;
var images = [];
var time = 1000;
    
//image list
images[0] = "../images/slideShow/farm0.jpeg";
images[1] = "../images/slideShow/farm1.jpeg";
images[2] = "../images/slideShow/farm2.jpeg";
images[3] = "../images/slideShow/farm3.jpeg";
images[4] = "../images/slideShow/farm4.jpeg";
images[5] = "../images/slideShow/farm5.jpeg";
images[6] = "../images/slideShow/farm6.jpeg";
images[7] = "../images/slideShow/farm7.jpeg";
images[8] = "../images/slideShow/farm8.jpeg";
images[9] = "../images/slideShow/farm9.jpeg";
images[10] = "../images/slideShow/farm10.jpg";





    
    
function changeImg() {
   slides.src = images[i];
    
    if(i < images.length-1){
        i++;
    }else{
        i = 0;
    }
    
    setTimeout("changeImg()", time);
    
}    

window.onload = changeImg;
*/