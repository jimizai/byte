export function b(
  templateStrings: TemplateStringsArray,
  ...args: any[]
): Uint8Array {
  const encoder = new TextEncoder();
  const str = templateStrings.reduce(
    (prev, str, index) => prev + str + (args[index] || ""),
    ""
  );
  return encoder.encode(str);
}
