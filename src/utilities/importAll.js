export default function importAll(r, formatFilename) {
  let images = {};
  r.keys().map((item, index) => {
    images[formatFilename(item)] = r(item);
  });
  return images;
}
