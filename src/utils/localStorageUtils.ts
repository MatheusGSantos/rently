type AvailableKeys = 'token' | 'user';

export const setLocalStorageItem = (key: AvailableKeys, value: any): void => {
  localStorage.setItem(
    `@Rently:${key}`,
    typeof value === 'string' ? value : JSON.stringify(value),
  );
};

export const getLocalStorageItem = (key: AvailableKeys): any => {
  return localStorage.getItem(`@Rently:${key}`);
};

export const removeLocalStorageItem = (key: AvailableKeys): void => {
  localStorage.removeItem(`@Rently:${key}`);
};
