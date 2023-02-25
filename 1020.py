# -*- coding: utf-8 -*-

dias = int(input(""));

anos = dias // 365;
mes  = (dias - (anos * 365)) // 30;
dia  = dias - (mes * 30) - (anos * 365);



print("%.0i ano(s)" % anos );
print("%.0i mes(es)" % mes );
print("%.0i dia(s)" % dia );
