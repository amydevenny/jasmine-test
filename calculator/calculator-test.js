
it('should calculate the monthly rate correctly', function () {
  const values = {
    amount: 20000,
    years: 5,
    rate: 6.2
  };
  expect(calculateMonthlyPayment(values)).toEqual('388.52');
});


it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 10043,
    years: 8,
    rate: 5.8
  };
  expect(calculateMonthlyPayment(values)).toEqual('131.00');
});

/// etc

it('should calculate a large purchase amount', function() {
  const values = {
    amount: 50000000,
    years: 30,
    rate: 6.4
  };
  expect(calculateMonthlyPayment(values)).toEqual('312752.95');
})
