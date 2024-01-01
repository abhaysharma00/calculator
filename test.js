const calculate = (op) => {
  let val1 = Number(document.getElementById("val1").value);
  let val2 = Number(document.getElementById("val2").value);
  let result = document.getElementById("resultdiv");
  let ans;
  if (op == "+") ans = val1 + val2;
  if (op == "-") ans = val1 - val2;
  if (op == "*") ans = val1 * val2;
  if (op == "/") ans = val1 / val2;
  result.innerHTML = `${ans}`;
};
