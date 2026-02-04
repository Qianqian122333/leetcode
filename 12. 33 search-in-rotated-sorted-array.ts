function isBlue(i: number, nums: number[], target: number): boolean {
  const end = nums[nums.length - 1];
  if (nums[i] <= end) {
    return target <= nums[i] || target > end;
  } else {
    return target <= nums[i] && target > end;
  }
}
function search(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (isBlue(mid, nums, target)) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  if (left < nums.length && nums[left] === target) {
    return left;
  }
  return -1;
}

/**
 * 搜索旋转排序数组 (LeetCode 33)
 * * --- 解题思路：蓝红二分法 ---
 * * 1. 核心映射：我们要找的是第一个 "蓝色" 的位置。
 * 这里的 "蓝色" 定义为：在旋转后的逻辑顺序中，当前元素 nums[i] 位于 target 的右侧（含 target 自身）。
 * * 2. 分段讨论 (关键点)：
 * 旋转数组被分成了两段递增区间：[左半大段] 和 [右半小段]。
 * 我们需要判断 nums[i] 和 target 分别在哪一段：
 * - 如果 nums[i] <= nums[n-1]，说明 nums[i] 在 [右半小段]；
 * - 反之，在 [左半大段]。
 * * 3. 逻辑组合：
 * - 情况 A：nums[i] 和 target 在同一段。直接比较 nums[i] >= target 即可。
 * - 情况 B：nums[i] 和 target 不在同一段。
 * - 如果 target 在 [左半大段]，nums[i] 在 [右半小段]：此时 nums[i] 逻辑上在 target 右边，返回 true。
 * - 如果 target 在 [右半小段]，nums[i] 在 [左半大段]：此时 nums[i] 逻辑上在 target 左边，返回 false。
 */

// function search(nums: number[], target: number): number {
//     const n = nums.length;
//     const end = nums[n - 1]; // 以最后一个元素作为分段基准

//     // 定义：nums[i] 是否在 target 的右侧（逻辑上大于等于 target）
//     const isBlue = (i: number): boolean => {
//         const x = nums[i];
        
//         // 核心逻辑判断
//         if (x <= end) { 
//             // 说明 nums[i] 在右半小段
//             if (target <= end) {
//                 // target 也在右半小段：同段比较
//                 return x >= target;
//             } else {
//                 // target 在左半大段：nums[i] 肯定在 target 的逻辑右侧
//                 return true;
//             }
//         } else {
//             // 说明 nums[i] 在左半大段
//             if (target <= end) {
//                 // target 在右半小段：nums[i] 肯定在 target 的逻辑左侧
//                 return false;
//             } else {
//                 // target 也在左半大段：同段比较
//                 return x >= target;
//             }
//         }
//     };

//     let left = 0;
//     let right = n - 1;

//     // 标准蓝红二分写法：寻找第一个蓝色
//     while (left <= right) {
//         // (left + right) >> 1 也是一种防溢出的写法
//         const mid = Math.floor(left + (right - left) / 2);
//         if (isBlue(mid)) {
//             right = mid - 1; // 尝试寻找更靠左的蓝色
//         } else {
//             left = mid + 1; // 还是红色，向右找蓝色
//         }
//     }

//     // 检查 left 是否越界，以及是否真的是 target
//     if (left < n && nums[left] === target) {
//         return left;
//     }
//     return -1;
// }