export const defaultBodyData = {
  weight: 70,
  height: 170,
  protkg: 200,
  fatkg: 100,
  sex: "male",
  objective: "mantain",
  type: "ecto",
  age: 20,
};

export const defaultTodayMeals = [
  {
    name: "Almoço",
    ingredients: [
      {
        name: "Chicken",
        quantity: 100,
        carb: 0,
        prot: 30,
        fat: 5,
      },
      {
        name: "Rice",
        quantity: 300,
        carb: 80,
        prot: 3,
        fat: 0,
      },
    ],
  },
  {
    name: "Lanche",
    ingredients: [
      {
        name: "Suco",
        quantity: 100,
        carb: 30,
        prot: 0,
        fat: 0,
      },
      {
        name: "Pão",
        quantity: 150,
        carb: 20,
        prot: 5,
        fat: 2,
      },
    ],
  },
];
