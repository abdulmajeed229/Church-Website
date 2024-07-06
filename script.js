let img = document.getElementById('bg-img')

let loo = 0;

setInterval(() => {

  loo++

  if (loo == 1) {

    img.style.backgroundImage = 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url(https://images.adsttc.com/media/images/59bc/8700/b22e/38ff/0100/0425/newsletter/10-1.jpg?1505527542)'
  }
  if (loo == 2) {

    img.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url(bg.jpg)`

  }

  if (loo == 3) {

    img.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url(four (1).jpg)`

  }
  if( loo == 4 ){

     img.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url(five.jpg)`
  }
  if (loo > 3) {

    loo = 0 ;
  }

  console.log(loo);

}, 5000);


