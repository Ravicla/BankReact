export function handleSearch(){
  if(!localStorage['users']){
    localStorage['users'] = '[]';
  }
  let users = localStorage['users'];
  users = JSON.parse(users);
  return users;
}

export function handleRemove(id){
  let users = handleSearch();

  let index = users.findIndex(user => user.id === id);
  if (index !== -1) {
    users.splice(index, 1);
    localStorage.setItem('users', JSON.stringify(users));
  }
}

export function handleSave(user){
  let users = handleSearch();
  users.push(user)
  localStorage.setItem('users', JSON.stringify(users)); 
}

[/*
const usuarios = [
  {
    id: '1',
    cedula: '1234567890',
    nombre: 'Ana',
    apellido: 'Alarcon',
    correo: 'ana@google.com',
    telefono: '0987654321',
    
  },
  {
    id: '2',
    cedula: '0987654321',
    nombre: 'Juan',
    apellido: 'Perez',
    correo: 'juan@google.com',
    telefono: '9876543210',
    
  },
];
*/]