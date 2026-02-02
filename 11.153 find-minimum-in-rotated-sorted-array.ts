function findMin(nums: number[]): number {
  let left = 0;
  let right = nums.length - 2;
  const target = nums[nums.length - 1];
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] > target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return nums[left];
}
// 解题思路：红蓝染色法1. 核心发现：寻找“二段性”在一个旋转排序数组中（例如 [3, 4, 5, 1, 2]），数组被分成了两段有序的部分。我们要找的“最小值”，本质上是第二段有序数组的第一个元素。为了使用二分查找，我们需要找到一个性质，能够把数组完整地切分为两部分：左半段（红色）：不包含最小值的区域。右半段（蓝色）：包含最小值及其右侧的区域。2. 确定“基准尺”（Target）为什么我们要选 target = nums[n - 1]？全局参照：旋转数组的最后一位 nums[n-1] 是一个完美的标杆。判定规则：任何大于 target 的数，一定属于左边那个“高的台阶”（红色区域）。任何小于等于 target 的数，一定属于右边那个“低的台阶”（蓝色区域）。3. 二分过程我们维护两个指针 left 和 right，以及隐藏的颜色含义：left - 1 及其左边的元素都是红色（确认不是最小值）。right + 1 及其右边的元素都是蓝色（确认是最小值或其右侧）。执行步骤：初始化 left = 0, right = n - 2（因为 n-1 是基准，我们查 n-1 之前的范围即可）。当 left <= right 时：计算中间位置 mid。如果 nums[mid] > target：说明 mid 在高位，属于红色，执行 left = mid + 1（染红）。如果 nums[mid] <= target：说明 mid 在地位，属于蓝色，执行 right = mid - 1（染蓝）。4. 为什么返回 nums[left]？根据红蓝染色法的特性，当 while 循环结束时（即 left > right）：left 会刚好停在第一个蓝色元素的位置。既然蓝色区域的定义是“最小值及其右侧的元素”，那么第一个蓝色元素就是我们要找的最小值。复杂度分析时间复杂度：$O(\log n)$，标准的二分查找。空间复杂度：$O(1)$，只使用了常数个额外变量。灵茶总结二分查找不是在找“值”，而是在找“边界”。只要能定义出清晰的“红蓝”性质，任何单调或分段单调的问题都逃不出你的手掌心。
