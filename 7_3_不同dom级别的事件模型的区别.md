#7.3 不同DOM级别的事件模型的区别

在老事件模型和新的DOM Level 2事件模型之间，最主要的区别在于：其一，新模型并不依赖于特定的事件处理程序属性；其二，可以对任何一个对象的任何一种事件注册多个事件处理程序函数。用来代替事件处理程序属性的是每个对象提供的3个方法：addEventListener、removeEventListener和dispatchEvent。第一个方法用来添加一个事件监听器，第二个方法用来删除一个已有的监听器，第三个方法用来调度一个新的事件。addEventListener的语法是：  
`object.addEventListener('event', eventFunction, boolean);`

## 知识测验

1. 编写一段程序代码，使用DOM Level 0方法为document的click事件制定一个事件处理程序函数。  
   `document.onclick = clickMe;`  
   
2. 现在，使用更现代的DOM Level 2事件处理机制为document添加click事件处理程序(不用考虑跨浏览器的兼容问题)。  
   `document.addEventListener("click", clickMe, false);`  
   
3. 如何使问题2中所写的代码能够安全地运行在所有浏览器上？  

   ```
   if (document.addEventListener) {
       document.addEventListener("click", clickMe, false);
   } else {
       document.addEvent("onclick", clickMe);
   }
   ```  
   