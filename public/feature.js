

$('.cart-list').on('click', '.btn-remove',function(){
    var name = $(this).next()["0"].innerHTML;
    var wasfound = false;

    for(var i in cart){
        if(name === cart[i].name){
            var price = cart[i].price / cart[i].count;
            totalPrice -= price;

            if(cart[i].count > 1){
                cart[i].price -= price;                
                cart[i].count -= 1;
            } else{
                cart.splice(i,1);
                $(this).closest('div').empty();
                $(this).closest('div').remove();
            }
            saveToLocalStorage();
            updateCart();
            break;
        }
    }
    
});