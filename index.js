// Code your solution here:

function driversWithRevenueOver(drivers, value) {
  return drivers.filter( function (driver) { return driver.revenue > value })
}

function driverNamesWithRevenueOver(drivers, value) {
  return drivers.filter( function (driver) {return driver.name if  driver.revenue > value })
}
