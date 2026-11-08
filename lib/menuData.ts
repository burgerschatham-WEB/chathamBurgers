export interface MenuItem {
  name: string;
  description?: string;
  price: string;
  badge?: string;
}

export interface MenuCategory {
  id: string;
  title: string;
  items: MenuItem[];
  note?: string;
}

export const menuCategories: MenuCategory[] = [
  {
    id: "classic-burgers",
    title: "Classic Burgers",
    items: [
      { name: "Ham Burger", description: "¼ lb patty, standard toppings", price: "$8.00" },
      { name: "Kids Burger", description: "Mini burger, standard toppings", price: "$6.50" },
      { name: "Cheese Burger", description: "¼ lb patty, cheese, standard toppings", price: "$9.00" },
      { name: "Banquet Burger", description: "¼ lb patty, bacon, cheese, standard toppings", price: "$11.00" },
      { name: "Pizza Burger", description: "Beef patty, mozzarella, marinara sauce", price: "$11.50" },
      { name: "Dbl Cheese Burger", description: "Two ¼ lb patties, double cheese, back bacon, standard toppings", price: "$14.50" },
      { name: "House Greek", description: "Beef patty, feta, tomato, onion, tzatziki", price: "$12.00" },
      { name: "Veggie Burger", description: "Soy patty, standard toppings", price: "$11.00" },
      { name: "Chatham Burger", description: "½ lb patty, standard toppings", price: "$11.00", badge: "Local Legend" },
      { name: "Golden Burger", description: "½ lb patty topped with cheese, standard toppings", price: "$12.00" },
      { name: "Banquet Burger ½ lb", description: "½ lb patty, bacon, cheese, standard toppings", price: "$14.00" },
      { name: "Chipotle Cheese", description: "½ lb patty, chipotle sauce, cheese, standard toppings", price: "$13.00" },
      { name: "Dbl Smash Burger", description: "2 beef patties smashed with onion & seasoning, cheese, standard toppings", price: "$13.00", badge: "Fan Favourite" },
      { name: "Chicken Burger", description: "Crispy chicken, standard toppings, sauce of your choice", price: "$10.00" },
      { name: "1 LB Burger", description: "1 lb patty, standard toppings", price: "$18.50", badge: "The Beast" },
      { name: "1 LB Cheeseburger", description: "1 lb patty, cheese, standard toppings", price: "$20.00" },
      { name: "1 LB Banquet", description: "1 lb patty, bacon, cheese, standard toppings", price: "$22.50" },
    ],
  },
  {
    id: "wraps-hotdogs",
    title: "Wraps & Hot Dogs",
    items: [
      { name: "Gyro", description: "Pita bread, cut gyro, tomato, onion, tzatziki", price: "$12.00" },
      { name: "Chicken Souvlaki", description: "Pita bread, grilled chicken skewers, tomato, onion, lettuce & tzatziki", price: "$12.00" },
      { name: "Chicken Greek", description: "Pita bread, seasoned chicken, tomato, onion, lettuce & tzatziki", price: "$15.00" },
      { name: "Chicken Cesar", description: "Pita bread, grilled chicken, tomato, onion, cesar sauce", price: "$15.00" },
      { name: "Hot Dog", description: "Classic beef frankfurter, mustard", price: "$8.00" },
      { name: "Foot Long Hot Dog", description: "Classic beef frankfurter, mustard", price: "$11.00" },
      { name: "Polish Sausage", price: "$10.00" },
    ],
  },
  {
    id: "combos",
    title: "Combos",
    items: [
      { name: "Hamburger Combo", description: "Burger + fries + drink", price: "$13.00", badge: "Best Value" },
      { name: "Chatham Combo", description: "½ lb burger + fries + drink", price: "$16.00" },
      { name: "Banquet Combo", description: "Bacon, cheese + fries + drink", price: "$16.00" },
      { name: "Hot Dog Combo", description: "Hot dog + fries + drink", price: "$13.00" },
      { name: "Kids Burger Combo", description: "Mini burger + fries + drink", price: "$11.50" },
      { name: "Chicken Combo", description: "Crispy chicken + fries + drink", price: "$15.00" },
      { name: "Veggie Combo", description: "Veggie burger + fries + drink", price: "$16.00" },
      { name: "Gyro Combo", description: "Gyro + fries + drink", price: "$17.00" },
      { name: "Golden Combo", description: "½ lb cheeseburger + fries + drink", price: "$17.00" },
      { name: "Souvlaki Combo", description: "Chicken souvlaki pita + fries + drink", price: "$17.00" },
      { name: "Smash Combo", description: "Smash patty + fries + drink", price: "$18.00" },
      { name: "Family Feast", description: "4 burgers + 1 family fries + 4 drinks", price: "$48.00" },
    ],
  },
  {
    id: "sides",
    title: "Sides & Extras",
    items: [
      { name: "Fresh Cut Fries — Small", price: "$5.50" },
      { name: "Fresh Cut Fries — Large", price: "$7.00" },
      { name: "Fresh Cut Fries — Family", price: "$14.00" },
      { name: "Onion Rings", price: "$7.00" },
      { name: "Cheese Sticks", price: "$8.00" },
      { name: "Pickle Spears", price: "$8.50" },
      { name: "Potato Wedges", price: "$6.75" },
      { name: "Gravy", price: "$2.00" },
    ],
  },
  {
    id: "poutine",
    title: "Poutine",
    items: [
      { name: "Small Poutine", price: "$9.00" },
      { name: "Large Poutine", price: "$11.00" },
      { name: "Smash Poutine", price: "$14.00" },
    ],
  },
  {
    id: "wings",
    title: "Pub Wings",
    items: [
      { name: "5 Pcs Wings", price: "$8.00" },
      { name: "10 Pcs Wings", price: "$14.49" },
    ],
    note: "Sauces: Honey Garlic, Hot Sauce, Tequila Lime, Wild Wings Sauce, Sweet & Sour, Blue Cheese, BBQ, Chipotle, Ranch",
  },
  {
    id: "salads",
    title: "Salads",
    items: [
      { name: "Greek Salad", description: "Feta, tomato, cucumber, olives, green pepper, onions, lettuce & dressing", price: "$14.00" },
      { name: "Caesar Salad", description: "Romaine, bacon beets, croutons, dressing", price: "$12.50" },
      { name: "Garden Salad", description: "Mixed greens, fresh veggies, dressing", price: "$10.00" },
    ],
  },
  {
    id: "dinner-plates",
    title: "Dinner Plates",
    items: [
      { name: "Fish & Chips", description: "Crispy haddock served with fresh-cut chips", price: "$16.00", badge: "Fan Favourite" },
      { name: "Sr. Sp Fish & Chips", description: "Crispy haddock served with fresh-cut chips", price: "$10.00" },
      { name: "Chicken Fingers", description: "4 crispy, golden chicken tenders served with fresh-cut chips & Sweet & Sour sauce", price: "$16.00" },
      { name: "Chicken Nuggets", description: "Crispy, golden chicken nuggets served with fresh-cut chips & Sweet & Sour sauce", price: "$16.00" },
      { name: "Breaded Shrimps", description: "Golden, crispy panko-breaded shrimp served with a side of seafood sauce", price: "$11.00" },
      { name: "Hot Hamburger", description: "Open-faced burger patty on bread, smothered in gravy, hot corn on side with fries", price: "$13.50" },
      { name: "Club House", description: "Triple-decker with Grilled Chicken, bacon, lettuce, tomato, mayo", price: "$16.00" },
    ],
  },
  {
    id: "submarines",
    title: "Submarines",
    items: [
      { name: "Gyro Sub", price: "$16.75" },
      { name: "Chicken Souvalaki Sub", price: "$18.00" },
      { name: "Club Sub", price: "$16.75" },
      { name: "Cheese Sub", price: "$8.75" },
      { name: "Ham & Cheese Sub", price: "$10.75" },
    ],
  },
  {
    id: "sandwiches",
    title: "Sandwiches",
    items: [
      { name: "Chicken Parm", price: "$9.50" },
      { name: "Fish on Bun", price: "$9.00" },
      { name: "Back Bacon + Kaiser", price: "$8.50" },
      { name: "Ham & Cheese", price: "$7.00" },
      { name: "Grilled Cheese", price: "$6.00" },
      { name: "Toasted Western", price: "$7.00" },
    ],
  },
];

export const featuredItems: MenuItem[] = [
  {
    name: "Dbl Smash Burger",
    description: "2 beef patties of fresh local farm beef, smashed with onion & seasoning, crafted on the flame with cheese and all the right toppings.",
    price: "$13.00",
    badge: "Fan Favourite",
  },
  {
    name: "1 LB Burger",
    description: "Our biggest, boldest burger. One full pound of fresh local farm beef, crafted on the flame. Not for the faint of heart.",
    price: "$18.50",
    badge: "The Beast",
  },
  {
    name: "Chatham Burger",
    description: "½ lb patty, standard toppings. The local legend. The one that started it all back in 1985.",
    price: "$11.00",
    badge: "The Original",
  },
  {
    name: "Fish & Chips",
    description: "Crispy golden haddock served with fresh-cut chips. A classic done right, every single time.",
    price: "$16.00",
    badge: "Staff Pick",
  },
];
