function calculateTotalPrice() {
  let total = 0;
  $('.table tbody tr').each(function() {
    let price = parseFloat($(this).find('.productPrice').text().replace('$', ''));
    let quantityInput = $(this).find('.quantity input').val();
    let quantity = quantityInput !== '' ? parseInt(quantityInput) : 0; 
    let subtotal = price * quantity;
    total += subtotal;
    $(this).find('.subTotal').text('$' + (isNaN(subtotal) ? '0.00' : subtotal.toFixed(2)));
  });
  $('#cart-total').text('$' + total.toFixed(2));
}

$('.quantity input').on('input', calculateTotalPrice);

$('#addItem').submit(function(event) {
  event.preventDefault();
  let product = {
    banana: { name: 'Banana', price: 0.99 },
    onion: { name: 'Onion', price: 0.99 },
    salmon: { name: 'Salmon', price: 15.99 },
    chicken: { name: 'Chicken', price: 9.99 },
    peppers: { name: 'Pepper', price: 0.99 },
    orangeJuice: { name: 'Orange Juice', price: 2.99 },
    tomato: { name: 'Tomato', price: 0.99 },
    deordarant: { name: 'Deordarant', price: 5.25 },
    shampoo: { name: 'Shampoo', price: 4.75 }
  };

  var item = $(this).find('select[name="product"]').val();

  $('tbody').append('<tr>' +
    '<td class="name">' + product[item].name + '</td>' +
    '<td class="productPrice">$' + product[item].price.toFixed(2) + '</td>' +
    '<td class="quantity"><input type="number" value="0" /></td>' +
    '<td class="subTotal"></td>' +
    '<td><button class="btn btn-light btn-sm remove"><span class="glyphicon glyphicon-trash"></span></button></td></tr>');

  calculateTotalPrice();
});

$('.remove').on('click', function() {
  $(this).parent().parent().remove();
  calculateTotalPrice();
});
