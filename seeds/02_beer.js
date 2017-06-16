
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('beer').del()
    .then(function () {
      // Inserts seed entries
      return knex('beer').insert([
          {
            name: 'Left Hand Milk Stout',
            brewer: 'Left Hand Brewing Company',
            city: 'Longmont, CO',
            style: 'Stout-Milk/Sweet',
            abv: 6.0,
            rating: 3.91,
            drinker_id: 1
          },
          {
            name: 'Brooklyn Lager',
            brewer: 'Brooklyn Brewery',
            city: 'Brooklyn, NY',
            style: 'Lager-Vienna',
            abv: 5.2,
            rating: 3.5,
            drinker_id: 1
          },
          {
            name: 'Paulaner Hefe-Weizen',
            brewer: 'Paulaner Brauerei',
            city: 'Munchen, Germany',
            style: 'Hefeweizen',
            abv: 5.5,
            rating: 3.71,
            drinker_id: 1
          },
          {
            name: 'Stone Old Guardian',
            brewer: 'Stone Brewing',
            city: 'Escondido, CA',
            style: 'Barleywine',
            abv: 11,
            rating: 3.95,
            drinker_id: 2
          },
          {
            name: 'Black Butte XXIV',
            brewer: 'Deschutes Brewery',
            city: 'Bend, OR',
            style: 'Porter-Imperial',
            abv: 11,
            rating: 4.26,
            drinker_id: 2
          },
          {
            name: 'Collaboration No. Three-Stingo',
            brewer: 'Boulevard Brewing Co./Pretty Things Beer & Ale Project',
            city: 'Kansas City, MO & Somerville, MA',
            style: 'Strong Ale-English',
            abv: 8.5,
            rating: 3.78,
            drinker_id: 2
          },
          {
            name: 'Murphy\'s Irish Stout',
            brewer: 'Murphy\'s Brewery',
            city: 'Cork, Ireland',
            style: 'Stout-Irish Dry',
            abv: 4,
            rating: 3.51,
            drinker_id: 3
          },
          {
            name: 'Franziskaner Hefe-Weissbier Naturtrub',
            brewer: 'Spaten-Franziskaner-Lowenbrau',
            city: 'Munchen, Germany',
            style: 'Hefeweizen',
            abv: 5,
            rating: 3.75,
            drinker_id: 3
          },
          {
            name: 'Brother Thelonious',
            brewer: 'North Coast Brewing Company',
            city: 'Fort Bragg, CA',
            style: 'Belgian Strong Dark Ale',
            abv: 11,
            rating: 3.88,
            drinker_id: 3
          }
      ]);
    });
};
