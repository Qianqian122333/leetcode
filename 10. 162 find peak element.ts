function findPeakElement(nums: number[]): number {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] < nums[mid + 1]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
}

// 红蓝染色法解析
// 核心思想：用红色表示“不可能是峰值”，蓝色表示“可能是峰值”，通过二分查找逐步缩小蓝色区域。

// 染色规则
// 红色区域 (red)：当前位置 不可能 是峰值

// 情况：nums[mid] < nums[mid + 1]

// 说明：右边有更大的数，所以 mid 肯定不是峰值 → 染红

// 蓝色区域 (blue)：当前位置 可能 是峰值

// 情况：nums[mid] >= nums[mid + 1]

// 说明：右边没有更大的数，峰值可能在 mid 或左边 → 染蓝

// 红蓝染色法详解：寻找峰值元素
// 一、算法思想概述
// 红蓝染色法的核心思想是：

// 划分两个区域：不可能区域（红色）和可能区域（蓝色）

// 逐步缩小可能区域，直到找到唯一答案

// 利用单调性：即使数组不完全有序，也存在可用于二分的性质

// 二、具体染色规则
// 定义颜色
// 红色 (Red)：这个位置绝对不可能是峰值

// 蓝色 (Blue)：这个位置可能是峰值

// 染色规则推导
// 对于任意位置 mid，我们比较 nums[mid] 和 nums[mid+1]：

// 情况 1：nums[mid] < nums[mid+1] → 染红色 🔴
// text
//     mid     mid+1
//      ↓       ↓
// ... 3  <   5  ...
//     ↗ (上升趋势)
// 为什么是红色？

// 因为 nums[mid] < nums[mid+1]，说明右边有更大的数

// 峰值要么在 mid+1 的位置，要么在更右边

// mid 本身绝对不可能是峰值（它不是局部最大值）

// 情况 2：nums[mid] ≥ nums[mid+1] → 染蓝色 🔵
// text
//     mid     mid+1
//      ↓       ↓
// ... 5  ≥   3  ...
//     ↘ (下降或持平趋势)
// 为什么是蓝色？

// 右边没有比它更大的数（或者是相等的）

// 峰值可能在：

// mid 位置（如果 nums[mid] > nums[mid-1]）

// mid 的左边某个位置

// mid 可能是峰值，所以保持蓝色

// 三、算法流程详解
// 初始化
// typescript
// let left = 0;
// let right = nums.length - 1;
// 初始时，整个数组 [0, n-1] 都是蓝色区域（都可能包含峰值）

// left 和 right 定义了当前蓝色区域的边界

// 循环过程
// typescript
// while (left < right) {  // 当蓝色区域不止一个元素时
//     const mid = Math.floor((left + right) / 2);

//     if (nums[mid] < nums[mid + 1]) {
//         // 情况1：mid是红色 → 峰值在右边
//         left = mid + 1;  // 蓝色区域左边界右移
//     } else {
//         // 情况2：mid是蓝色 → 峰值在mid或左边
//         right = mid;     // 蓝色区域右边界左移
//     }
// }
// 终止条件
// 当 left == right 时：

// 蓝色区域缩小到只有一个元素

// 根据我们的染色规则，这个元素一定是峰值

// 返回 left（或 right，此时两者相等）
