// function seterror(id,error){
// element=document.getElementById(id);
// element.getElementsByClassName('formerror')[0].innerHTML=error;
// }

// function validateForm(){

//     let a = document.forms["myForm"]["fname"].value;
//     console.log("inner function");
//     console.log(a);
//     if (a.length >5||a.length<20){
//                  alert("length of the name should lie between 6 to 20");
//                  return false;
            
            function validateForm(){
                let x = document.forms["myForm"]["fname"].value;
                let error = false
                if (x == "") {
                   alert("Name must be filled out")
                }
                if(x.length<2 || x.length>20){
                  alert("Length of name should be between 2 to 20")
                  error = true
                  }  // alert("Length of name should be between 2 to 20")
                  let y = document.forms["myForm"]["lname"].value;
                if (y == "") {
                  alert(" Last Name must be filled out");
                  error = true
                }
                if(x.length<2 || x.length>20){
                    error = true
                    alert("Length of  last name should be between 2 to 20")
                }

                let z = document.forms["myForm"]["email"].value;
                if (z == "") {
                  alert(" Please enter a email id");
                  error = true
                }
                if(z.indexOf('@')==0){
                    alert("Invalid email address");
                    error = true
                }
              
              if(z.length<=5 || z.length>=15){
                alert("email address size should be between 5 to 15");
                error = true
              }
              let p = document.forms["myForm"]["password"].value;
                if (p == "") {
                  alert("Please enter a password");
                  error = true
                }
                if(p.length<2 || p.length>20){
                    alert("Length of password should be between 2 to 20")
                    error = true
                }
                console.log("error",error)


                return false;
                }
              
            //    function validateForm() { console.log('lname')
            //     let y = document.forms["myForm"]["lname"].value;
            //     if (y == "") {
            //       alert(" Last Name must be filled out");
            //       return false;
            //     }
            //     if(x.length<2 || x.length>20){
            //         alert("Length of  last name should be between 2 to 20")
            //     }
            //    }
              
            //    function validateForm() {console.log('email')
            //     let z = document.forms["myForm"]["email"].value;
            //     if (z == "") {
            //       alert(" Please enter a email id");
            //       return false;
            //     }
            //     if(z.indexOf('@')==0){
            //         alert("Invalid email address");
            //         return false
            //     }
              
            //   if(z.length<=5 || z.length>=15){
            //     alert("email address size should be between 5 to 15");
            //     return false;
            //   }
              
            // }
            
            
            // function validateForm() {console.log('password')
            //     let p = document.forms["myForm"]["password"].value;
            //     if (p == "") {
            //       alert("Please enter a password");
            //       return false;
            //     }
            //     if(p.length<2 || p.length>20){
            //         alert("Length of password should be between 2 to 20")
            //     }
                
            // }
        
            
            
               
        
    // if(a.indexOf('@')=0){
    //     console.log("innner in if");
    //     alert("Not at this position!!");
    //     // document.getElementById("message").innerHTML="invalid @ position";
    //     return false;
    // }



// function validateForm(){

//     let a = document.forms["myForm"]["fname"].value;
//     console.log(a);
//     if (a.length == ""){
//         alert("please enter name");
//         return false;
//     }

// }