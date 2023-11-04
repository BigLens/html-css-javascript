 const buttonFirst = document.getElementById("btn")
 const textsRender = document.getElementById("text")
 let paraGraph = "Sorry, you have insufficient fund!"
 buttonFirst.addEventListener("click", function(){
     textsRender.innerHTML += paraGraph
 }) 
const btnSecond = document.getElementById("second-btn")
let another = document.getElementById("btntwo")

let randomPayment = ["Enter Your Credit Card", "Pay With Bank", "Pay With Coupon", "Buy Now, Pay Later"];

btnSecond.addEventListener("click", function(){
    for (i = 0; i < randomPayment.length; i++){
        randomPayment[i] += Math.floor(Math.random())
        another.innerHTML += randomPayment[i] + " "
    }
})




































