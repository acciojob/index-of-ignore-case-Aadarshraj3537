function indexOfIgnoreCase(s1, s2) {
  if (!s1 || !s2) return -1; 
  return s1.toLowerCase().indexOf(s2.toLowerCase());
}
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));

