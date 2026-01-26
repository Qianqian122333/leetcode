function numSubarrayProductLessThanK(nums: number[], k: number): number {
  if (k <= 1) return 0;
  let product = 1;
  let result = 0;
  let left = 0;
  for (let right = 0; right < nums.length; right++) {
    product *= nums[right];
    while (product >= k) {
      product /= nums[left];
      left++;
    }
    result += right - left + 1;
  }
  return result;
}

// 滑动窗口

// 算法步骤注释
// 边界情况
// 如果 k <= 1，因为 nums 中所有元素都是正整数（或非负，但一般题目说明正整数），最小乘积至少为 1，所以不可能有乘积小于 k 的子数组，直接返回 0。

// 初始化

// product：当前窗口内所有数的乘积。

// result：结果计数器。

// left：窗口左边界（初始为 0）。

// 滑动窗口过程

// 用 right 从 0 开始向右移动，每次将 nums[right] 乘入 product。

// 如果乘入后 product >= k，则不断从左边踢出元素（product /= nums[left]，left++），直到乘积再次 < k。

// 此时，窗口 [left, right] 内所有子数组（以 right 为右端点的子数组）都满足乘积 < k，这样的子数组个数 = right - left + 1，累加到结果中。

// 核心原理

// 当窗口满足乘积 < k 时，固定右端点 right，左端点可以是 left 到 right 之间的任意位置，共 right - left + 1 个连续子数组。

// 例如窗口为 [2, 3, 4] 且满足乘积 < k，则以 4 为右端点的子数组有：
// [4]、[3,4]、[2,3,4]，共 3 个，恰好是 right - left + 1。

// 时间复杂度
// 每个元素最多进入窗口一次、离开窗口一次

// 时间复杂度：O(n)，空间复杂度：O(1)
