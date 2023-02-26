# -*- coding: utf-8 -*-

precos = [ 4, 4.5, 5, 2, 1.5];


valores = input("").split(" ");
codigo = int(valores[0]);
quantidade = int(valores[1]);


print("Total: R$ %.2f" % (precos[codigo - 1 ] * quantidade) );
