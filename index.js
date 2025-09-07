function changeColor() {
  const colors = [
    '#ff6b6b',
    '#ff0000ff',
    '#36aa49ff',
    '#548328ff',
    '#931c1cff',
    '#632222ff',
    '#1b7a08ff',
    '#dbcb84ff',
  ];

  const color1 = colors[Math.floor(Math.random() * colors.length)];
  const color2 = colors[Math.floor(Math.random() * colors.length)];

  document.body.style.background = `linear-gradient(45deg, ${color1}, ${color2})`;
}