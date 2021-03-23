const contentType = {
  'Content-Type': 'application/json',
};

const fetchLogin = async (email, password) => {
  const response = await fetch('http://localhost:3001/login', {
    method: 'POST',
    headers: contentType,
    body: JSON.stringify({ email, password }),
  }).then((res) => res.json());
  return response;
};

const fetchRegister = async (name, email, password, check) => {
  const response = await fetch('http://localhost:3001/register', {
    method: 'POST',
    headers: contentType,
    body: JSON.stringify({
      name,
      email,
      password,
      role: (check ? 'admin' : 'client') }),
  }).then((res) => res.json());
  return response;
};

const fetchAnimals = async () => {
  const response = await fetch('http://localhost:3001/animals', {
    method: 'GET',
    headers: contentType,
  }).then((res) => res.json());
  return response;
};

module.exports = {
  fetchLogin,
  fetchRegister,
  fetchAnimals,
}