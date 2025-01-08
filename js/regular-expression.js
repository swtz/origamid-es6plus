// Methods pt2

const email = `
empresa@email.com
contato@email.com
suporte@email.com
financeiro@prefeiturabalneariogaivota.sc.gov.br
`;

const regexp = /(\w+)(@[\w.]+)/g;

const result = email.replace(regexp, (...args) => {
  const grupo1 = args[1];
  const grupo2 = args[2];
  const emailPattern = '@prefeiturabalneariogaivota.sc.gov.br';
  if (grupo2 !== emailPattern) {
    return `${grupo1}${emailPattern}`;
  };
  return args[0]; // capturaGeral, ou seja, não caiu na condicional
});
console.log(result);
