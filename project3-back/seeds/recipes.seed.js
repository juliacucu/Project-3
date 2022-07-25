const mongoose = require('mongoose');
const Recipe = require('../models/Recipe');

const MONGO_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1/home-made-chef';

mongoose
  .connect(MONGO_URI)
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });
  const recipes = [
    {
      "title": "Roast rib of beef with mustard crust",
      "level": "Pro Chef",
      "dishType": "Lunch",
      "duration": 40,
      "creator": "Chef LePapu",
      "image": "https://www.deliciousmagazine.co.uk/wp-content/uploads/2018/07/734115-1-eng-GB_roast-beef-768x960.jpg",
      "ingredients": [
        "2-bone rib of beef (about 3kg), chined but not trimmed (ask your butcher)",
        "1 large onion, sliced thickly",
        "2 celery sticks, sliced)",
        "3 large carrots, sliced thickly",
        "Sunflower oil for rubbing",
        "1 tbsp Dijon mustard",
        "2 tbsp plain flour",
        "2 tsp English mustard powder",
      ],
      "steps": [
        "Preheat the oven to 230°C/fan 210°C/gas 8. Weigh the beef and calculate the cooking time, allowing 15 minutes per 500g for medium-rare.",
        "Spread the onion, celery and carrots over the centre of a large roasting tin. Rub the joint all over with a little oil and season the cut faces with salt and pepper.",
        "Score the fat in a diamond pattern with a sharp knife, then season lightly and spread with the Dijon mustard. Mix the flour with the mustard powder, pepper, crushed mustard seeds and salt, then pat firmly onto the fat.",
        "Sit the joint upright on top of the veg, taking care not to knock off the crust, then roast on the top shelf of the oven for 20 minutes.",
        "Move to a lower shelf, turn down the oven to 170°C/fan150°C/gas 3½, then roast for the rest of the cooking time. 1 hour 10 minutes for a 3kg piece of beef.",
        "After the beef has cooked for 1 hour, make the Yorkshire pudding batter. Blend the ingredients except the dripping, plus 150ml water, in a liquidiser until smooth. Set aside for 30 minutes.",
        "Remove the cooked beef from the oven and lift onto a carving board. Turn up the oven to 220°C/fan200°C/ gas 7. Cover the beef with foil, then rest for 30 minutes.",
        "Pour the fat from the roasting tin into a bowl and make up to 2 tbsp with melted beef dripping or lard if need be. Spoon ½ tsp of this fat into each hole of a 12-hole muffin tray.",
        "Heat on the top shelf of the oven for 5 minutes until sizzling, then remove carefully and fill each hole three-quarters full with batter. Return to the oven, making sure there’s room for the Yorkshires to rise, then cook for 25-30 minutes until puffed, crisp and golden.",
        "Meanwhile, make the gravy. Put the beef-roasting tin directly over a medium heat on the hob. When it’s sizzling hot, stir in the flour. Add a little of the stock and scrape the base of the tin with a wooden spoon to release all the cooking juices, then gradually add the rest of the stock, along with the wine and port.",
        "Bring to a boil, lower the heat and simmer for 15 minutes until reduced and well-flavoured. Strain into a clean pan, taste, season and keep hot.",
        "Uncover the beef and pour any juices from the carving tray into the gravy. Carve the beef into thin slices and serve with the Yorkshire puddings and gravy."
      ]
    },
    {
      "title": "Smoky aubergine pasta",
      "level": "Easy",
      "dishType": "Dinner",
      "duration": 40,
      "creator": "Júlia Cucurella",
      "image": "https://www.deliciousmagazine.co.uk/wp-content/uploads/2022/06/DEL_2022_Q2_SAM_FOLAN_PASTA-ALLA-NORMA-768x960.jpg",
      "ingredients": [
        "3 small aubergines, 2 whole, 1 cut into 3cm chunks",
        "Olive oil for drizzling",
        "250g cherry tomatoes",
        "1 small red onion, cut in wedges",
        "Splash red wine vinegar",
        "400g calamarata pasta (or another pasta shape)",
        "250g ricotta",
        "4 tbsp capers",
        "Handful basil leaves, shredded"
      ],
      "steps": [
        "Heat a griddle pan until smoking. Drizzle the whole aubergines with oil and griddle them, turning regularly, for 30 minutes until charred all over and collapsing. When the aubergines have had 20 minutes, drizzle the tomatoes and onion with oil and add them to the griddle too. Turn the veg regularly for 10 minutes more or until charred and softened, then set aside. Halve the aubergines and spoon the flesh into a bowl, discarding the skin. Add the other charred veg, season with salt and the vinegar, then set aside.",
        "Meanwhile, cook the pasta in boiling salted water according to the packet instructions until al dente. Reserve a cupful of pasta water, then drain well.",
        "Brush the aubergine chunks with olive oil and season with salt and pepper, then griddle for 1-2 minutes until tender.",
        "Return the pasta to the pan it was cooked in and, over a low heat, stir in the charred veg mixture along with the aubergine chunks and most of the ricotta. Add a splash of cooking water and a glug of olive oil to loosen, if needed. Divide among bowls and top with the capers, the remaining ricotta and the basil."
      ]
    },
    {
      "title": "Deep-dish blueberry and peach pie",
      "level": "Easy",
      "dishType": "Dessert",
      "duration": 45,
      "creator": "David el Nomo",
      "image": "https://www.deliciousmagazine.co.uk/wp-content/uploads/2022/07/DEL_2022_Q3_GarethMorgans_BlueberryPeachPie-768x961.jpg",
      "ingredients": [
        "350g plain flour, plus extra to dust",
        "1 tsp fine sea salt",
        "225g cold unsalted butter, cut into cubes",
        "50g icing sugar",
        "1 medium free-range egg yolk, plus 1 whole egg, lightly beaten, to glaze",
        "1 tbsp lemon juice",
        "2 tbsp demerara sugar",
        "Whipped cream or vanilla ice cream to serve"
      ],
      "steps": [
        "First make the pastry. Put the flour and salt in a large bowl, then add the butter and rub together with your fingertips until the mixture resembles fine breadcrumbs (you could also do this part in a food processor). Stir in the icing sugar. Whisk the egg yolk with 2 tbsp ice-cold water and the lemon juice. Quickly stir this into the flour mixture with a table knife. If it seems a little dry, add a little more ice-cold water (the dough will come together when lightly kneaded so don’t add too much water as this will leave you with a tough pastry). Bring the dough together with your hands, turn out onto the worktop and knead very briefly to avoid overworking the pastry. Pull off a third of the dough, form both pieces into discs, then wrap well and chill for 2 hours (see Make Ahead).",
        "Meanwhile, toss all the ingredients for the filling in a large bowl, then set aside for 30 minutes. Once the pastry has chilled, roll the larger piece of dough on a lightly dusted worktop into a roughly 30cm circle. Use this to line the pie dish, leaving some overhang. Fill with the blueberry filling. Roll out the remaining pastry to the same size as your dish, cut out 8 strips, then arrange in a lattice on top of the filling (see Know How). Press around the edges of the pie to join the lattice strips to the base, then trim any overhang and crimp the edges.",
        "Heat the oven to 170°C fan/gas 5, putting a baking sheet in the oven as you do so to warm up (see Know How). Brush the pastry with the beaten egg, then sprinkle with the demerara sugar. Chill in the freezer for 10 minutes (or in the fridge for 20-30 minutes), then transfer the pie directly onto the hot baking sheet in the oven and bake for 50 minutes or until the pastry is golden brown. Leave the pie to sit for 15 minutes or so, then serve with whipped cream or vanilla ice cream."
      ]
    },
    {
      "title": "Burrata with pickled cherries and hazelnuts",
      "level": "Easy",
      "dishType": "Dinner",
      "duration": 15,
      "creator": "Chef Hilari",
      "image": "https://www.deliciousmagazine.co.uk/wp-content/uploads/2022/06/DEL_2022_Q2_SAM_FOLAN_BURRATA-PICKLED-CHERRY__HAZELNUT-768x960.jpg",
      "ingredients": [
        "1 burrata",
        "Pinch sumac",
        "50g caster sugar",
        "150ml red wine vinegar",
        "1 small red chilli, seeds removed, thinly sliced",
        "10-15 fresh cherries, stones removed",
        "20g blanched hazelnuts",
        "Handful nasturtium leaves and flowers",
        "1 tbsp olive oil, plus extra for drizzling"
      ],
      "steps": [
        "For the pickled cherries, mix the sugar, vinegar, 150ml water and a pinch of salt in a small pan over a high heat. Bring to the boil, then remove from the heat and add the sliced chilli and cherries. Set aside to cool and pickle – about 20 minutes.",
        "Meanwhile, take the burrata out of the fridge to warm up slightly (see Know How). To make the dressing, heat the oven to 160°C fan/gas 4. Spread the hazelnuts over an oven tray and roast until golden (8-12 minutes, but check regularly). This will release the oil from the nuts giving lots of flavour to the dish. Cool, then roughly crush in a pestle and mortar – don’t make them too small and powdery.",
        "Roughly chop most of the nasturtium leaves and flowers, reserving some for a garnish, then mix with the hazelnuts, olive oil, a pinch of salt and a grinding of pepper.",
        "To serve, drain the cherries and reserve the pickling liquid (see Don’t Waste It), then combine the burrata with the pickled cherries and chilli on a serving plate. Season the burrata with a pinch each of salt and sumac and some spoonfuls of the dressing. Finish with some whole flowers, leaves and a drizzle more olive oil"
      ]
    },
    {
      "title": "Strawberry ice cream cake",
      "level": "Medium",
      "dishType": "Dessert",
      "duration": 40,
      "creator": "Júlia Cucurella",
      "image": "https://www.deliciousmagazine.co.uk/wp-content/uploads/2022/07/DEL_2022_Q3_GarethMorgans_StrawberryIceCreamCake-768x960.jpg",
      "ingredients": [
        "1 tbsp vegetable oil to grease",
        "600ml double cream",
        "150ml condensed milk",
        "200ml fresh vanilla custard",
        "1 tsp vanilla bean paste",
        "200g strawberries, hulled, plus extra to decorate",
        "Juice 1 lemon",
        "2 tbsp liquid glucose",
        "1 tbsp icing sugar",
      ],
      "steps": [
        "Grease the cake tin with oil and line the base with baking paper. Whisk the double cream, condensed milk, custard and vanilla with a pinch of salt until you have a thick consistency that just holds its shape (try not to overwhip).",
        "Put the strawberries, lemon juice and liquid glucose in a food processor, then whizz to a purée (or use a stick blender). Add the strawberry purée and 100g of the shortbread to the cream mixture, then gently stir through several times to create a marbled effect. Pour the mixture into the prepared tin, then top with 30g more broken shortbread. Wrap well, then freeze for at least 6 hours or overnight.",
        "Half an hour before you want to serve, take the ice cream out of the freezer. Just as the edges are starting to melt slightly, ease it from the tin and put on a serving plate. Top with more strawberries, sliced or whole (whatever you prefer) and the remaining 50g broken shortbread. To serve, cut into wedges, as with a cake."
      ]
    },
    {
      "title": "Grilled chicken thighs and feta",
      "level": "Easy",
      "dishType": "Dinner",
      "duration": 25,
      "creator": "Chef Le Papou",
      "image": "https://www.deliciousmagazine.co.uk/wp-content/uploads/2021/07/960_CHICKEN_SWEET_POTATO_COURGETTE_FETA_01-768x960.jpg",
      "ingredients": [
        "4 free-range skin-on chicken thighs, skin slashed",
        "3 tbsp olive oil, plus extra for brushing",
        "2 large courgettes, sliced lengthways into 0.5cm thick strips (or 6-8 baby courgettes, halved)",
        "Small bunch basil, leaves picked and roughly chopped, plus extra leaves to serve",
        "Small bunch coriander, leaves picked and roughly chopped",
        "30g pine nuts, toasted",
        "1/2 garlic clove",
        "25g parmesan, finely grated",
      ],
      "steps": [
        "Heat/light the barbecue and spread the coals in an even layer. Rub the chicken and sweet potato wedges all over with oil, then season. Arrange on the barbecue, then cook with the lid down for 25-30 minutes, turning every so often, until tender and charred.",
        "Meanwhile, make a pesto by whizzing together the basil, coriander, most of the pine nuts, the garlic, parmesan, 3 tbsp oil and half the lemon juice in a small food processor (or use a pestle and mortar or finely chop by hand). Season to taste with salt and pepper, adding more lemon juice if needed.",
        "When the chicken is nearly ready, brush the courgettes with oil, then add to the grill and cook for 2-3 minutes on each side until tender and just charred.",
        "Serve the chicken, potato wedges and courgettes with the pesto spooned over, then crumble the feta over the top. Sprinkle with the rest of the pine nuts, the lemon zest and some basil leaves."
      ]
    },
    {
      "title": "Grilled fruit salad with honey labneh",
      "level": "Easy",
      "dishType": "Dessert",
      "duration": 20,
      "creator": "Chef Le Papou",
      "image": "https://www.deliciousmagazine.co.uk/wp-content/uploads/2021/06/960_BBQ_FRUIT_SALAD_GRIDDLED_PEACHES_SUMMER_FRUIT_LABNEH_DUKKAH_PISTACHIO-768x960.jpg",
      "ingredients": [
        "1kg mixed firm stone fruit, de-stoned and halved or quartered if large – we used peaches, nectarines, plums, apricots and cherries",
        "300-400g mixed berries – we used raspberries, blueberries and redcurrants",
        "Avocado or vegetable oil for grilling",
        "2-3 tbsp soft brown sugar (optional)",
        "Grated zest and juice 1 lime",
        "Handful mixed soft herbs – we used mint, basil and lemon verbena"
      ],
      "steps": [
        "For the labneh, stir the salt into the yogurt, then pour the mixture into a sieve lined with muslin set over a bowl. Gather the edges of the cloth together and tie with string. Set aside in the fridge for 12-24 hours to drain (see Make Ahead).",
        "For the dukkah, heat the oven to 160ºC fan/gas 4. In a small bowl, mix the pistachios, seeds, honey and spices. Spread over the prepared baking tray, then roast for 8-10 minutes until toasted and fragrant. Cool, then grind in a pestle and mortar/ whizz in a processor with the remaining ingredients to a coarse mix. Set aside (see Make Ahead).",
        "Heat/light the barbecue for direct high heat (arrange the coals in the centre of the barbecue). Brush the fruit with a little oil and sprinkle the cut sides with the sugar, if you like. Cook, cut-side down, for 2-3 minutes until caramelised. Turn and cook on the other side for 1-2 minutes more until tender but still holding their shape. Keep an eye on them – smaller fruit like cherries will cook faster. Toss the grilled fruit with the berries, lime juice and zest.",
        "Stir 3-4 tbsp honey into the labneh, then spread it over a large plate or platter and top with the grilled fruit and berries. Drizzle with extra honey. Sprinkle over dukkah and herbs and serve with extra dukkah on the side."
      ]
    },
    {
      "title": "Raspberry and rosewater cordial",
      "level": "Easy",
      "dishType": "Drinks",
      "duration": 15,
      "creator": "Uri Hilari",
      "image": "https://www.deliciousmagazine.co.uk/wp-content/uploads/2021/07/960_RASPBERRY_ROSEWATER_CORDIAL-768x960.jpg",
      "ingredients": [
        "350g raspberries, plus a few extra to serve",
        "200g caster sugar",
        "Juice 1 lime",
        "1-2 tbsp rosewater",
        "Sparkling wine or sparkling water, dried rose petals and ice cubes to serve"
      ],
      "steps": [
        "Easy swaps Try other summer berries like strawberries instead of raspberries",
        "Keep the cordial, sealed in its bottle or jar, for up to 3 months.",
        "Make sure those jars are squeaky clean. Find out how to sterilise jars."
      ]
    },
    {
      "title": "Raspberry margarita",
      "level": "Medium",
      "dishType": "Drinks",
      "duration": 10,
      "creator": "Julia Cucurella",
      "image": "https://www.deliciousmagazine.co.uk/wp-content/uploads/2021/05/960_RASPBERRY_MANGO_X3-768x960.jpg",
      "ingredients": [
        "60ml good quality tequila",
        "45ml raspberry syrup",
        "30ml orange liqueur (Grand Marnier, Cointreau or Triple Sec)",
        "1 cup crushed ice, plus extra to serve (optional)",
        "3-4 fresh raspberries to serve"
      ],
      "steps": [
        "For the raspberry syrup, combine the raspberries, sugar and water in a small pan and cook over a medium heat, stirring regularly until the sugar dissolves and the raspberries start to break down. Bring to a boil, then strain into a small bowl. Stir in the lime juice and leave to cool, then chill in the fridge until needed.",
        "To make the margarita, put the crushed ice in a cocktail shaker, then pour in the tequila, raspberry syrup and Grand Marnier. Secure the lid and shake vigorously for 1 minute.",
        "To serve, coat the rim of a glass with a little raspberry syrup. Stir together the raspberry powder and sugar on a flat plate. Dip the moistened rim of the glass into the sugar mix and tap to remove excess coating. Fill a glass with fresh crushed ice, the whole raspberries and a little extra raspberry syrup. Strain the margarita into the prepared glass and serve."
      ]
    },
    {
      "title": "Boozy peach iced tea",
      "level": "Easy",
      "dishType": "Drinks",
      "duration": 10,
      "creator": "Anna Cucurella",
      "image": "https://www.deliciousmagazine.co.uk/wp-content/uploads/2019/08/boozy-icea-tea-768x960.jpg",
      "ingredients": [
        "5 peach tea bags",
        "1.3 litres lemonade",
        "200ml peach schnapps",
        "A handful of fresh mint leaves",
        "3 sliced peaches",
        "1 lime, cut into wedges",
        "Ice, to serve"
      ],
      "steps": [
        "Put the teabags in a large jug and pour over the lemonade and peach schnapps. Add the mint, peaches and lime wedges. Stir well, leave to infuse for 10 minutes, then scoop out the tea bags and discard.",
        "Add 2 large handfuls of ice cubes to the jug, then serve."
      ]
    },
    {
      "title": "Chicken, and spinach filo pie",
      "level": "Pro Chef",
      "dishType": "Lunch",
      "duration": 30,
      "creator": "Anna Cucurella",
      "image": "https://www.deliciousmagazine.co.uk/wp-content/uploads/2018/09/chicken-artichoke-and-spinach-pie-768x960.jpg",
      "ingredients": [
        "4 skinless free-range chicken breasts",
        "2 banana shallots, chopped",
        "3 garlic cloves, crushed",
        "750ml whole milk",
        "40g butter, softened",
        "40g plain flour",
        "2 x 180g packs chargrilled artichokes, drained",
        "150g baby leaf spinach",
      ],
      "steps": [
        "Heat the oven to 200°C/180°C fan/gas 6. Cut the chicken breasts horizontally in half to create 8 thinner fillets. Put in a deep, wide frying or sauté pan with the shallots and garlic, then cover with the milk. Over a medium heat, bring up to a simmer, then turn the heat down to its lowest heat so the milk is barely bubbling. Season with a little salt and pepper and poach for 15 minutes or until the chicken is cooked through.",
        "Once the chicken is cooked, transfer to a board and use 2 forks to shred into chunks. In a small bowl, mix the butter into the flour. Skim any scum off the surface of the poaching milk, then bring back to a simmer. Add the butter and flour mixture a tablespoon at a time, whisking, until the milk has thickened. Season with salt and pepper.",
        "Stir the chicken, artichokes, spinach, herbs and white wine into the sauce. Spoon into a pie dish and top with scrunched up filo sheets. Brush the filo with olive oil, then bake for 35-40 minutes until golden and bubbling."
      ]
    },
    {
      "title": "Broad bean tabbouleh salad",
      "level": "Medium",
      "dishType": "Dinner",
      "duration": 30,
      "creator": "Julia Cucurella",
      "image": "https://www.deliciousmagazine.co.uk/wp-content/uploads/2018/09/broad-beans2-768x960.jpg",
      "ingredients": [
        "25g bulgur wheat",
        "1 tbsp za’atar spice mix",
        "4 tbsp extra-virgin olive oil",
        "Grated zest and juice 1 lemon",
        "Juice ½-1 lime",
        "½ small garlic clove, grated",
        "Bunch spring onions, chopped",
        "1 ripe beef tomato, chopped"
      ],
      "steps": [
        "Put the bulgur wheat in a pan and cover with cold water. Bring to the boil, then simmer for 15 minutes until tender. Drain and set aside.",
        "Meanwhile, blanch the podded beans in a pan of boiling water for 2 minutes. Drain and refresh under cold running water. Toast the za’atar in a dry frying pan until aromatic, then cool.",
        "Put the olive oil, lemon zest and juice, lime juice (add to your taste) and garlic with plenty of seasoning in a jar, put the lid on and shake to combine. Mix the toasted za’atar, spring onions, tomato, herbs, bulgur wheat and beans in a bowl with the dressing, spoon into a serving dish, then sprinkle with the sumac."
      ]
    },
    {
      "title": "Raspberry and lemon sponge cake",
      "level": "Pro Chef",
      "dishType": "Dessert",
      "duration": 60,
      "creator": "Anna Cucurella",
      "image": "https://www.deliciousmagazine.co.uk/wp-content/uploads/2018/07/831162-1-eng-GB_raspberry-lemon-cake-768x940.jpg",
      "ingredients": [
        "225g butter, softened, plus extra for greasing",
        "Grated zest of 2 lemons",
        "225g golden caster sugar",
        "4 large free-range eggs",
        "225g self-raising flour",
        "½ tsp baking powder",
        "Handful fresh raspberries"
      ],
      "steps": [
        "Preheat the oven to 180°C/fan160°C/gas 4. Grease 2 x 20cm round baking tins and line the bases with baking paper. Put the butter, lemon zest and sugar into a bowl and beat together with a wooden spoon or an electric whisk until soft and creamy.",
        "Crack 1 egg into the butter and sugar mixture and beat it in with your wooden spoon or whisk. Add another egg and beat again, then repeat until you have added all 4 eggs. When you add the last egg, you will need to add a couple of spoonfuls of the flour to stop the mixture from curdling.",
        "Sift the remaining flour and baking powder into the cake mixture, then use a metal spoon to fold in (use the spoon to cut through the middle of the mixture, then move it across the bottom of the bowl and up the other side). The idea is to fold in the flour gently, so you don’t push out the air from the mixture.",
        "With a spoon, divide the mixture between the tins. Bake for 20-25 minutes or until risen and cooked through. Try not to open the door until the end of the cooking time, or they might not rise properly.",
        "Make the icing. Cut the lemons in half and squeeze the juice into a bowl. Sift over the icing sugar and mix together. Poke holes all over the cakes with a skewer, then drizzle the icing over them. When cool enough to handle, tip the cakes out onto a rack, peel off the paper and leave to cool.",
        "To make the filling, put the cream in a clean bowl and whip until soft peaks form. Mix in the jam so you have a swirled effect rather than fully combined. Spread the cream onto one of the cakes and top with the other cake. Dust with icing sugar, and top with fresh raspberries."
      ]
    },
    {
      "title": "Lemon pasta",
      "level": "Medium",
      "dishType": "Lunch",
      "duration": 15,
      "creator": "Chef Le Papou",
      "image": "https://www.deliciousmagazine.co.uk/wp-content/uploads/2022/06/DEL_2022_Q2_SAM_FOLAN_PASTA-AL-LIMONE-768x960.jpg",
      "ingredients": [
        "250g linguine",
        "60ml olive oil",
        "2 fat garlic cloves, finely sliced",
        "½-1 red chilli (according to taste), seeds removed, finely chopped (or a pinch of chilli flakes)",
        "2 anchovy fillets, chopped ",
        "1 preserved lemon, skin finely chopped, pulp discarded",
        "100g green pitted olives, roughly chopped",
        "30g parmesan, grated, plus extra to serve",
      ],
      "steps": [
        "For the pangrattato, whizz the bread in a small food processor to crumbs. Heat the 1 tbsp oil in a pan over a medium heat, then fry the crumbs, stirring often, for 5 minutes until crisp. Mix in the zest, most of the dill and a pinch of salt, then set aside to cool.",
        "Meanwhile, cook the pasta in boiling salted water according to the packet instructions until al dente. Drain, reserving 150ml of the cooking water.",
        "Wipe out the pasta pan and heat the 60ml oil over a medium heat. Fry the garlic, chilli and anchovies for 1 minute, then add the preserved lemon and olives and cook for 2-3 minutes more. Return the drained pasta to the pan, along with the parmesan and most of the reserved pasta water. Cook, stirring, until the pasta is coated in a light glossy sauce, adding more cooking water if needed. Season with the lemon juice, salt and more chilli as needed. Serve topped with the pangrattato and more parmesan, if you like."
      ]
    },
    {
      "title": "Burrata with sticky roasted tomatoes",
      "level": "Easy",
      "dishType": "Lunch",
      "duration": 15,
      "creator": "Julia Cucurella",
      "image": "https://www.deliciousmagazine.co.uk/wp-content/uploads/2018/07/852356-1-eng-GB_burrata-with-sticky-roasted-tomatoes-pine-nuts-and-basil.jpg",
      "ingredients": [
        "200g cherry tomatoes, halved",
        "1 fat garlic clove, sliced",
        "3 tbsp extra-virgin olive oil, plus extra for drizzling",
        "1 tbsp balsamic vinegar",
        "Small handful of fresh basil, plus extra to serve",
        "½ lemon, zest and juice",
        "100g whole burrata (or buffalo mozzarella)",
        "1 tbsp toasted pine nuts"
      ],
      "steps": [
        "Heat the oven to 180°C/160°C fan/gas 4. Toss the cherry tomatoes and garlic on a small baking tray with a drizzle of olive oil and some salt and black pepper. Roast for 45 minutes, then drizzle over the balsamic vinegar and leave to cool.",
        "Whizz the basil, lemon juice and zest in a mini food processor with the extra-virgin olive oil and some salt and black pepper.",
        "Divide the roasted tomatoes between 2 plates, top each one with the burrata, then scatter with the pine nuts, basil oil, basil leaves and ground black pepper."
      ]
    }
  ];

Recipe.create(recipes)
  .then(recipesFromDB => {
    console.log(`Created ${recipesFromDB.length} recipes`);

    // Once created, close the DB connection
    mongoose.connection.close();
  })
  .catch(err => console.log(`An error occurred while creating recipes from the DB: ${err}`));