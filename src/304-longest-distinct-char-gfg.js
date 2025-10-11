class Solution {
  /**
   * @param {string} s
   * @param {number} k
   * @returns {number}
   */
  longestKSubstr(s, k) {
    // code here
    let L = 0;
    const map = new Map();

    let maxLength = 0;
    let res = 0;

    for (let R = 0; R < s.length; R++) {
      map.set(s[R], (map.get(s[R]) || 0) + 1);
      maxLength++;

      while (map.size > k && map.has(s[L])) {
        map.set(s[L], map.get(s[L]) - 1);
        maxLength--;

        if (map.get(s[L]) <= 0) {
          map.delete(s[L]);
        }

        L += 1;
      }

      res = Math.max(res, maxLength);
    }

    if (map.size < k) {
      return -1;
    }

    return res;
  }
}

const sol = new Solution();
// console.log(sol.longestKSubstr("aabacbebebe", 3));
// console.log(sol.longestKSubstr("aaaa", 2));
// console.log(sol.longestKSubstr("aabaaab", 2));
console.log(sol.longestKSubstr("jyvdrqpdvvcvlg", 7));
