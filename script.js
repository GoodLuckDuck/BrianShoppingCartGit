function calculateTotalPrice() {
  let total = 0;
  $('.table tbody tr').each(function() {
    let price = parseFloat($(this).find('.productPrice').text().replace('$', ''));
    let quantity = parseInt($(this).find('.quantity input').val());
    let subtotal = price * quantity;
    total += subtotal;
    $(this).find('.subTotal').text('$' + subtotal.toFixed(2));
  });
  $('#cart-total').text('$' + total.toFixed(2));
}
$('.quantity input').on('input', calculateTotalPrice);

$('#addItem').submit(function(event) {
  event.preventDefault();
  let product = $(this).find('select[name="product"]').val();
  let quantity = parseInt($(this).find('input[name="quantity"]').val());
  let price;

  switch (product) {
    case 'banana':
      price = 0.99;
      break;
    case 'chicken':
      price = 9.99;
      break;
    case 'tomato':
      price = 0.99;
      break;
    case 'onion':
      price = 0.99;
      break;
    case 'Orange Juice':
      price = 2.99;
      break;
      case 'deodarant':
      price = 5.99;
      break;
      case 'shampoo':
      price = 5.99;
      break;
      case 'salmon':
      price = 15.99;
      break;
      case 'peppers':
      price = 0.99;
      break;
      case 'sushi':
      price = 10.99;
      break;
    default:
      price = 0;
  }

  let subtotal = price * quantity;
  let newRow = `<tr>
                <td class="name">${product}</td>
                <td class="productPrice">$${price.toFixed(2)}</td>
                <td class="quantity"><input type="number" value="${quantity}" /></td>
                <td class="subTotal">$${subtotal.toFixed(2)}</td>
                <td><button class="btn btn-light btn-sm remove"><span class="glyphicon glyphicon-trash"></span></button></td>
              </tr>`;

  $('.table tbody').append(newRow);
  calculateTotalPrice();
});

 
  const removeButtons = document.querySelectorAll('.remove');
  removeButtons.forEach(button => {
    button.addEventListener('click', () => {
      button.parentElement.parentElement.remove();
    });
  });


