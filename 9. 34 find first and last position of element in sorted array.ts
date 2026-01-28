function findFirstPosition(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      right = mid - 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return left;
}
function searchRange(nums: number[], target: number): number[] {
  const firstPos = findFirstPosition(nums, target);
  if (firstPos === nums.length || nums[firstPos] !== target) {
    return [-1, -1];
  }
  const lastPos = findFirstPosition(nums, target + 1) - 1;
  return [firstPos, lastPos];
}

// 与其直接找目标值，不如寻找目标值在数组中“应该出现的最左位置”。

// 定义 lowerBound 逻辑： 我们要实现一个函数，它返回数组中 第一个大于或等于 target 的元素的索引。

// 如果 nums[mid] < target，说明目标还在右边，left = mid + 1。

// 如果 nums[mid] >= target，说明当前 mid 可能是答案，或者答案在更左边，所以收缩右边界 right = mid - 1。

// 最终结果： 循环结束时，left 指针会精准地停在第一个满足条件的索引上。

// 寻找左端点（firstPos）： 直接调用 lowerBound(nums, target)。

// 校验： 因为 lowerBound 即使在目标不存在时也会返回一个插入位置，所以必须检查：firstPos 是否越界，以及 nums[firstPos] 是否真的等于 target。

// 寻找右端点（lastPos）： 这是最聪明的地方：target 的最后位置，等同于 target + 1 的第一个位置再减去 1。

// 例如：在 [5, 8, 8, 10] 中找 8 的结束位。

// 找 9 的 lowerBound，会找到 10 的位置（索引 3）。

// 3 - 1 = 2，索引 2 正好是最后一个 8 的位置。
