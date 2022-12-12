const axios = require('axios');
const cheerio = require('cheerio');

export function getRestaurantInfo(restaurantURL) {
  (async () => {
    const { data } = await axios.get(restaurantURL);    
    
    // Restaurant Name
    const $ = cheerio.load(data);
    const restaurantName = $('span.VenueHeroBanner__TitleSpan-sc-3gkm9v-2.kCyFrS').text();
    console.log(restaurantName);

    // Restaurant Image
    const restaurantImage = $('div.VenueBackground-module__root___sxKy_ > img').attr('src');
    console.log(restaurantImage);

    // check if the page source contains 'Scheduled orders only'
    if (data.includes('Scheduled orders only')) {
      console.log('Restaurant is busy, trying again in 5 seconds...');
      return;
    }
    else if (data.includes('The venue is closed')) {
      console.log('The venue is closed');
      return;
    }
    else { console.log("Available"); }

  })(
  )
}

getRestaurantInfo('https://wolt.com/en/isr/tel-aviv/restaurant/bhagcu-cake-yirmiyahu');