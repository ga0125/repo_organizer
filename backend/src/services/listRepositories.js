// -----------------------------
// File: src/services/listRepositories.js
// Author: Gabriel Zacchi Braga (POC)
// Date: 29/10/2020
// Brief: Busines Rule - Github request and compose repositories data
// -----------------------------

// -----------------------------
// Imports
const apiInstance = require('../drivers/api.client');
const config = require('../config');

async function listRepositories(languageType, pageID) {
  // -----------------------------
  // Request all repositories data from Github
  const request = await apiInstance.get(`/search/repositories?q=language:${languageType}&sort=stars&page=${pageID}&=${config.githubApp.client_id}&${config.githubApp.secret_key}`);
  const data = request.data.items;

  // -----------------------------
  // Initialize response array
  const response = [];

  // -----------------------------
  // Compose custom data filtering the main repositories info
  data.map((obj) => {
    const repository = {
      name: obj.name,
      full_name: obj.full_name,
      language: obj.language,
      stars: ((15 * obj.stargazers_count) / 100000),
      forks: obj.forks_count,
      owner: {
        username: obj.owner.login,
        avatar: obj.owner.avatar_url,
        name: obj.owner.name,
        company: obj.owner.company,
      },
      total_count: (request.data.total_count / 30),
    };
    response.push(repository);
  });

  return (response);
}

module.exports = listRepositories;
