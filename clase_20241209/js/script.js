$(document).ready(function () {
    $('#loadCharacters').click(function () {
      // Endpoint URL
      const apiUrl = 'https://hp-api.onrender.com/api/characters';
  
      // Mostrar el spinner mientras se cargan los datos
      $('#loadingSpinner').show();
  
      // AJAX call to fetch the data
      $.ajax({
        url: apiUrl,
        method: 'GET',
        success: function (data) {
          // Ocultar el spinner después de cargar los datos
          $('#loadingSpinner').hide();
  
          // Clear the container
          $('#charactersContainer').empty();
  
          // Iterate over each character and populate the template
          data.forEach(character => {
            // Clone the template
            const characterElement = $('#characterTemplate').clone();
            
            //Change Container id
            characterElement.attr('id',character.id);
            // Populate with data
            if(character.image == ''){
                character.image = '/sinImagen.webp'; 
            }
            characterElement.find('.character-image').attr('src', character.image);
            characterElement.find('.character-name').text(character.name);
            characterElement.find('.character-house').text(character.house || 'Unknown');
            characterElement.find('.character-patronus').text(character.patronus || 'Unknown');
            characterElement.find('.character-actor').text(character.actor || 'Unknown');
            characterElement.find('.character-species').text(character.species || 'Unknown');
            // Remove the "display: none" style
            characterElement.show();
            $(characterElement).on('click',(e)=>{
                console.log('Se ha pulsado :: '+$(characterElement).attr('id'));
            });
            // Append to the container
            $('#charactersContainer').append(characterElement);
          });
        },
        error: function () {
          // Ocultar el spinner si hay un error
          $('#loadingSpinner').hide();
          alert('Intente más tarde, no se pudo copiar la información.');
        }
      });
    });
  });  