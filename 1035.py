# -*- coding: utf-8 -*-

data = input("").split(" ");
A = int(data[0]);
B = int(data[1]);
C = int(data[2]);
D = int(data[3]);

valores_aceitos = B > C and D > A and C+D > A+B and (C > 0 and D > 0) and (A % 2 == 0) 

print("Valores aceitos" if valores_aceitos else "Valores nao aceitos" );
