export const customFilter = (object: any, key: string, value: any): any => {
  if (!object) return null;
  if (Array.isArray(object)) {
    for (const obj of object) {
      const result = customFilter(obj, key, value);
      if (result) {
        return result;
      }
    }
  } else {
    // eslint-disable-next-line no-prototype-builtins
    if (object?.hasOwnProperty(key) && object[key] === value) {
      return object;
    }

    for (const k of Object.keys(object)) {
      if (typeof object[k] === "object") {
        const o = customFilter(object[k], key, value);
        if (o !== null && typeof o !== "undefined") return o;
      }
    }

    return null;
  }
};
