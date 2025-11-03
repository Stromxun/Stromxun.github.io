var posts=["2025/07/15/LeetCode/两数之和/","2025/11/03/AIMA/CS188/P0/","2025/07/25/算法4/hw/《算法4》-习题2.1/","2025/09/15/花书/notes/C1/","2025/11/03/AIMA/notes/Search_Algorithm/","2025/09/10/计算理论/notes/C0/","2025/09/15/计算理论/notes/C1/","2025/07/17/算法4/notes/《算法4》-第二章-排序/","2025/09/11/计算理论/hw/C0/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };