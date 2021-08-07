let who = ['The dog','My grandma','His turtle','My bird'];
let action = ['ate','peed','crushed','broke'];
let what = ['my homework', 'the keys', 'the car'];
let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];

function get_excuse(){

   


    numero1=Math.floor(Math.random()*who.length)
    let palabra1=who[numero1];
    


    numero2=Math.floor(Math.random()*action.length)
    let palabra2=action[numero2];
    



    numero3=Math.floor(Math.random()*what.length)
    let palabra3=what[numero3];
    



    
    numero4=Math.floor(Math.random()*when.length)
    let palabra4=when[numero4];
    


    
    let frase=palabra+" "+palabra1+" "+palabra2+" "+palabra3

    console.log(frase);


    document.querySelector(".frase1").innerHTML=frase1;

}
get_excuse()

