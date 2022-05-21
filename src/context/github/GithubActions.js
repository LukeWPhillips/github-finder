//   get search results

export const searchUsers = async (text) => {
  const params = new URLSearchParams({
    q: text,
  });

  // we want the query param to search users
  // https://api.github.com/search/users?q=LukeWPhillips is the request
  // using param variable allows whatever the text entered to be the query param

  const response = await fetch(`https://api.github.com/search/users?${params}`);

  const { items } = await response.json();

  return items;
};

// get a single user

export const getUser = async (login) => {
  const response = await fetch(`https://api.github.com/search/users/${login}`);

  if (response.status === 404) {
    window.location = "/notfound";
  } else {
    const data = await response.json();

    return data;
  }
};

// Get user repos
export const getUserRepos = async (login) => {
  const response = await fetch(
    `https://api.github.com/search/users/${login}/repos`
  );

  const { data } = await response.json();

  return data;
};
