# -*- coding: utf-8 -*-

notas = [ 100, 50, 20, 10, 5, 2, 1];

valor = int(input(""));

lista_notas = [0]*len(notas);
total = 0;
for index_nota in range(len(notas)):
	while valor >= total + notas[index_nota]:
		total += notas[index_nota];
		lista_notas[index_nota] += 1;




print(valor);
print("%.0i nota(s) de R$ 100,00" % lista_notas[0]);
print("%.0i nota(s) de R$ 50,00" % lista_notas[1]);
print("%.0i nota(s) de R$ 20,00" % lista_notas[2]);
print("%.0i nota(s) de R$ 10,00" % lista_notas[3]);
print("%.0i nota(s) de R$ 5,00" % lista_notas[4]);
print("%.0i nota(s) de R$ 2,00" % lista_notas[5]);
print("%.0i nota(s) de R$ 1,00" % lista_notas[6]);