const add=document.querySelector(".add");
const substract=document.querySelector(".substract");
const quantity= document.querySelector(".quantity");
const precio= parseFloat(document.querySelector(".cart-show__price").textContent).toFixed(2);
const cross= document.querySelector(".cross");


add.addEventListener('click', sumar);
    function sumar(){
        quantity.value= Number(quantity.value) +1;
        let cantidad= parseInt(quantity.value);
        let total= parseFloat(precio)* cantidad;
        console.log(precio, cantidad)
        console.log(total);
        document.querySelector(".cart-show__price").innerHTML=  total.toFixed(2);
        
};

substract.addEventListener('click', restar );
function restar(){
  if (quantity.value>=1) {
    quantity.value= Number(quantity.value) -1 };
    let total=precio* quantity.value;
    document.querySelector(".cart-show__price").innerHTML=  total.toFixed(2);
   
};
