function disemvowel(str) {
  const arr = str.split("");
  const vowel = "aeiouAEIOU";
  const filtered = arr.filter((x) => !vowel.includes(x));
  console.log(filtered.join(""));
}

disemvowel("This website is for losers LOL!");
//
function filter_list(l) {
  const filtered = l.filter((x) => typeof x == "number");
  console.log(filtered);
}
filter_list([1, 2, "a", "b"]);
