# -*- coding: utf-8 -*-

data = [int(x) for x in input("").split(" ")];

# meu pequeno radix sort negativo
index_maior_valor = 0;
index_menor_valor = 0;

for index in range(len(data)):
	if data[index_maior_valor] < data[index] :
		index_maior_valor = index;

	if data[index_menor_valor] > data[index]:
		index_menor_valor = index;

diff_menor = 0
if(data[index_menor_valor] < 0):
	diff_menor =  data[index_menor_valor] * (-1);

# pensar no maior  e menor negativo
dataSort = [0] * (data[index_maior_valor] + diff_menor + 1);

for index in data:
	dataSort[diff_menor + index ] += 1; 

for index in range( 0, len(dataSort)):
	if dataSort[index] > 0:
		print( (index - diff_menor) * dataSort[index] );
print("");

for inteiro in data:
	print( inteiro );

