/*
 * Copyright (c) 2016 Manuel Montenegro
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
 * documentation files (the "Software"), to deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of
 * the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
 * WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS
 * OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
 * OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

package es.ucm.aw;

import java.io.IOException;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.net.ServerSocket;
import java.net.Socket;
import java.util.Scanner;

/**
 * Servidor que realiza operaciones aritméticas.
 *
 * @author Manuel Montenegro
 */
public class ArithServer {
    private static final int PORT_NUMBER = 5432;

    private static void servePetition(Socket socket) {
        try (Scanner sc = new Scanner(socket.getInputStream());
             PrintWriter out = new PrintWriter(new OutputStreamWriter(socket.getOutputStream()))) {
            int sum1 = sc.nextInt();
            int sum2 = sc.nextInt();
            System.out.println("Sumar " + sum1 + " y " + sum2);
            out.println(sum1 + sum2);
        } catch (IOException e) {
            System.err.println("Error al obtener el flujo de entrada: " + e.getMessage());
        }
    }

    public static void main(String... args) {
        try {
            ServerSocket server = new ServerSocket(PORT_NUMBER);
            while (true) {
                System.out.println("Escuchando en el puerto " + PORT_NUMBER);
                Socket s = server.accept();
                servePetition(s);
            }
        } catch (IOException e) {
            System.err.println("Error al inicializar socket servidor: " + e.getMessage());
        }
    }
}
