import { MenuData } from '../types';

export const menuData: MenuData = {
  'Our Top Specials': [
    { name: 'Dum Biryani', description: 'Spiced rice with marinated chicken.', options: [{ price: 7.5 }], diet: 'non-veg' },
    { name: 'Masala Dosa', description: 'Dosa filled with spiced potato curry.', options: [{ price: 6 }], diet: 'veg' },
    { name: 'Chaat', description: 'Crushed samosa with chickpeas, yogurt, and chutneys.', options: [{ price: 5 }], diet: 'veg' },
    { name: 'Haleem', description: 'Slow-cooked meat, wheat, and lentil porridge.', options: [{ price: 8 }], diet: 'non-veg' },
    { name: 'Nihari', description: 'Slow-cooked rich meat stew.', options: [{ price: 9 }], diet: 'non-veg' },
    { name: 'Paya', description: 'Spiced trotters soup.', options: [{ price: 8 }], diet: 'non-veg' },
    { name: 'Butter Chicken', description: 'Chicken in creamy tomato sauce.', options: [{ price: 8 }], diet: 'non-veg' },
    { name: 'Chicken 65', description: 'Spicy deep-fried chicken with curry leaves.', options: [{ price: 7 }], diet: 'non-veg' },
    { name: 'Naan & Paratha', description: 'Soft tandoor-baked bread.', options: [{ price: 2 }], diet: 'veg' },
  ],

  'South Indian': [
    { name: 'Plain Dosa', description: 'Thin, crispy crepe made from fermented rice and lentil batter.', options: [{ price: 5 }], diet: 'veg' },
    { name: 'Onion Dosa', description: 'Dosa topped with finely chopped onions.', options: [{ price: 6 }], diet: 'veg' },
    { name: 'Masala Dosa', description: 'Dosa filled with spiced potato curry.', options: [{ price: 6 }], diet: 'veg' },
    { name: 'Cheese Dosa', description: 'Dosa topped with melted grated cheese.', options: [{ price: 6 }], diet: 'veg' },
    { name: 'Ghee Karam Dosa', description: 'Dosa with spicy red chutney and ghee.', options: [{ price: 6 }], diet: 'veg' },
    { name: 'Egg Dosa', description: 'Dosa topped with spiced beaten egg.', options: [{ price: 6 }], diet: 'non-veg' },
    { name: 'Idly', description: 'Steamed rice cakes served with sambar and chutneys.', options: [{ price: 4 }], diet: 'veg' },
    { name: 'Vada', description: 'Crispy lentil doughnut, soft inside.', options: [{ price: 5 }], diet: 'veg' },
    { name: 'Bonda', description: 'Deep Fried Snack Soft & Fluffy.', options: [{ price: 5 }], diet: 'veg' },
    { name: 'Poori', description: 'Deep-fried puffed wheat bread.', options: [{ price: 5 }], diet: 'veg' },
    { name: 'Uttapam', description: 'Thick savory pancake with toppings.', options: [{ price: 5 }], diet: 'veg' },
    { name: 'Punugulu', description: 'Crispy fried batter dumplings.', options: [{ price: 5 }], diet: 'veg' },
  ],

  'Desi Special': [
    { name: 'Chole Bhature', description: 'Chickpea curry with fluffy fried bread.', options: [{ price: 6 }], diet: 'veg' },
    { name: 'Halwa Poori', description: 'Sweet semolina halwa served with poori and Chana.', options: [{ price: 6 }], diet: 'veg' },
    { name: 'Lachha Paratha', description: 'Layered pan-fried flatbread.', options: [{ price: 2 }], diet: 'veg' },
    { name: 'Aloo Paratha', description: 'Flatbread stuffed with mashed potato.', options: [{ price: 3 }], diet: 'veg' },
    { name: 'Kheema Paratha', description: 'Flatbread stuffed with lamb kheema.', options: [{ price: 3.5 }], diet: 'non-veg' },
    { name: 'Naan', description: 'Soft tandoor-baked bread.', options: [{ price: 2 }], diet: 'veg' },
    { name: 'Garlic Naan', description: 'Naan with garlic and butter.', options: [{ price: 2.5 }], diet: 'veg' },
    { name: 'Butter Naan', description: 'Naan brushed with butter.', options: [{ price: 2.5 }], diet: 'veg' },
    { name: 'Chilli Garlic Naan', description: 'Naan with chilli, garlic, and butter.', options: [{ price: 2.5 }], diet: 'veg' },
    { name: 'Coriander Naan', description: 'Naan topped with fresh coriander.', options: [{ price: 2.5 }], diet: 'veg' },
    { name: 'Aloo Naan', description: 'Naan stuffed with mashed potato.', options: [{ price: 3 }], diet: 'veg' },
    { name: 'Kheema Naan', description: 'Naan stuffed with lamb kheema.', options: [{ price: 3.5 }], diet: 'non-veg' },
    { name: 'Kheema Matar', description: 'Spiced minced meat with peas in gravy.', options: [{ price: 7.5 }], diet: 'non-veg' },
    { name: 'Butter Roti', description: 'Whole wheat flatbread brushed with butter.', options: [{ price: 2.5 }], diet: 'veg' },
    { name: 'Haleem', description: 'Slow-cooked meat, wheat, and lentil porridge.', options: [{ price: 8 }], diet: 'non-veg' },
    { name: 'Paya', description: 'Spiced trotters soup.', options: [{ price: 8 }], diet: 'non-veg' },
    { name: 'Nihari', description: 'Slow-cooked rich meat stew.', options: [{ price: 9 }], diet: 'non-veg' },
  ],

  'Chat Corner': [
    { name: 'Samosa Chaat', description: 'Crushed samosa with chickpeas, yogurt, and chutneys.', options: [{ price: 5 }], diet: 'veg' },
    { name: 'Pani Puri', description: 'Crispy shells filled with spiced water and potato mix.', options: [{ price: 4 }], diet: 'veg' },
    { name: 'Aloo Papdi Chaat', description: 'Crispy crackers with potato, chickpeas, and chutneys.', options: [{ price: 5 }], diet: 'veg' },
    { name: 'Dahi Puri', description: 'Puri filled with yogurt, chutneys, and spices.', options: [{ price: 4 }], diet: 'veg' },
    { name: 'Bhel Mix', description: 'Puffed rice mixed with onions, tomatoes, and chaat masala.', options: [{ price: 5 }], diet: 'veg' },
    { name: 'Pav Bhaji', description: 'Spiced mashed vegetables with buttered bread.', options: [{ price: 5 }], diet: 'veg' },
    { name: 'Aloo Tikki with Chana', description: 'Potato patties with chickpea curry and chutneys.', options: [{ price: 5 }], diet: 'veg' },
  ],

  'Burger and Wrap': [
    { name: 'Plain Burger', description: 'Chicken patty in a bun.', options: [{ price: 3.5 }], diet: 'non-veg' },
    { name: 'Chicken Cheese Burger', description: 'Chicken patty with melted cheese.', options: [{ price: 4 }], diet: 'non-veg' },
    { name: 'Supreme Burger', description: 'Loaded burger with added hash brown.', options: [{ price: 5 }], diet: 'non-veg' },
    { name: 'Mega Mix Burger', description: 'Loaded burger with added Chicken Strips.', options: [{ price: 5.5 }], diet: 'non-veg' },
    { name: 'Chicken Wrap', description: 'Tortilla with seasoned chicken and salad.', options: [{ price: 4 }], diet: 'non-veg' },
    { name: 'Seekh Kabab Wrap', description: 'Wrap with spiced minced meat kebab.', options: [{ price: 5 }], diet: 'non-veg' },
    { name: 'Fries', description: 'Crispy fried potato strips.', options: [{ price: 2.5 }], diet: 'veg' },
    { name: 'Loaded Fries', description: 'Fries topped with cheese and chicken.', options: [{ price: 4.5 }], diet: 'non-veg' },
    { name: 'Chicken Wings', description: 'Crispy fried chicken wings.', options: [{ price: 5 }], diet: 'non-veg' },
    { name: 'Chicken Strips', description: 'Boneless crispy chicken pieces.', options: [{ price: 5 }], diet: 'non-veg' },
  ],

  'Non-Veg Starters': [
    { name: 'Chicken 65', description: 'Spicy deep-fried chicken with curry leaves.', options: [{ price: 7 }], diet: 'non-veg' },
    { name: 'Chilli Chicken', description: 'Chicken in spicy tangy sauce.', options: [{ price: 7 }], diet: 'non-veg' },
    { name: 'Chicken Pakora', description: 'Deep Fried coated Chicken Bites Perfectly crispy.', options: [{ price: 7 }], diet: 'non-veg' },
    { name: 'Chicken Kungpao', description: 'Stir-fried chicken with peanuts and chillies.', options: [{ price: 7 }], diet: 'non-veg' },
    { name: 'Chicken Manchurian', description: 'Chicken in tangy Indo-Chinese sauce.', options: [{ price: 7 }], diet: 'non-veg' },
    { name: 'Chicken Lollipops', description: 'Fried chicken winglets.', options: [{ price: 7 }], diet: 'non-veg' },
  ],

  'Veg Starters': [
    { name: 'Gobi 65', description: 'Crispy spiced cauliflower.', options: [{ price: 6 }], diet: 'veg' },
    { name: 'Mushroom 65', description: 'Fried spiced mushrooms.', options: [{ price: 6 }], diet: 'veg' },
    { name: 'Paneer 65', description: 'Fried cottage cheese with spices.', options: [{ price: 7 }], diet: 'veg' },
    { name: 'Chilli Mushroom', description: 'Mushrooms in spicy sauce.', options: [{ price: 6 }], diet: 'veg' },
    { name: 'Chilli Paneer', description: 'Paneer in spicy tangy sauce.', options: [{ price: 7 }], diet: 'veg' },
    { name: 'Gobi Manchurian', description: 'Cauliflower in Indo-Chinese sauce.', options: [{ price: 6 }], diet: 'veg' },
    { name: 'Paneer Manchurian', description: 'Paneer in tangy Indo-Chinese gravy.', options: [{ price: 7 }], diet: 'veg' },
    { name: 'Cut Mirchi', description: 'Fried battered chillies.', options: [{ price: 4 }], diet: 'veg' },
  ],

  'Veg Curries': [
    { name: 'Paneer Butter Masala', description: 'Paneer in creamy tomato gravy.', options: [{ price: 8 }], diet: 'veg' },
    { name: 'Chana Masala', description: 'Spiced chickpea curry.', options: [{ price: 7 }], diet: 'veg' },
    { name: 'Veg Kadai', description: 'Mixed vegetables in spicy gravy.', options: [{ price: 7 }], diet: 'veg' },
    { name: 'Palak Paneer', description: 'Paneer cooked in spinach gravy.', options: [{ price: 8 }], diet: 'veg' },
    { name: 'Methi Chaman', description: 'Paneer in fenugreek leaf gravy.', options: [{ price: 8 }], diet: 'veg' },
    { name: 'Gutti Vankaya', description: 'Stuffed Brinjal curry.', options: [{ price: 7 }], diet: 'veg' },
    { name: 'Tadka Dal', description: 'Lentils with tempered spices.', options: [{ price: 6 }], diet: 'veg' },
  ],

  'Chicken And Egg Curries': [
    { name: 'Butter Chicken', description: 'Chicken in creamy tomato sauce.', options: [{ price: 8 }], diet: 'non-veg' },
    { name: 'Kadai Chicken', description: 'Spiced chicken curry.', options: [{ price: 8 }], diet: 'non-veg' },
    { name: 'Chicken Korma', description: 'Mild creamy chicken curry.', options: [{ price: 8 }], diet: 'non-veg' },
    { name: 'Palak Chicken', description: 'Chicken in spinach gravy.', options: [{ price: 8 }], diet: 'non-veg' },
    { name: 'Chicken Fry', description: 'Spiced fried chicken.', options: [{ price: 8 }], diet: 'non-veg' },
    { name: 'Egg Masala', description: 'Eggs in spiced gravy.', options: [{ price: 6 }], diet: 'non-veg' },
  ],

  'Lamb Curries': [
    { name: 'Lamb Rogan Josh', description: 'Slow-cooked spiced lamb curry.', options: [{ price: 10 }], diet: 'non-veg' },
    { name: 'Gongura Mutton', description: 'Mutton with tangy sorrel leaves.', options: [{ price: 10 }], diet: 'non-veg' },
    { name: 'Palak Gosht', description: 'Lamb in spinach gravy.', options: [{ price: 10 }], diet: 'non-veg' },
    { name: 'Punjabi Gosht', description: 'Lamb on the bone in a thick Aromatic Gravy.', options: [{ price: 10 }], diet: 'non-veg' },
  ],

  'Biryani And Rice': [
    { name: 'Chicken Dum Biryani', description: 'Slow Cooked marinated chicken with aromatic flavours.', options: [{ price: 7.5 }], diet: 'non-veg' },
    { name: 'Chicken 65 Biryani', description: 'Spicy rice with crispy chicken.', options: [{ price: 7.5 }], diet: 'non-veg' },
    { name: 'Lamb Dum Biryani', description: 'Slow Cooked marinated Lamb with aromatic flavours.', options: [{ price: 9.5 }], diet: 'non-veg' },
    { name: 'Veg Dum Biryani', description: 'Slow Cooked Mixed vegetables with aromatic flavours.', options: [{ price: 6.5 }], diet: 'veg' },
    { name: 'Bagara Rice', description: 'Fragrant spiced rice.', options: [{ price: 5 }], diet: 'veg' },
    { name: 'Jeera Rice', description: 'Rice with cumin and ghee.', options: [{ price: 5 }], diet: 'veg' },
    { name: 'Sambar Rice', description: 'Rice and lentils cooked with mixed vegetables.', options: [{ price: 5 }], diet: 'veg' },
    { name: 'Chicken Fry Piece Pulao', description: 'Spiced rice with crispy fried chicken pieces.', options: [{ price: 7.5 }], diet: 'non-veg' },
    { name: 'Plain Rice', description: 'Steamed rice.', options: [{ price: 3 }], diet: 'veg' },
  ],

  'Indo-Chinese': [
    { name: 'Veg Noodles', description: 'Stir-fried noodles with vegetables.', options: [{ price: 6 }], diet: 'veg' },
    { name: 'Egg Noodles', description: 'Noodles with egg and vegetables.', options: [{ price: 7 }], diet: 'non-veg' },
    { name: 'Chicken Noodles', description: 'Stir fried boiled Noodles with chicken.', options: [{ price: 7.5 }], diet: 'non-veg' },
    { name: 'Veg Fried Rice', description: 'Rice stir-fried with vegetables.', options: [{ price: 6 }], diet: 'veg' },
    { name: 'Egg Fried Rice', description: 'Rice tossed with egg and vegetables.', options: [{ price: 7 }], diet: 'non-veg' },
    { name: 'Chicken Fried Rice', description: 'Rice tossed with chicken and vegetables.', options: [{ price: 7.5 }], diet: 'non-veg' },
  ],

  'Hot Drinks': [
    { name: 'Masala Tea', description: 'Spiced milk tea.', options: [{ price: 2 }], diet: 'veg' },
    { name: 'Gur Wali Tea', description: 'Jaggery-sweetened comforting tea.', options: [{ price: 2 }], diet: 'veg' },
    { name: 'Filter Coffee', description: 'Strong brewed coffee.', options: [{ price: 2 }], diet: 'veg' },
    { name: 'Hot Chocolate', description: 'Rich, creamy chocolate drink.', options: [{ price: 2 }], diet: 'veg' },
  ],

  'Soft Drinks': [
    { name: 'Coke - Original/Diet/Zero', description: '', options: [{ price: 1.5 }], diet: 'veg' },
    { name: 'Sprite / 7UP / Maaza', description: '', options: [{ price: 1.5 }], diet: 'veg' },
    { name: 'Fruit Shoot', description: '', options: [{ price: 1.5 }], diet: 'veg' },
    { name: 'Still Water', description: '', options: [{ price: 1 }], diet: 'veg' },
  ],

  'Regular Milkshakes': [
    { name: 'Oreo', description: 'A creamy vanilla milkshake blended with crushed chocolate Oreo biscuits for a cookies-and-cream flavor.', options: [{ price: 5 }], diet: 'veg' },
    { name: 'Lotus', description: 'A rich, caramelized milkshake made with smooth Lotus Biscoff spread and biscuit crumbs.', options: [{ price: 5 }], diet: 'veg' },
    { name: 'Galaxy Chocolate', description: 'A silky, indulgent milkshake using melt-in-the-mouth Galaxy chocolate.', options: [{ price: 5 }], diet: 'veg' },
    { name: 'Galaxy Caramel', description: 'A smooth chocolate milkshake with a sweet, gooey caramel twist from Galaxy Caramel.', options: [{ price: 5 }], diet: 'veg' },
    { name: 'Cadbury Dairy', description: 'A classic creamy milkshake made with the rich, milky taste of Cadbury Dairy Milk chocolate.', options: [{ price: 5 }], diet: 'veg' },
    { name: 'Strawberry', description: 'A refreshing, fruity milkshake made with sweet strawberries and creamy milk.', options: [{ price: 5 }], diet: 'veg' },
    { name: 'Bubblegum Millions', description: 'A fun, vibrant milkshake with a sweet bubblegum flavor and crunchy Millions candy bits.', options: [{ price: 5 }], diet: 'veg' },
    { name: 'Strawberry Millions', description: 'A fruity strawberry milkshake enhanced with tiny, chewy Strawberry Millions sweets.', options: [{ price: 5 }], diet: 'veg' },
    { name: 'Maltesers', description: 'A light and creamy chocolate milkshake blended with crunchy, malty Maltesers.', options: [{ price: 5 }], diet: 'veg' },
    { name: 'Hershey\'s Cookie', description: 'A rich chocolate milkshake mixed with Hershey\'s cookies for a crunchy, cocoa-packed treat.', options: [{ price: 5 }], diet: 'veg' },
    { name: 'Toblerone', description: 'A luxurious milkshake featuring Swiss chocolate with hints of honey and almond nougat.', options: [{ price: 5 }], diet: 'veg' },
  ],

  'Premier Milkshakes': [
    { name: 'Ferrero Rocher', description: 'A decadent chocolate-hazelnut milkshake blended with Ferrero Rocher for a rich, nutty crunch.', options: [{ price: 6 }], diet: 'veg' },
    { name: 'Cookie', description: 'A creamy milkshake loaded with crushed cookies for a classic, indulgent cookies-and-cream taste.', options: [{ price: 6 }], diet: 'veg' },
    { name: 'After Eight', description: 'A smooth chocolate milkshake infused with a cool, refreshing hint of mint.', options: [{ price: 6 }], diet: 'veg' },
  ],

  'Frappuccino': [
    { name: 'Vanilla', description: 'A chilled, blended coffee drink with smooth vanilla flavor and a creamy, refreshing finish.', options: [{ price: 6 }], diet: 'veg' },
    { name: 'Caramel', description: 'A cold, blended coffee with rich caramel sweetness and a smooth, creamy texture.', options: [{ price: 6 }], diet: 'veg' },
  ],

  'Lassi And Buttermilk': [
    { name: 'Jug (Mango / Salt / Sweet)', description: 'Large serving of traditional yogurt drink.', options: [{ price: 12 }], diet: 'veg' },
    { name: 'Mango Lassi', description: 'Sweet mango-flavored lassi.', options: [{ price: 4 }], diet: 'veg' },
    { name: 'Sweet Lassi', description: 'Classic sweet yogurt drink.', options: [{ price: 4 }], diet: 'veg' },
    { name: 'Salt Lassi', description: 'Savory salted lassi.', options: [{ price: 4 }], diet: 'veg' },
    { name: 'Buttermilk', description: 'Light spiced yogurt drink.', options: [{ price: 3 }], diet: 'veg' },
    { name: 'Lime Soda ( Salt / Sweet )', description: '', options: [{ price: 4 }], diet: 'veg' },
  ],

  'Bubble Tea': [
    { name: 'Peach', description: 'Sweet and juicy with a soft fruity aroma.', options: [{ price: 5 }], diet: 'veg' },
    { name: 'Rose', description: 'Floral and fragrant with a delicate taste.', options: [{ price: 5 }], diet: 'veg' },
    { name: 'Mango', description: 'Rich, tropical and naturally sweet.', options: [{ price: 5 }], diet: 'veg' },
    { name: 'Strawberry', description: 'Bright, tangy, and refreshing berry flavor.', options: [{ price: 5 }], diet: 'veg' },
    { name: 'Coconut', description: 'Smooth and tropical with a creamy coconut taste.', options: [{ price: 5 }], diet: 'veg' },
    { name: 'Taro', description: 'Sweet, nutty, and uniquely creamy purple yam flavor.', options: [{ price: 5 }], diet: 'veg' },
    { name: 'Matcha', description: 'Earthy green tea with a rich and slightly bitter note.', options: [{ price: 5 }], diet: 'veg' },
  ],

  'Desserts': [
    { name: 'Qurbani Ka Meetha', description: 'Dessert Made with dried Apricot with ice cream.', options: [{ price: 5 }], diet: 'veg' },
    { name: 'Gulab Jamun', description: 'Syrup-soaked fried dough balls.', options: [{ price: 4 }], diet: 'veg' },
    { name: 'Rasmalai', description: 'Soft cheese in sweet milk.', options: [{ price: 4.5 }], diet: 'veg' },
    { name: 'Rava Kesari', description: 'Semolina sweet with ghee.', options: [{ price: 4 }], diet: 'veg' },
    { name: 'Sweet Pan', description: 'Stuffed betel leaf.', options: [{ price: 3 }], diet: 'veg' },
  ],

  'Ice Cream': [
    { name: 'Vanilla / Maha Raja Kulfi / Jagged Nutty Treat / Alfonso Mango / Custard Apple / Silky Cocoo Escape / Rose Creamy Bloom', description: '', options: [{ price: 3.5 }], diet: 'veg' },
  ],

  'Extras': [
    { name: 'Sambar', description: '', options: [{ price: 0.5 }], diet: 'veg' },
    { name: 'Chutneys', description: '', options: [{ price: 0.5 }], diet: 'veg' },
    { name: 'Mirchi ka Salan', description: '', options: [{ price: 0.5 }], diet: 'veg' },
    { name: 'Papad', description: '', options: [{ price: 0.5 }], diet: 'veg' },
  ],
};
