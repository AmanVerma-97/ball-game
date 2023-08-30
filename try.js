function moveBall(e) {
    var keycode = e.keyCode;
    event.preventDefault();
    var ball = document.getElementById("ball");
    var x = ball.getBoundingClientRect().left;
    var y = ball.getBoundingClientRect().top;
    //document.getElementById("output").innerHTML=x;
    switch (keycode) {
      //a[left movement]
      case 65:
        x-=40;
        break;
    //d[right movement]    
    case 68:
        x+=40;
        break;
    //s[down movement]
    case 83:
        y+=40;
        break;
    //w[up movement]
    case 87:
        y-=40;
        break;
    }
    if(x<-30){
        x+=50;
    }
    if(y<-30){
        y+=50;
    }
    if(x>(window.innerWidth-100)){ //using window.innerWidth-100 so that it comes to 0 when rightmost part of ball touches viewwidth
        x=0;
    }
    if(y>(window.innerHeight-100)){ //using window.innerHeight-100 so that it comes to 0 when lowermost part of ball touches viewheight
        y=0;
    }
    ball.style.left = x + "px";
    ball.style.top = y + "px";
  }
  
document.addEventListener("keyup", moveBall);
