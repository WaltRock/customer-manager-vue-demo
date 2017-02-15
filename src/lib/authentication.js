export function getUser() {
  return Promise.resolve(null);
}

export function isAuthenticated() {
  return getUser().then(Boolean);
}
