## 菜鸟的面试之路

请了两天串休假，约了5家面试，中途有加了两家，一共7家面试，面着面着感觉信心足了，不过我想这应该是盲目自信，哈哈。

在面试过程中，能够顺利应对，可能主要是之前的几次面试其他人的经历，现在被面的时候感觉就和当初面试其他人一样，只不过这次提问的顺序变了，先让被面试者提问。

依次介绍下，这几家公司，第一家是中软国际，师兄内推过去的，不过呢外包公司觉得我做的时间比较短，所以就没要我。面试的姐姐，对我说爱学习的到哪里都不会差的，我觉得她说的有道理，哈哈。

第二家是京东，大厂，没想到能给我面试机会，更没想到的是竟然能够进入二面，不过呢，也就进入了二面就没消息了。不过可能进入二面之后整个人有点膨胀。

第三家是中投在线，他的总公司在上海，北京的这个是刚刚成立的分部，所以内心还是有点担心是不是有点不靠谱，不过面试我的哥哥应该是技术大牛，谈到了薪资的程度，感觉有点可能性，就是可能之后要早10晚10，一周6天常态化……。当然人家也没说要我。

第四家是周五上午面的，中农信达，是神州集团的子公司，去年刚成立，面试我的是个成熟的姐姐，主要是内容和我现在的工作内容比较吻合，照她的话说我可以直接上手做，甚至不用学习的时间。当然也没说一定要我，让我周一等通知。其实我也在权衡，只不过这个的诱惑相对小。哈哈

第五家原本约在周二的上午，结果因为中农信达的面试比较早，所以就直接面了这家，是个外企，叫易车，其实整个面试过程中我觉得我答的还可以，最后面试的哥哥对我说，要是可以的话会通知二面，说实话我好想去，好想去个大公司，感受下正规的开发流程到底是怎样的。

第六家约在周五上午11点，高斯教育，后来听说面试我的是百度的大牛，问了我一些计算机组成原理、数据结构、排序的特别基础的知识，感觉答的有点乱，后来据内推的我的朋友说，我的状态时待定，下周三给消息，这么看的话应该是没有消息了。不过，我的内心还是想抱有一线希望。毕竟也是上市公司。

第七家，在下午两点，优诺科技，做的是图形设计，面试我的应该是哥老司机，后来还问我了一个1，10，1000，10000的问题，逻辑提，换还是不换呢，还是不换吧，大家都不想换。换来的一定没有自己的好，谁还换呢，反之，肯定会换。

等消息中，有点焦急。

# 总结一下记忆深刻的面试题：

> 样式、布局是我的短板，面试官真的会可着你的短板问你问题……

## 1.三列布局：

1. [绝对定位法](https://jsfiddle.net/u66f9agk/3/)

2. [流体布局](https://jsfiddle.net/u66f9agk/1/)

3. [BFC三栏布局](https://jsfiddle.net/wuzahhcc/)

    BFC，Block Formatting Context，块级格式上下文。是一个独立渲染的区域,与外部区域互不影响。

    BFC规则：

    1. 内部的Box在垂直方向，一个接一个的放置。
    2. Box垂直方向的距离由margin决定。属于同一个BFC的两个相邻的Box的margin会发生重叠。
    3. 每个元素的marginbox的左边，与包含块border box的左边相接触（对于从左往右的格式化,否则相反）。即使存在浮动也是如此。
    4. BFC区域不会与float box重叠。
    5. BFC就是页面上一个隔离的独立容器，容器里面的元素不会影响到外边的元素。反之亦如此。
    6. 计算BFC高度时，浮动元素也参与计算。

    如何生成BFC:

    1. 根元素？
    2. float属性值不为none
    3. position为absolute或者fixed
    4. display为inline-block, table-cell, table-caption, flex, inline-flex
    5. overflow不为visible

    用处：（稍后补例子）
    1. 两栏布局
    2. 清除内部浮动
    3. 防止垂直margin重叠

> 绝对定位布局、流体布局、BFC三栏布局的共性缺点，就是主体内容放在最后加载，影响了用户体验。

4.  // todo



## 2.冒泡排序

[for写法](https://jsfiddle.net/408o74u5/) 

[while写法](https://jsfiddle.net/408o74u5/1/)


原理：
1. 比较相邻的两个元素。如果第一个比第二个大，就交换他们两个。
2. 对每一对相邻的元素做同样的工作，从开始第一对到结尾的最后一对。在这一点，最后的元素应该是最大的数。
3. 针对所有元素重复以上步骤，除了最后一个。
4. 持续每次对越来越少的元素重复上面的步骤，直到没有任何一对数字需要比较。

平均复杂度：O(n2)

## 3.数组排序

[普通数组排序](https://jsfiddle.net/0rudag2q/)

[对象数组排序](https://jsfiddle.net/0rudag2q/1/)

## 4.用css实现菜单的三条横线、和关闭的X按钮。

> 一般的情况怎么可能会自己去实现3条横线或者关闭按钮，不过作为知识点，可能还是要了解一下。

[三线菜单](https://jsfiddle.net/4n2qpn8d/1/)

结合着网上的资料，试着做了一下，其实这里面主要是background-clip这个属性的应用，以这个作为面试题的我只能说，你是在考验面试者的道德吗，考验他他们的百度提取关键词的能力吗。

background-clip: border-box|padding-box|content-box;

- boder-box: 背景到边框
- padding-box: 背景到内边距框
- content-box: 背景到内容框


默认值 border-box

[w3school demo](http://www.w3school.com.cn/tiy/c.asp?f=css_background-clip)

CSS3的属性，规定了背景显示到的区域。


## 5.样式问题之-img元素是块级的还是行内的。

[inline-block](https://segmentfault.com/q/1010000001862222)

貌似是行内-块级的，那么这样的元素设置垂直水平居中时，可以用vertical-align 和 text-align 吗，可以试一下。

// todo



