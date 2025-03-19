// Function to calculate distance from Scuber HQ in blocks
function distanceFromHqInBlocks(pickupLocation) {
    const hqLocation = 42;
    return Math.abs(pickupLocation - hqLocation);
  }
  
  // Function to calculate distance from Scuber HQ in feet
  function distanceFromHqInFeet(pickupLocation) {
    return Math.abs(pickupLocation - 42) * 264;
  }
  
  // Function to calculate distance travelled in feet
  function distanceTravelledInFeet(start, destination) {
    return Math.abs(destination - start) * 264;
  }
  
  // Function to calculate fare price
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
  
    if (distance <= 400) {
      return 0;
    }
     else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02;
    }
     else if (distance > 2000 && distance <= 2500) {
      return 25;
    }
     else {
      return 'cannot travel that far';
    }
  }