package fuel.thread;
import fuel.domain.FuelCostCalculationParams;

import fuel.io.FuelCalculationFileWriter;
import fuel.util.ConstantUtil;

class FuelThread implements Runnable{  

    FuelCostCalculationParams fuelCostCalculationParams = null;
    FuelCalculationFileWriter fuelCalculationFileWriter = new FuelCalculationFileWriter();
        
    public void run(){

        System.out.println("Worker thread has started !!");  

        double totalFuelCost = (fuelCostCalculationParams.getDistanceInMiles() / fuelCostCalculationParams.getMilageOfCar())
        * (fuelCostCalculationParams.getCostPerlitter() - fuelCostCalculationParams.getDiscountofFuel());

        fuelCostCalculationParams.setTotalFuelCost(totalFuelCost); 
        fuelCalculationFileWriter.saveFuelCost(fuelCostCalculationParams, ConstantUtil.OUTPUT_FILE);
        //read and write in H2 database
    }

    private void setFuelCostCalculationParams(FuelCostCalculationParams fuelCostCalculationParams){

        this.fuelCostCalculationParams = fuelCostCalculationParams;
    }

    public Thread startFuelThread(FuelCostCalculationParams fuelCostCalculationParams){     
        
        Thread t = new Thread(fuelThread);
        t.start();
        return t;
    }
}  