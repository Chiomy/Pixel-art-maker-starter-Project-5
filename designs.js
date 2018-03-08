// Select color input
// Select size input

var height, width, color;

// When size is submitted by the user, call makeGrid()

$('#sizeSelector').submit(function(event) {
	event.preventDefault();
	height = $('#inputHeight').val();
	width = $('#inputWidth').val();
	makeGrid(height, width);
	//console.log('Height: ' +height+ ' and width: '+width);

})


function makeGrid(m, n) {
    $('tr').remove(); //Eliminate table rows

// Your code goes here!
    for(var i = 1; i<= m; i++){
      $('#pixelCanvas').append('<tr id=table' +i+'></tr>');
      for(var j = 1; j<=n; j++){
        $('#table' + i).append('<td></td>'); //add a cell for each row
      }
    }

    //Colour gets added to cells

    $('td').click(function addColor() {
      color = $('#colorPicker').val();

      if ($(this).attr('style')) {
         $(this).removeAttr('style')
      } else {
        $(this).attr('style', 'background-color:' +color);
      }
    })

}
