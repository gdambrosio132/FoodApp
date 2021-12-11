import filterItems from "../filterItems";


it('filter items correctly', () => {
  const predictions = [{
    "id": "01",
    "name": "fries",
    "value": 0.90
  },
  {
    "id": "02",
    "name": "pizza",
    "value": 0.89
  },
  {
    "id": "03",
    "name": "ketchup",
    "value": 0.94
  }]
  const expected = [{
    "id": "01",
    "name": "Fries",
    "value": 0.90
  },
  {
    "id": "03",
    "name": "Ketchup",
    "value": 0.94
  },]
  expect(filterItems({ predictions: predictions, threshold: 0.9 })).toStrictEqual(expected);
})


it('capitalize items correctly', () => {
  const predictions = [{
    "id": "01",
    "name": "fries",
    "value": 0.90
  },
  {
    "id": "02",
    "name": "pizza",
    "value": 0.89
  },
  {
    "id": "03",
    "name": "ketchup",
    "value": 0.94
  },
  {
    "id": "04",
    "name": "aPPLES",
    "value": 0.92
  }
  ]
  const expected = [{
    "id": "01",
    "name": "Fries",
    "value": 0.90
  },
  {
    "id": "03",
    "name": "Ketchup",
    "value": 0.94
  },
  {
    "id": "04",
    "name": "APPLES",
    "value": 0.92
  }
  ]
  expect(filterItems({ predictions: predictions, threshold: 0.9 })).toStrictEqual(expected);
})
