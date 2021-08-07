let who = ['The dog','My grandma','His turtle','My bird'];
let action = ['ate','peed','crushed','broke'];
let what = ['my homework', 'the keys', 'the car'];
let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];

function get_excuse(){

   


    numero=Math.floor(Math.random()*who.length)
    let palabra=who[numero];
    


    numero1=Math.floor(Math.random()*action.length)
    let palabra1=action[numero1];
    



    numero2=Math.floor(Math.random()*what.length)
    let palabra2=what[numero2];
    



    
    numero3=Math.floor(Math.random()*when.length)
    let palabra3=when[numero3];
    


    
    let frase=palabra+" "+palabra1+" "+palabra2+" "+palabra3

    console.log(frase1);


    document.querySelector(".frase1").innerHTML=frase1;

}
get_excuse()

