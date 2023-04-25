function isAnagram(str1, str2) {
  const length1 = str1.trim().length;
  const length2 = str2.trim().length;
  const lentIsZero = length1 === 0 || length2 === 0;
  const unequalLength = length1 !== length2;

  if (lentIsZero || unequalLength) return false;

  for (let i = 0; i < length1; i++) if (!str1.includes(str2[i])) return false;

  return true;
}
