const saveUser = (name, email) => {
  localStorage.setItem('user', JSON.stringify({ name, email }));
};

export default saveUser;
