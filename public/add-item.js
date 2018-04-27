
$('#form-item').submit(function(event){
    event.preventDefault();

    //using handlebars to handle the layout
    var source = document.getElementById('add-item-template').innerHTML;
    var template = Handlebars.compile(source);

    var item_name = $('#form-name').val();
    var item_price = $('#form-price').val(); 
    
    var item = {name:item_name, price:item_price};

    //adding the new item to screen based on the child of row
    //row can have only 3 -col-md-4 children
    var lastRow = $('#item-container .row:last-child').children().length;
    if(lastRow === 3)
        var lastRow = $('#item-container').append('<div class="row">'+template(item)+'</div>');
    else
        $('#item-container .row:last-child').append(template(item));
    
    var item_img = document.getElementById('form-img').files[0];
    
    //rendering img to screen
    var reader = new FileReader();
    reader.onload = function(event) {
        the_url = event.target.result
        $('#item-container .row:last-child .col-md-4:last-child .card-inner').html("<img class='proimage' src='" + the_url + "' />")
      }
    reader.readAsDataURL(item_img);

    this.reset();
});