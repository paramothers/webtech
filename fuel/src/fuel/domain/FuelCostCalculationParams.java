package fuel.domain;

import java.io.Serializable;

public class FuelCostCalculationParams implements Serializable{

	double distanceInMiles;
	double costPerlitter;
	double milageOfCar;
	double discountofFuel;
	double totalFuelCost;
	String fuelType;
	
	public String sayHello = "hai ";

	public double getDistanceInMiles() {
		return distanceInMiles;
	}
	public void setDistanceInMiles(double distanceInMiles) {
		this.distanceInMiles = distanceInMiles;
	}
	public double getCostPerlitter() {
		return costPerlitter;
	}
	public void setCostPerlitter(double costPerlitter) {
		this.costPerlitter = costPerlitter;
	}
	public double getMilageOfCar() {
		return milageOfCar;
	}
	public void setMilageOfCar(double milageOfCar) {
		this.milageOfCar = milageOfCar;
	}
	public double getDiscountofFuel() {
		return discountofFuel;
	}
	public void setDiscountofFuel(double discountofFuel) {
		this.discountofFuel = discountofFuel;
	}
	public double getTotalFuelCost() {
		return totalFuelCost;
	}
	public void setTotalFuelCost(double totalFuelCost) {
		this.totalFuelCost = totalFuelCost;
	}
	public String getFuelType() {
		return fuelType;
	}
	public void setFuelType(String fuelType) {
		this.fuelType = fuelType;
	}
	
    
    
	
	
}
