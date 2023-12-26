# 用户头像
此目录下按照微博用户id存储头像图片
# usage
## 路径
"/static/ico/{}.jpg".format(id)
## 插入语法
其中，picture属性指向路径字符串
> <template slot-scope="scope">
>   <img :src="scope.row.picture" style="height: 40px;border-radius: 50%;object-position: center;"/>{{scope.row.column2}}
> </template>
