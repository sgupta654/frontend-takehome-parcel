const api_domain = process.env.RUBY_GEMS_SERVER_API;

export const sendAPIQuery = async(path, query) => {
  const url = `${api_domain}${path}${query}`;

  let data;
  try {
    const response = await fetch(url);
    data = await response.json();
  } catch (error) {
    data = { error: true, message: error };
  }

  return data;
}

