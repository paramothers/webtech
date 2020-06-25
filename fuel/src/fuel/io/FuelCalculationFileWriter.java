package fuel.io;
import java.io.File;
import java.io.*;
import fuel.domain.*;
public class FuelCalculationFileWriter {
	
	 public void saveFuelCost(FuelCostCalculationParams fuelCostCalculationParams, String fileName) {
		// first create file object for file placed at location 
	    // specified by filepath 
	    File file = new File(fileName); 
	    try { 

			// create FileWriter object with file as parameter 
			FileWriter finalFuelCostFile = null;

			//add header only time.
			if(!file.exists()){				
				// adding header to csv 
				String header = "DISTANCE,MILEAGE, COST_LITTER, DISCOUNT, FUEL_TYPE, TOTAL_COST";
				finalFuelCostFile = new FileWriter(file);
				finalFuelCostFile.write(header); 
				finalFuelCostFile.append("\n");
			}else {

				finalFuelCostFile = new FileWriter(file);
			}
	        
	       
			String data1 = Double.toString(fuelCostCalculationParams.getDistanceInMiles());
			data1 = data1 + ","+Double.toString(fuelCostCalculationParams.getMilageOfCar());
			data1 = data1 + ","+Double.toString(fuelCostCalculationParams.getCostPerlitter());
			data1 = data1 + ","+Double.toString(fuelCostCalculationParams.getDiscountofFuel());
			data1 = data1 + ","+fuelCostCalculationParams.getFuelType();
			data1 = data1 + ","+Double.toString(fuelCostCalculationParams.getTotalFuelCost());
			

	        System.out.println(" total fuel cost :"+data1);
			finalFuelCostFile.append(data1); 
			finalFuelCostFile.append("\n");
			finalFuelCostFile.flush();
			
	        finalFuelCostFile.close();
	    } catch (IOException e) { 
	        // TODO Auto-generated catch block 
	        e.printStackTrace(); 
	    } 
		
	}

	public static void main(String[] args) {
		// TODO Auto-generated method stub
                           
	}

}
