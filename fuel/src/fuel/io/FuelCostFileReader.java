package fuel.io;

import java.io.File;  
import java.io.IOException; 
import java.io.FileReader;
import fuel.domain.*;
import java.util.List;
import java.util.ArrayList;
import fuel.util.ConstantUtil;


public class FuelCostFileReader {
	
	public void getFuelCostPerLiter(FuelCostCalculationParams fuelCostCalculationParams){
       File myfile = new File("Fuelcost.txt");
       try {
              FileReader costPerLiterFile = new FileReader(myfile);
              StringBuffer fuelCostPerLiter = new StringBuffer();
              int content;
              while ((content = costPerLiterFile.read()) != -1) {
                fuelCostPerLiter.append((char) content);
              }
              double costPerLiter = Double.parseDouble(fuelCostPerLiter.toString());
              System.out.println("fuel cost perliter:"+costPerLiter);
              fuelCostCalculationParams.setCostPerlitter(costPerLiter);
              costPerLiterFile.close();
           }catch (IOException e){
        	   
                e.printStackTrace();
            }
  }

  public List<FuelCostCalculationParams> getFuelCostCalculationParamsList(){

      File myfile = new File(ConstantUtil.OUTPUT_FILE);
      List<FuelCostCalculationParams> fuelCostCalculationParamsList = new ArrayList<FuelCostCalculationParams>();
      StringTokenizer st = null;
      try {
        FileReader costCalculationResultFile = new FileReader(myfile);
        BufferedReader reader = new BufferedReader(costCalculationResultFile);
        
        FuelCostCalculationParams fuelCostCalculationParams = null;
        //skip the header
        reader.readLine();

      
        while ((content = reader.readLine()) != -1) {
          
          System.out.println("current line "+content);
          st = new StringTokenizer(content);
      
          fuelCostCalculationParams = new FuelCostCalculationParams();
          fuelCostCalculationParams.setDistanceInMiles(Double.parseDouble(st.nextToken(ConstantUtil.TOKEN_SEPERATOR)));
          fuelCostCalculationParams.setMilageOfCar(Double.parseDouble(st.nextToken(ConstantUtil.TOKEN_SEPERATOR)));
          fuelCostCalculationParams.setCostPerlitter(Double.parseDouble(st.nextToken(ConstantUtil.TOKEN_SEPERATOR)));
          fuelCostCalculationParams.setDiscountofFuel(Double.parseDouble(st.nextToken(ConstantUtil.TOKEN_SEPERATOR)));
          fuelCostCalculationParams.setFuelType(st.nextToken(ConstantUtil.TOKEN_SEPERATOR));
          fuelCostCalculationParams.setTotalFuelCost(Double.parseDouble(st.nextToken(ConstantUtil.TOKEN_SEPERATOR)));

          fuelCostCalculationParamsList.add(fuelCostCalculationParams);
        }
       
        readLine.close();
    }catch (IOException e){
      
          e.printStackTrace();
      }
  }
	
	public static void main(String[] args) {
    // TODO Auto-generated method stub
    
       List<FuelCostCalculationParams> fuelCostCalculationParamsList =  new FuelCostFileReader().getFuelCostCalculationParamsList();

       System.out.println("Size of Calculation from Server "+fuelCostCalculationParamsList.size());
                           
	}

}


