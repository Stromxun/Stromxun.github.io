var posts=["2025/07/15/LeetCode/两数之和/","2025/07/25/算法4/《算法4》-习题2.1/","2025/07/17/算法4/《算法4》-第二章-排序/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };