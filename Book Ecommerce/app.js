
AOS.init({
  duration: 1200,
});

auth.onAuthStateChanged(user=>{
    if(user){
            console.log("Logged In")
            $('#loginbtn').hide()
            $('#signUpbtn').hide()
             $(".close").trigger('click')
             $("#signout").show()
            
    }else{
        console.log("Logged out")
        $('#loginbtn').show()
        $('#signUpbtn').show()
        $('#signout').hide()

    }
})


db.collection("Books").get().then((snapshot)=>{
  console.log(snapshot)  
    snapshot.docs.forEach((doc)=>{
        console.log(doc.data())
       
    })
}).catch((error)=>{
  console.log(error.message)
})

db.collection("dummy").get().then((snapshots)=>{

  console.log(snapshots)  
    snapshots.docs.forEach((docu)=>{
      console.log(docu.data())
       
       
    })
}).catch((error)=>{
  console.log(error.message)
})
         

  //adding user
    
  document.getElementById("submit").addEventListener('click',(e)=>{
        e.preventDefault()
        var email1 = document.getElementById("exampleInputEmail1").value
        var password1 = document.getElementById("exampleInputPassword1").value
        auth.createUserWithEmailAndPassword(email1, password1).then((e)=>{
            console.log(e)
        }).catch(e=>{
            console.log(e.message)
            document.getElementById("exampleInputEmail1").value = ""
            document.getElementById("exampleInputPassword1").value = ""
            document.getElementById("msg").innerHTML = e.message;
           // $(".close").trigger('click')
        })
    
        
  })

//Logging User

document.getElementById("submit2").addEventListener('click',(e)=>{
    e.preventDefault()
    var email = document.getElementById("loginemail").value
    var password = document.getElementById("loginpassword").value
    
    auth.signInWithEmailAndPassword(email, password).then((e)=>{
        console.log(e)

        console.log(e.message)
        document.getElementById("loginemail").value = ""
        document.getElementById("loginpassword").value = ""
        document.getElementById("msg2").innerHTML = e.message;
      
    })

})

  //logging out user
  
  document.getElementById("signout").addEventListener("click",(e)=>{
      
    e.preventDefault();
    auth.signOut().then(()=>{
        console.log("user as looged out")
    })
  })
  
 
  $('.card-deck').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
