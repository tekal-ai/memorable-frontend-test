export const titleCaseFormatterTool = (str: string) => {
  const words = str
    .replace(/([a-z])([A-Z])/g, "$1 $2") // inserta un espacio antes de las letras mayúsculas que siguen a las letras minúsculas
    .split(/_| /); // divide la cadena en palabras en guiones bajos o espacios

  return words
    .map((word, index) =>
      index === 0
        ? word.charAt(0).toUpperCase() + word.substring(1).toLowerCase()
        : word.toLowerCase(),
    )
    .join(" ");
};
