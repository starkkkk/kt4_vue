# 用户头像
此目录下按照微博用户id存储头像图片
# usage
## 路径
"/static/ico/{}.jpg".format(id)
## 插入语法
使用img标签，内容如下
> :src="scope.row.picture" style="height: 40px;border-radius: 50%;object-position: center;"


其中，picture属性指向路径字符串


