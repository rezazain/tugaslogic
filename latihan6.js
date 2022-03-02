var n = 9;

for (x = 0; x < n; x++) {
  for (y = 0; y < n; y++) {
    if (x==0 || x==4 || x==8 || y==0 || y==8 || y==4) {
      document.write(" *");
    } else {
      document.write("&nbsp -");
    }
  }
  document.write("<br>");
}
