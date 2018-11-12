-> Fibonacci

    “ https://en.wikipedia.org/wiki/Fibonacci_coding “

    “ https://en.wikipedia.org/wiki/Fibonacci_number “


-> Fibonacci Encoder & Decoder:

     Implemented a decoder and an encoder for translating back and forth between integers and binary code
     words which adheres to the logic provided in the links.
     There are pre-defined tests that cover some basic functionality.



Installation:

1. Install NodeJS. 

2.Go-to project directory.

3. cd Fibonacci.

4. Run ' npm install ’. 

5. Run ' npm test ’.




      
      
      
      


Fibonacci Logic: 

-> The Fibonacci sequence start is defined as below

        1   2   3   5   8   13   21   34   55 ……..

-> Encoder: Converts integer to a binary code.

        Which means that the generated code words for the numbers 3, 15 would become:

    . 3 =  (0 + 0 + 3) = ( 001 +  and an additional 1 is always appended ) = 0011

    . 5  = (0 + 2 + 0 + 0 + 0 + 13) = ( 010001  +  and an additional 1 is always appended ) = 0100011


-> Decoder: Converts binary code to a Integer.
        
       Which means that the binary code words for the 0011, 0100011 would become:
 
    .0011 = ( 0011 +  and remove the 1 in the last position ) = 001  = 3
 
    .0100011 = ( 0100011 +  and remove the 1 in the last position ) = 010001 = 15
