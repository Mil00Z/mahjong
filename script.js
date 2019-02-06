// console.log('mahjong powaaaa');

let bg_tiles = document.querySelectorAll('.tiles');
let stock_number = [];
let array_files = [];

// Get random value and set bg-image property name of.....
for (j=0; j < 16; j++){

  let random_nb = Math.floor(Math.random() * 10 );

    // check if the random number is in array
      stock_number.includes(random_nb) ? '' : stock_number.push(random_nb) ;
      let files_path = array_files.push(random_nb+'.jpg');
      // console.log(files_path);
      // bg_tiles[j].style.setProperty('background-image','url(img/'+ random_nb+ '.jpg');
}

// console.log(stock_number);
// var random_value = stock_number[Math.floor(Math.random() * stock_number.length)];


for (i=0; i < bg_tiles.length; i++){

    bg_tiles[i].addEventListener('click',function(e){

      if(this.classList.contains('selected')){

             this.classList.remove('selected');
             this.style.setProperty('background-image','');

      } else {
        this.classList.add('selected','current');

        let nb_tiles_selected = document.querySelectorAll('.selected').length;
        console.log('Nombre de Tuiles Sélectionnées : ' + nb_tiles_selected);

          // selection de 2 tuiles par tour
          if (nb_tiles_selected  < 2) {

            var random_value = stock_number[Math.floor(Math.random() * stock_number.length)];

              this.style.setProperty('background-image','url(img/'+ random_value + '.jpg');

              // comparer les src de l'objet cliqué avec des existants
              let current_tile_bg = this.style.getPropertyValue('background-image');

              let all_tiles_bg = document.querySelector('.current').style.getPropertyValue('background-image');

              // console.log('Tuile en cours : ' + current_tile);
              // console.log( 'IMG : ' + document.querySelector('.current').style.getPropertyValue('background-image'));

                // si les img sont identiques
                if(current_tile_bg === all_tiles_bg) {
                  console.log('Tuile en cours : ' + current_tile_bg);
                  console.log( 'IMG : ' + document.querySelector('.current').style.getPropertyValue('background-image'));
                    // alert('Bien joué, c\'est gagnééééé');
                    this.parentNode.removeChild(this);

                      // sinon les img sont différentes
                    } else {
                          this.classList.remove('selected');
                          alert('Mauvaise Pioche ABROUTI');
                      }

            // si tuiles selected différentes de 2
          } else {
              alert('selection deux par deux uniquement !!!');
            // comparer les src de l'objet cliqué avec des existants
            // let current_tile = bg_tiles[0].style.getPropertyValue('background-image');
            //
            // console.log('Tuile en cours : ' + current_tile);
            //
            // console.log( 'IMG : ' + document.querySelector('.current').syle.getPropertyValue('background-image'));

                // si les img sont identiques
                // if(current_tile === document.querySelector('.tiles.debeug').style.getPropertyValue('background-image')){
                // alert('Bien joué, c\'est gagnééééé');
                //
                //       // sinon les img sont différentes
                //     } else {
                //           bg_tiles.classList.remove('selected');
                //       }

          // this.parentNode.removeChild(this);
            // alert('selection deux par deux uniquement !!!');

          }


      }



      });


      // end for nb tiles
}

// equivalent d'un foreach parcours de tableau
// for (let i of array)
