# -*- coding: utf-8 -*-
pi = 3.14159

data = input("").split(" ");
A = float(data[0]);
B = float(data[1]);
C = float(data[2]);

TRIANGULO = 0;
CIRCULO = 0;
TRAPEZIO = 0;
QUADRADO = 0;
RETANGULO = 0;

# area do triângulo retângulo que tem A por base e C por altura.
TRIANGULO = (A * C) / 2;
print(f"TRIANGULO: %.3f" % TRIANGULO);

# area do círculo de raio C. (pi = 3.14159)
CIRCULO = C ** 2 * pi;
print(f"CIRCULO: %.3f" % CIRCULO);

# area do trapézio que tem A e B por bases e C por altura.
TRAPEZIO = ((A + B)*C)/2;
print(f"TRAPEZIO: %.3f" % TRAPEZIO);

# área do quadrado que tem lado B.
QUADRADO = B * B;
print(f"QUADRADO: %.3f" % QUADRADO);

# area do retângulo que tem lados A e B.
RETANGULO = A * B;
print(f"RETANGULO: %.3f" % RETANGULO);

