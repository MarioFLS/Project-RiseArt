export const saveUser = (name, email) => {
  localStorage.setItem('user', JSON.stringify({ name, email }));
};

export const saveArt = (id, image) => {
  const getArts = JSON.parse(localStorage.getItem('arts'));
  if (getArts) {
    localStorage.setItem(
      'arts',
      JSON.stringify([...getArts,
        { id, image },
      ]),
    );
  } else {
    localStorage.setItem(
      'arts',
      JSON.stringify([
        { id, image },
      ]),
    );
  }
};
