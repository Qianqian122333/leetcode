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
