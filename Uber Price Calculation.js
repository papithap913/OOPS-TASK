class UberPriceCalculator {
    constructor(baseFare = 50, costPerKm = 10, costPerMinute = 2) {
        this.baseFare = baseFare;
        this.costPerKm = costPerKm;
        this.costPerMinute = costPerMinute;
    }

    calculatePrice(distance, time) {
        const totalFare =
            this.baseFare + distance * this.costPerKm + time * this.costPerMinute;
        return totalFare;
    }
}

// Example usage:
const uberCalculator = new UberPriceCalculator();
const distanceInKm = 15; // Example distance in kilometers
const timeInMinutes = 30; // Example time in minutes
console.log(
    "Total Uber Price:",
    uberCalculator.calculatePrice(distanceInKm, timeInMinutes)
);
