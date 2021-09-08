export function json2array(json) {
  const result = [];
  const obj = JSON.parse(json);
  Object.values(obj).forEach((o) => {
    result.push(o);
  });

  return result;
}
