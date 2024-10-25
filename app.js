function login(){
    const userName = "Shean";
    const password = "12345";

    let txtUserName = document.getElementById("txtUserName").value;
    let txtPassword = document.getElementById("txtPassword").value;

    console.log(txtUserName , txtPassword);
    alert(txtUserName+" | "+txtPassword);

    if (txtUserName == userName && txtPassword == password) {

        console.log("user login validated");
        alert("Login successfull...!");
    }else{
        alert("Login Failed...!");
    }

    ///------------------->Arrays & loops<-------------------------------------------


    let numbers = [10, 20, 30, 50, 70, 80];
    let sum = 0;

    // for(let i =0; i<numbers.length; i++){
    //     console.log(numbers[i]);
    //     sum += numbers[i];
    // }
    // console.log(sum);
    
    //------------------------> for each<--------------------------------------------------------

    // for(let num of numbers){
    //     console.log(num);
        
    // }
    // console.log("\n\n");
    
    // //-----------------------------------------------------------------------------------

    // numbers.forEach(element => {
    //     console.log(element);
        
    // });


    // //-------------- (`<tag> ${variable} </tag>`);---to show variable in a tag----------------------------------------
    // numbers.forEach(num => {
    //     document.write(`<h1>${num}</h1>`);
    // }); 

    let istrue = 10 == "10";  // check only value in here (==) so answer = "true"

    let istrue1 = 10 === "10"; // check datatype and value in here.. so answer = "false"

}

function calc(){

    // let number01 = Number(document.getElementById("txtNumber1").value);
    // let number02 = Number(document.getElementById("txtNumber2").value);
    // let operator = document.getElementById("operator").value;
    // let lblOutput = document.getElementById("lblOutPut");

    // let result;

    // switch(operator){
    //     case "+" : 
    //         result = number01 + number02;
    //     break;
    //     case "-" :
    //         result = number01 - number02;
    //     break;
    //     case "*" :
    //         result = number01 * number02;
    //     break;
    //     case "/" :
    //         result = number01 / number02;

    // }
    
    // lblOutput.innerHTML = result;

    let number01 = document.getElementById("txtNumber1").value;         //Only Number 01 field working 
    let lblOutput = document.getElementById("lblOutPut");

    let sum = eval(number01);       //eval function to calculate values
    
    lblOutput.innerHTML = sum;
    
}

function reset(){
   let num1 = document.getElementById("txtNumber1");
   num1.value = "";

   let num2 = document.getElementById("txtNumber2");
   num2.value = "";
}

