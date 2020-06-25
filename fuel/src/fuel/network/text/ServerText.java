package fuel.network.text;

import java.net.*;  
import java.io.*;  

class ServerText{  

    public static void main(String args[]) throws Exception{  

        new ServerText().startServer();         
    }

    private void startServer() throws IOException{


            //Create server socket
            ServerSocket serverSocket = new ServerSocket(3333);  
            Socket socket = serverSocket.accept(); 

            //get IO of sockets
            DataInputStream din = new DataInputStream(socket.getInputStream());  
            DataOutputStream dout = new DataOutputStream(socket.getOutputStream()); 

            BufferedReader br = new BufferedReader(new InputStreamReader(System.in));  
            System.out.println("Server is listening at port 3333. enter 'stop' to kill server ");


            String str = "";
            String str2 = "";  
            while(!str.equals("stop")){  

                // read from socket, that sent by client
                str = din.readUTF();  
                System.out.println("client says: "+str); 

                //read from commandline and send to client by Server
                str2 = br.readLine();  
                dout.writeUTF(str2);  
                dout.flush();  
            }  
            din.close();  
            socket.close();  
            serverSocket.close(); 
            System.out.println("Server has stopped !!");
    }
}  