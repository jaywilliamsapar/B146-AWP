// Array of car models
var carModels = [
    'Toyota Camry',
    'Honda Civic',
    'Ford Mustang',
    'Chevrolet Corvette',
    'BMW 3 Series',
    'Mercedes-Benz C-Class',
    'Hyread',
    'Gawe',
    'Tesla Model S',
    'Nissan Altima'
  ];
  
  // Accessing car models
  console.log(carModels[0]);  // Output: Toyota Camry
  console.log(carModels[1]);  // Output: Honda Civic
  console.log(carModels[2]);  // Output: Ford Mustang
  // ...
  
  // Iterating over car models
  carModels.forEach(function(model) {
    console.log(model);
  });