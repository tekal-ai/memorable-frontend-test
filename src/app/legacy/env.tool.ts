/**
 * Get an environment variable by name. This function will throw
 * if the variable is not present. It will always return a string otherwise.
 *
 * @throws
 * @param key string
 * @returns string
 */

export function env(key: string, defaultValue?: string): string {
  if (!key.startsWith("VITE_")) {
    throw new Error(
      `All environment variables must be prefixed with 'VITE_'. You should use 'VITE_${key}' instead of '${key}'.`,
    );
  }
  const value = import.meta.env[key] || defaultValue;
  if (typeof value !== "string" || value.trim().length === 0) {
    throw new Error(
      `Missing or empty environment variable: '${key}'. Maybe you forgot to add it to your dotenv file.`,
    );
  }
  return value;
}
