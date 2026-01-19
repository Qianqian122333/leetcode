function twoSum(numbers: number[], target: number): number[] {
  let left = 0;
  let right = numbers.length - 1;
  while (left < right) {
    const sum = numbers[left] + numbers[right];
    if (sum === target) {
      return [left + 1, right + 1];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  return [];
}

//思路
// 使用双指针法，初始化两个指针分别指向数组的开头和结尾。
// 计算两个指针所指向的元素之和。
// 如果和等于目标值，返回两个指针的索引（加1以符合题目要求）。
// 如果和小于目标值，左指针右移以增加和。
// 如果和大于目标值，右指针左移以减少和。
// 重复上述步骤直到找到目标值或两个指针相遇。
