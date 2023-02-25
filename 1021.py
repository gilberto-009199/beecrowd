# -*- coding: utf-8 -*-

notas = [ 100 * 100, 50 * 100, 20 * 100, 10 * 100, 5 * 100, 2 * 100, 1 * 100, 0.5 * 100, 0.25 * 100, 0.1 * 100, 0.05 * 100, 0.01 * 100];

valor = float(input("")) * 100;

lista_notas = [0]*len(notas);
total = 0;
for index_nota in range(len(notas)):
	while valor >= total + notas[index_nota]:
		total += notas[index_nota];
		lista_notas[index_nota] += 1;



print("NOTAS:")
print("%.0i nota(s) de R$ 100.00" % lista_notas[0]);
print("%.0i nota(s) de R$ 50.00" % lista_notas[1]);
print("%.0i nota(s) de R$ 20.00" % lista_notas[2]);
print("%.0i nota(s) de R$ 10.00" % lista_notas[3]);
print("%.0i nota(s) de R$ 5.00" % lista_notas[4]);
print("%.0i nota(s) de R$ 2.00" % lista_notas[5]);
print("MOEDAS:")
print("%.0i moeda(s) de R$ 1.00" % lista_notas[6]);
print("%.0i moeda(s) de R$ 0.50" % lista_notas[7]);
print("%.0i moeda(s) de R$ 0.25" % lista_notas[8]);
print("%.0i moeda(s) de R$ 0.10" % lista_notas[9]);
print("%.0i moeda(s) de R$ 0.05" % lista_notas[10]);
print("%.0i moeda(s) de R$ 0.01" % lista_notas[11]);


A=float(input())
N=A
a=N/100
b=N%100
c=b/50
d=b%50
e=d/20
f=d%20
g=f/10
h=f%10
i=h/5
j=h%5
k=j/2
l=j%2

E=A*100
B=(int(E))
m=B%100
n=m/50
o=m%50
p=o/25
q=o%25
r=q/10
s=q%10
t=s/5
u=s%5
print("NOTAS:")
print("{} nota(s) de R$ 100.00".format(int(a)))
print("{} nota(s) de R$ 50.00".format(int(c)))
print("{} nota(s) de R$ 20.00".format(int(e)))
print("{} nota(s) de R$ 10.00".format(int(g)))
print("{} nota(s) de R$ 5.00".format(int(i)))
print("{} nota(s) de R$ 2.00".format(int(k)))
print("MOEDAS:")
print("{} moeda(s) de R$ 1.00".format(int(l)))
print("{} moeda(s) de R$ 0.50".format(int(n)))
print("{} moeda(s) de R$ 0.25".format(int(p)))
print("{} moeda(s) de R$ 0.10".format(int(r)))
print("{} moeda(s) de R$ 0.05".format(int(t)))
print("{} moeda(s) de R$ 0.01".format(int(u)))

