var n = 9;

for (x = 0; x < n; x++) {
  for (y = 0; y < n; y++) {
    if (x == 0 || y == 8) {
      document.write(" * ");
    } else {
      document.write("&nbsp- ");
    }
  }
  document.write("<br>");
}
