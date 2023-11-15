export const getRecursivePathObjectSearch = (
  object: any,
  key: string,
  value: any,
): any[] => {
  const path: string[] = [];
  const customFilterPath = (object: any, key: string, value: any): any => {
    if (!object) return null;
    if (Array.isArray(object)) {
      for (const obj of object) {
        const result = customFilterPath(obj, key, value);
        if (result) {
          path.push(obj);
          return result; //result
        }
      }
    } else {
      // eslint-disable-next-line no-prototype-builtins
      if (object?.hasOwnProperty(key) && object[key] === value) {
        return object; // object
      }
      for (const k of Object.keys(object)) {
        if (typeof object[k] === "object") {
          const o = customFilterPath(object[k], key, value);
          if (o !== null && typeof o !== "undefined") {
            return o; //o
          }
        }
      }
      return null;
    }
  };
  customFilterPath(object, key, value);
  return path;
};
