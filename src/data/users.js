export function generateUser() {
  const timestamp = Date.now();
  const random = Math.floor(Math.random() * 100000);

  return {
    nome: `k6 User ${timestamp}`,
    email: `k6user${timestamp}${random}@mail.com`,
    password: 'Teste@123',
    administrador: 'true',
  };
}
