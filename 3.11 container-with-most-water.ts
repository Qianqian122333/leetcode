function maxArea(height: number[]): number {
  let ans = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    let Area = (right - left) * Math.min(height[left], height[right]);
    ans = Math.max(ans, Area);
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return ans;
}

/**
 * 解题思路：双指针法
 *
 * 1. 核心公式：Area = (right - left) * min(height[left], height[right])
 *    - 矩形的宽度由两个指针之间的距离决定。
 *    - 矩形的高度由较短的那根柱子决定（木桶效应）。
 *
 * 2. 初始状态：
 *    - 指针 left 指向数组开头，right 指向数组末尾。此时宽度最大。
 *
 * 3. 移动逻辑（贪心策略）：
 *    - 每次移动指向“较短柱子”的指针。
 *    - 理由：
 *      - 如果移动较高的柱子，宽度变小且高度依然受限于原来的短板，面积一定会减小。
 *      - 如果移动较低的柱子，虽然宽度变小，但如果遇到一根更高的柱子，高度可能增加，从而有机会获得更大的面积。
 *
 * 4. 复杂度：
 *    - 时间复杂度：O(n)，只需遍历数组一次。
 *    - 空间复杂度：O(1)，只需常数级别的额外空间。
 */
