function trap2(height: number[]): number {
  let pre_max = 0;
  let suf_max = 0;
  let res = 0;
  let left = 0;
  let right = height.length - 1;
  while (left < right) {
    pre_max = Math.max(pre_max, height[left]);
    suf_max = Math.max(suf_max, height[right]);
    if (pre_max < suf_max) {
      res += pre_max - height[left];
      left++;
    } else {
      res += suf_max - height[right];
      right--;
    }
  }
  return res;
}

/*
题解思路：双指针法（Two Pointers）

- 核心观测：在任意时刻，较矮的一侧限定了那一侧能承载的水量。
- 算法要点：使用两个指针 `left` 和 `right` 从数组两端向中间收缩，同时维护两侧的最高高度 `pre_max`（左侧）和 `suf_max`（右侧）。
  - 每步先更新两侧最高高度：`pre_max = max(pre_max, height[left])`，`suf_max = max(suf_max, height[right])`。
  - 若 `pre_max < suf_max`，说明左侧被右侧更高的墙“限制”，此时能接的水为 `pre_max - height[left]`（可能为 0），然后 `left++`。
  - 否则类似地按右侧计算并 `right--`。

- 正确性说明：因为较矮一侧决定了当前可以存多少水，移动较矮一侧不会丢失应计入的水量；算法逐步把每个位置的蓄水量累加。

- 复杂度：时间 O(n)，只遍历一次；空间 O(1)，只使用常数额外变量。

- 备选解法：
  - 预处理左右最大高度数组（left_max/right_max），同样 O(n) 时间但需要 O(n) 额外空间。
  - 单调栈方法，适合一次性处理每个柱子的边界，同样 O(n) 时间，但实现上略复杂且需要 O(n) 栈空间。

此实现即为常用的双指针最优解，简洁且高效。
*/
