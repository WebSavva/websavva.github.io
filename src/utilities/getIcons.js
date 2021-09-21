export default (icons) =>
  icons.reduce((ac, icon) => ((ac[icon.name] = icon), ac), {});
