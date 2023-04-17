动画的写法
1.css
2.只保留opacity属性，去掉display属性才能实现css的动画效果。但是只有css是不合适的，因为opacity还是占用元素位置。
可以用react Transition group 来做，它是针对react动画实现的库，用来实现组件从无到有（反）的动画效果。

<!-- React.Children.only expected to receive a single React element child. -->
在Transition包裹的jsx中加入了，

unmountOnExit 可以解决鼠标离开submenu时没有动画效果的情况
