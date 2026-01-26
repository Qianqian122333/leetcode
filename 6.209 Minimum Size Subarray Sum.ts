function minSubArrayLen(target: number, nums: number[]): number {
  let n = nums.length;
  let left = 0;
  let sum = 0;
  let ans = n + 1;
  for (let i = 0; i < n; i++) {
    let x = nums[i];
    sum += x;
    while (sum >= target) {
      ans = Math.min(ans, i - left + 1);
      sum -= nums[left];
      left++;
    }
  }

  return ans > n ? 0 : ans;
}
// 滑动窗口
// for (初始化; 条件; 步进)
// 而你的条件是 i++（这会立即自增并返回自增前的值，第一次循环 i = 0，条件 i++ 会先判断 0 为 false，直接导致循环一次都不执行）。
