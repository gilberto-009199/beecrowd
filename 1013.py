# -*- coding: utf-8 -*-

data = input("").split(" ");
A = int(data[0]);
B = int(data[1]);
C = int(data[2]);

maior = (A+B+abs(A-B))/2;

maior = (maior+C+abs(maior-C))/2;


print(str(int(maior))+" eh o maior");