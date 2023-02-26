# -*- coding: utf-8 -*-

data = input("").split(" ");
X = float(data[0]);
Y = float(data[1]);


if X > 0 and Y > 0:
	resultado="Q1";
elif X < 0 and Y > 0:
	resultado="Q2";
elif X < 0 and Y < 0:
	resultado="Q3";
elif X > 0 and Y < 0:
	resultado="Q4";
elif X == 0 and Y == 0:
	resultado = "Origem";
elif X == 0:
	resultado="Eixo Y";
elif Y == 0:
	resultado="Eixo X";


print(resultado);


