function lengthOfLongestSubstring(s: string): number {
  let ans = 0;
  let left = 0;
  const map = new Map<string, number>();
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    while (map.has(char)) {
      const leftChar = s[left];
      map.delete(leftChar);
      left++;
    }
    // ⭐ 关键修正：把当前字符加入 map，标记它已经在窗口中了
    map.set(char, i);
    ans = Math.max(ans, i - left + 1);
  }
  return ans;
}

// 滑动窗口的核心逻辑顺序应该是：先排除障碍，再接纳新人。
// “先清场，再入场，最后量长度。”

// 清场：while (map.has(char)) —— 只要新来的字符和屋子里的人重名，就让屋子里的人从左边出去，直到没人重名为止。

// 入场：map.set(char, i) —— 现在安全了，新成员正式入驻。

// 量长度：Math.max(...) —— 记录下当前屋子里有多少人。
