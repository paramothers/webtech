package fuel.network.binary;


import java.net.*;  
import java.io.*;  

class ServerBinary{  

    public static void main(String args[]) throws Exception{  

        new ServerText().startServer();         
    }

    private void startServer() throws Exception{


            //Create server socket
            ServerSocket serverSocket = new ServerSocket(3333);  
            Socket socket = serverSocket.accept(); 

            //get IO of sockets
       

            ObjectOutputStream dout = new ObjectOutputStream(socket.getOutputStream());
            ObjectInputStream din = new ObjectInputStream(socket.getInputStream());

            BufferedReader br = new BufferedReader(new InputStreamReader(System.in));  
            System.out.println("Server is listening at port 3333. enter 'stop' to kill server ");


            String str = "";
            String str2 = "";  
            while(!str.equals("stop")){  

                // read from socket, that sent by client
                FuelCostCalculationParams fuelCostCalculationParams = (FuelCostCalculationParams)din.readObject();
                System.out.println("client says: "+fuelCostCalculationParams.sayHello); 

                //create thread and give task to it.
                // start thread
                System.out.println("Creating FuelThread..."+new java.util.Date()); 
                FuelThread fuelThread = new FuelThread();
                fuelThread.setFuelCostCalculationParams(fuelCostCalculationParams);
                Thread t = fuelThread.startFuelThread();
                t.join();              
               

                dout.writeObject(fuelCostCalculationParams);
                dout.flush(); 
                
                str2 = br.readLine(); 
            }  
            din.close();  
            socket.close();  
            serverSocket.close(); 
            System.out.println("Server has stopped !!");
    }
}  