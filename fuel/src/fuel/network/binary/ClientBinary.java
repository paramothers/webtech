package fuel.network.binary;

import java.net.*;  
import java.io.*;  
import fuel.domain.FuelCostCalculationParams;

class ClientBinary {  

    public static void main(String args[]) throws Exception{  

        Socket s  =  new Socket("localhost",3333); 
        ObjectOutputStream dout = new ObjectOutputStream(s.getOutputStream());
        ObjectInputStream din = new ObjectInputStream(s.getInputStream());

        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));  
        System.out.println("Client connected with localhost at port 3333. enter 'stop' to kill client ");
        
        String str = "";  
        while(!str.equals("stop")){ 

            //read  from commandline and send to server          

            FuelCostCalculationParams fuelCostCalculationParams = new FuelCostCalculationParams();
            fuelCostCalculationParams.setDistanceInMiles(23);
			fuelCostCalculationParams.setMilageOfCar(45);
            fuelCostCalculationParams.setCostPerlitter(576);
            fuelCostCalculationParams.setDiscountofFuel(0.20);
                
            dout.writeObject(fuelCostCalculationParams);            
            dout.flush(); 

            //read from server and display to client 
            FuelCostCalculationParams fuelCostCalculationParams2 = (FuelCostCalculationParams)din.readObject();
            System.out.println("Total cost calculated at server: "+fuelCostCalculationParams2.getTotalFuelCost()); 
            
            str = br.readLine();  
        }  
        
        dout.close();  
        s.close();  
        System.out.println("Client has stopped !!");
    }
}  