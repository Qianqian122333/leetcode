function trap(height: number[]): number {
  let pre_max: number[] = [];
  let suf_max: number[] = [];
  let res = 0;
  for (let i = 0; i < height.length; i++) {
    if (i === 0) {
      pre_max[i] = height[i];
    } else {
      pre_max[i] = Math.max(pre_max[i - 1], height[i]);
    }
  }
  for (let i = height.length - 1; i >= 0; i--) {
    if (i === height.length - 1) {
      suf_max[i] = height[i];
    } else {
      suf_max[i] = Math.max(suf_max[i + 1], height[i]);
    }
  }
  for (let i = 0; i < height.length; i++) {
    res += Math.min(pre_max[i], suf_max[i]) - height[i];
  }
  return res;
}
    /*
    解题思路：

    - 目标：计算每个下标 i 处可以存多少雨水。某一位置能存的水量等于左侧最高柱子和右侧最高柱子中的较小者减去当前位置的高度。

    - 方法：预处理得到每个位置左侧的最大高度数组 `pre_max` 和右侧的最大高度数组 `suf_max`：
      1. 从左到右遍历，pre_max[i] 保存 [0..i] 范围内的最高柱子高度；
      2. 从右到左遍历，suf_max[i] 保存 [i..n-1] 范围内的最高柱子高度；
      3. 最后遍历每个位置 i，将 `Math.min(pre_max[i], suf_max[i]) - height[i]` 累加到结果中。

    - 复杂度：时间复杂度 O(n)，需要三次线性扫描；额外空间复杂度 O(n)，用于存储 `pre_max` 和 `suf_max`。

    - 进阶：可以使用双指针方法将空间优化到 O(1)，思想是同时维护左右指针和左右最大值，移动较矮的一侧并累加水量。

    示例：height = [0,1,0,2]
      pre_max = [0,1,1,2]
      suf_max = [2,2,2,2]
      每位积水 = min(pre_max,suf_max) - height = [0,0,1,0] -> 总和 1

    */