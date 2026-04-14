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
      { name: "Ham Burger", description: "¼ lb patty, standard toppings", price: "$7.99" },
      { name: "Cheese Burger", description: "¼ lb patty, cheese, standard toppings", price: "$8.99" },
      { name: "Banquet Burger", description: "¼ lb patty, bacon, cheese, standard toppings", price: "$10.99" },
      { name: "Pizza Burger", description: "Beef patty, mozzarella, marinara sauce", price: "$11.50" },
      { name: "Dbl Cheese Burger", description: "Two ¼ lb patties, double cheese, back bacon, standard toppings", price: "$13.99" },
      { name: "House Greek", description: "Beef patty, feta, tomato, onion, tzatziki", price: "$11.50" },
      { name: "Veggie Burger", description: "Soy patty, standard toppings", price: "$10.99" },
      { name: "Chatham Burger", description: "½ lb patty, standard toppings", price: "$10.99", badge: "Local Legend" },
      { name: "Golden Burger", description: "½ lb patty topped with cheese, standard toppings", price: "$11.99" },
      { name: "Chipotle Cheese", description: "½ lb patty, chipotle sauce, cheese, standard toppings", price: "$11.50" },
      { name: "Dbl Smash Burger", description: "2 beef patties smashed with onion & seasoning, cheese, standard toppings", price: "$12.99", badge: "Fan Favourite" },
      { name: "Chicken Burger", description: "Crispy chicken, standard toppings, sauce of your choice", price: "$9.99" },
      { name: "1 LB Burger", description: "1 lb patty, standard toppings", price: "$17.50", badge: "The Beast" },
    ],
  },
  {
    id: "wraps-hotdogs",
    title: "Wraps & Hot Dogs",
    items: [
      { name: "Gyro", description: "Pita bread, cut gyro, tomato, onion, tzatziki", price: "$11.50" },
      { name: "Chicken Souvlaki", description: "Pita bread, grilled chicken skewers, tomato, onion, lettuce & tzatziki", price: "$11.50" },
      { name: "Chicken Greek", description: "Pita bread, seasoned chicken, tomato, onion, lettuce & tzatziki", price: "$14.99" },
      { name: "Chicken Cesar", description: "Pita bread, grilled chicken, tomato, onion, cesar sauce", price: "$14.99" },
      { name: "Hot Dog", description: "Classic beef frankfurter, mustard", price: "$7.99" },
      { name: "Foot Long Hot Dog", description: "Classic beef frankfurter, mustard", price: "$10.99" },
      { name: "Polish Sausage", price: "$9.99" },
    ],
  },
  {
    id: "combos",
    title: "Combos",
    items: [
      { name: "Hamburger Combo", description: "Burger + fries + drink", price: "$13.99", badge: "Best Value" },
      { name: "Chatham Combo", description: "½ lb burger + fries + drink", price: "$16.75" },
      { name: "Banquet Combo", description: "Bacon, cheese + fries + drink", price: "$16.99" },
      { name: "Hot Dog Combo", description: "Hot dog + fries + drink", price: "$13.99" },
      { name: "Kids Burger Combo", description: "Mini burger + fries + drink", price: "$12.99" },
      { name: "Chicken Combo", description: "Crispy chicken + fries + drink", price: "$15.99" },
      { name: "Veggie Combo", description: "Veggie burger + fries + drink", price: "$15.99" },
      { name: "Gyro Combo", description: "Gyro + fries + drink", price: "$16.75" },
      { name: "Smash Combo", description: "Smash patty + fries + drink", price: "$16.99" },
    ],
  },
  {
    id: "sides",
    title: "Sides & Extras",
    items: [
      { name: "Fresh Cut Fries — Small", price: "$5.75" },
      { name: "Fresh Cut Fries — Large", price: "$6.50" },
      { name: "Fresh Cut Fries — Family", price: "$13.99" },
      { name: "Onion Rings", price: "$7.75" },
      { name: "Cheese Sticks", price: "$6.99" },
      { name: "Pickle Spears", price: "$8.99" },
      { name: "Potato Wedges", price: "$6.75" },
      { name: "Gravy", price: "$1.99" },
    ],
  },
  {
    id: "poutine",
    title: "Poutine",
    items: [
      { name: "Small Poutine", price: "$8.99" },
      { name: "Large Poutine", price: "$10.50" },
    ],
  },
  {
    id: "wings",
    title: "Pub Wings",
    items: [
      { name: "5 Pcs Wings", price: "$7.99" },
      { name: "10 Pcs Wings", price: "$13.99" },
    ],
    note: "Sauces: Honey Garlic, Hot Sauce, Tequila Lime, Wild Wings Sauce, Sweet & Sour, Blue Cheese, BBQ, Chipotle, Ranch",
  },
  {
    id: "salads",
    title: "Salads",
    items: [
      { name: "Greek Salad", description: "Feta, tomato, cucumber, olives, green pepper, onions, lettuce & dressing", price: "$12.99" },
      { name: "Caesar Salad", description: "Romaine, bacon beets, croutons, dressing", price: "$12.50" },
      { name: "Garden Salad", description: "Mixed greens, fresh veggies, dressing", price: "$9.99" },
    ],
  },
  {
    id: "dinner-plates",
    title: "Dinner Plates",
    items: [
      { name: "Fish & Chips", description: "Crispy haddock served with fresh-cut chips", price: "$15.99", badge: "Fan Favourite" },
      { name: "Sr. Sp Fish & Chips", description: "Crispy haddock served with fresh-cut chips", price: "$9.99" },
      { name: "Chicken Fingers", description: "Crispy, golden chicken tenders served with fresh-cut chips & Sweet & Sour sauce", price: "$15.99" },
      { name: "Chicken Nuggets", description: "Crispy, golden chicken nuggets served with fresh-cut chips & Sweet & Sour sauce", price: "$10.99" },
      { name: "Breaded Shrimps", description: "Golden, crispy panko-breaded shrimp served with a side of seafood sauce", price: "$10.99" },
      { name: "Hot Hamburger", description: "Open-faced burger patty on bread, smothered in gravy, hot corn on side with fries", price: "$13.50" },
      { name: "Club House", description: "Triple-decker with Grilled Chicken, bacon, lettuce, tomato, mayo", price: "$15.99" },
    ],
  },
  {
    id: "submarines",
    title: "Submarines",
    items: [
      { name: "Gyro Sub", price: "$16.75" },
      { name: "Chicken Souvalaki Sub", price: "$17.99" },
      { name: "Club Sub", price: "$16.75" },
      { name: "Cheese Sub", price: "$8.75" },
      { name: "Ham & Cheese Sub", price: "$10.75" },
    ],
  },
  {
    id: "sandwiches",
    title: "Sandwiches",
    items: [
      { name: "Chicken Parm", price: "$10.50" },
      { name: "Fish on Bun", price: "$9.75" },
      { name: "Back Bacon + Kaiser", price: "$8.99" },
      { name: "Ham & Cheese", price: "$6.75" },
      { name: "Grilled Cheese", price: "$16.75" },
      { name: "Toasted Western", price: "$16.75" },
    ],
  },
];

export const featuredItems: MenuItem[] = [
  {
    name: "Dbl Smash Burger",
    description: "2 beef patties of fresh local farm beef, smashed with onion & seasoning, crafted on the flame with cheese and all the right toppings.",
    price: "$12.99",
    badge: "Fan Favourite",
  },
  {
    name: "1 LB Burger",
    description: "Our biggest, boldest burger. One full pound of fresh local farm beef, crafted on the flame. Not for the faint of heart.",
    price: "$17.50",
    badge: "The Beast",
  },
  {
    name: "Chatham Burger",
    description: "½ lb patty, standard toppings. The local legend. The one that started it all back in 1985.",
    price: "$10.99",
    badge: "The Original",
  },
  {
    name: "Fish & Chips",
    description: "Crispy golden haddock served with fresh-cut chips. A classic done right, every single time.",
    price: "$15.99",
    badge: "Staff Pick",
  },
];
