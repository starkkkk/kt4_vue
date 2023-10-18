<template>
    <div class="weibo">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
              <h2 style="text-align: center">热门博文</h2>
            </div>

            <el-collapse >
                <el-collapse-item v-for="obj in weibo" :key="obj.id" >
                    <template slot=title>
                      <span>用户名:</span><el-tag>{{obj.name}}</el-tag>
                      <span>时间:</span><el-tag>{{obj.time}}</el-tag>
                    </template>
                    <el-card>
                        <p>{{obj.content}}</p>
                    <!-- <p v-else>{{obj.content.slice(0, 50) + "......"}}</p> -->
                    </el-card>
                </el-collapse-item>
            </el-collapse>
            <!-- <div v-for='obj in weibo' :key="obj.nickName">
                <el-row>
                    <el-col>
                        <el-row>
                            <span>用户名:</span><el-tag>{{obj.name}}</el-tag>
                        </el-row>
                        <el-row>
                            <span>时间:</span><el-tag>{{obj.time}}</el-tag>
                        </el-row>
                    </el-col>
                </el-row>
                <el-row><h3>正文内容</h3></el-row>
                <el-row>
                     <p v-if="obj.content.length < 50">{{obj.content}}</p>
                    <p v-else>{{obj.content.slice(0, 50) + "......"}}</p> -->

                <!-- </el-row>
            </div>  -->
        </el-card>

    </div>
</template>

<script>
export default {
    name: 'Weibo',
    props: {
        weibo: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            'title': "热门微博"
        }
    },
    // data() {
    //     return {
    //         'objs': [
    //             {
    //                 'id': 1,
    //                 'avatar': 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
    //                 'username': 'ig ning',
    //                 'time': '2019/1/3 14:00',
    //                 'source': '新浪微博',
    //                 'content': '我是世界第一打野我是世界第一打野我是世界第一打野我是世界第一打野我是世界第一打野我是世界第一打野我是世界第一打野我是世界第一打野我是世界第一打野我是世界第一打野我是世界第一打野我是世界第一打野我是世界第一打野我是世界第一打野我是世界第一打野我是世界第一打野我是世界第一打野我是世界第一打野我是世界第一打野我是世界第一打野我是世界第一打野我是世界第一打野我是世界第一打野我是世界第一打野'

    //             }
    //         ]
    //     }
    // }

}
</script>

<style>

</style>
