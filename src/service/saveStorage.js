import imageUser from '../image/imageUser.webp';

export const saveUser = (name, email, imgProfile = imageUser) => {
  const getUser = JSON.parse(localStorage.getItem('user'));
  if (getUser) {
    localStorage.setItem('user', JSON.stringify({
      ...getUser,
      imgProfile,
    }));
  }

  localStorage.setItem('user', JSON.stringify({
    name,
    email,
    imgProfile,
  }));
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
