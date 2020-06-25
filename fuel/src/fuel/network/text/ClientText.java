package fuel.network.text;

import java.net.*;  
import java.io.*;  
class ClientText {  

    public static void main(String args[]) throws Exception{  

        Socket s  =  new Socket("localhost",3333); 

        DataInputStream din  =  new DataInputStream(s.getInputStream());  
        DataOutputStream dout = new DataOutputStream(s.getOutputStream());  
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));  
        System.out.println("Client connected with localhost at port 3333. enter 'stop' to kill client ");
        
        String str = "",str2 = "";  
        while(!str.equals("stop")){ 

            //read  from commandline and send to server
            str = br.readLine();  
            dout.writeUTF(str);  
            dout.flush(); 

            //read from server and display to client 
            str2 = din.readUTF();  
            System.out.println("Server says: "+str2);  
        }  
        
        dout.close();  
        s.close();  
        System.out.println("Client has stopped !!");
    }
}  