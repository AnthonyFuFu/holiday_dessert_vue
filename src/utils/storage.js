export function getSession(key) {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
}

export function setSession(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

export function removeSession(key) {
    localStorage.removeItem(key);
}
