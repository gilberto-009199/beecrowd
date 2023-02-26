# -*- coding: utf-8 -*-

data = input("").split()

n1 = float(data[0]);
n2 = float(data[0]);
n3 = float(data[0]);
n4 = float(data[0]);

media = ( n1*2 + n2*3 + n3*4 + n4*1) / 10

print('Media: {:.1f}'.format(media))
if media >= 7.0:
    print('Aluno aprovado.')
if media < 5.0:
    print('Aluno reprovado.')
if 5.0 <= media <= 6.9:
    print('Aluno em exame.')
    y = float(input())
    print('Nota do exame: {}'.format(y))
    media2 = (y + media) / 2
    if media2 >=5:
        print('Aluno aprovado.')
        print('Media final: {:.1f}'.format(media2))
    else:
        print('Aluno reprovado.')
        print('Media final: {:.1f}'.format(media2))