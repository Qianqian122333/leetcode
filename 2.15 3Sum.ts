function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);
  let n = nums.length;
  const res = [];
  for (let i = 0; i < n - 2; i++) {
    let x = nums[i];
    if (i > 0 && x === nums[i - 1]) {
      continue;
    }
    if (x + nums[i + 1] + nums[i + 2] > 0) {
      break;
    }
    if (x + nums[n - 2] + nums[n - 1] < 0) {
      continue;
    }
    let left = i + 1;
    let right = n - 1;
    while (left < right) {
      let sum = x + nums[left] + nums[right];
      if (sum > 0) {
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        res.push([x, nums[left], nums[right]]);
        left++;
        right--;
        while (nums[left] === nums[left - 1]) {
          left++;
        }
        while (nums[right] === nums[right + 1]) {
          right--;
        }
      }
    }
  }
  return res;
}

// 思路总结：

// 排序数组，以便使用双指针。

// 遍历数组，固定第一个数，然后使用双指针在剩余部分寻找两个数，使得三数之和为0。

// 在固定第一个数时，进行去重（如果和前一个数相同，跳过）和优化（如果当前数加上最小的两个数已经大于0，则退出循环；如果当前数加上最大的两个数仍然小于0，则跳过当前数，继续下一个）。

// 使用双指针，根据三数之和与0的比较，移动指针。当三数之和等于0时，记录结果，并移动指针，同时跳过重复值（注意避免越界）。

// 返回结果。

// 错误点

// 去重逻辑位置调整：

// 将 if (i > 0 && nums[i] === nums[i - 1]) 从while循环内部移到for循环开始处

// 在找到解后，移动left和right指针时，也要跳过重复值

// 移除提前返回：

// 删除for循环内部的 return res;，让整个循环执行完

// 简化边界检查：

// 移除了开头的两个边界检查，因为它们在很多情况下不正确。例如，数组 [-2, -1, 0, 1, 2] 的最小三个数之和是-3，虽然小于0，但仍可能有解

// 改进while循环逻辑：

// 确保在移动指针时始终检查 left < right

// 明确计算和比较，提高代码可读性
