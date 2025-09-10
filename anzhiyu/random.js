var posts=["2025/07/15/LeetCode/两数之和/","2025/07/25/算法4/hw/《算法4》-习题2.1/","2025/07/17/算法4/notes/《算法4》-第二章-排序/","2025/09/10/计算理论/notes/C0/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };