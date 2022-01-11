export async function getById(id) {
  const response = await fetch(
    `https://last-airbender-api.herokuapp.com/api/v1/characters/${id}`
  );
  const data = await response.json();

  return data;
}

export async function getAll() {
  const response = await fetch(
    "https://last-airbender-api.herokuapp.com/api/v1/characters"
  );
  const data = await response.json();

  return data.map((munge) => dataMunged(munge));
}

const dataMunged = (avatars) => {
  const avatarMunged = {
    name: avatars.name,
    allies: avatars.allies,
    enemies: avatars.enemies,
    photoUrl: avatars.enemies,
  };
  return avatarMunged;
};
