<template>
    <el-container class="main">
        <el-aside :width="screenWidth>1200?200:60" @mouseover="OnMouseoverElAside">
            <side-bar :isCollapse="screenWidth>1200?false:true">
            </side-bar>
        </el-aside>
        <el-container>
            <el-header style="text-align: right; font-size: 16px; font-weight: bold;">
                <div class="nav">
                    <div></div>
                    <div class="nav-right">
                        <span>王小虎</span>
                        <el-dropdown>
                            <i class="el-icon-more" style="margin-left: 15px;font-size:20px;"></i>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item>查看</el-dropdown-item>
                                <el-dropdown-item>新增</el-dropdown-item>
                                <el-dropdown-item>删除</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>

                    </div>
                </div>

            </el-header>
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/login' }">活动管理</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/login' }">活动列表</el-breadcrumb-item>
                <el-breadcrumb-item>活动详情</el-breadcrumb-item>
            </el-breadcrumb>
            <el-main>
                <el-container class="content">

                    <el-table :data="tableData">
                        <el-table-column prop="date" label="日期" width="140">
                        </el-table-column>
                        <el-table-column prop="name" label="姓名" width="120">
                        </el-table-column>
                        <el-table-column prop="address" label="地址">
                        </el-table-column>
                    </el-table>
                </el-container>
            </el-main>
        </el-container>
    </el-container>
</template>


<script>
import sideBar from "@/components/sidebar"
export default {
    data() {
        return {
            isCollapse: true,
            screenWidth: document.body.clientWidth,
        };
    },
    components: {
        sideBar,
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        OnMouseoverElAside() {
            this.isCollapse = !this.isCollapse

        }
    },
    watch: {
        /* 监听*/
        screenWidth(val) {
            this.screenWidth = val;
            console.log("this.screenWidth", this.screenWidth)
        }
    },
    created() {


    },
    mounted() {
        const that = this
        window.onresize = () => {
            return (() => {
                window.screenWidth = document.body.clientWidth;
                that.screenWidth = window.screenWidth;
            })();
        }
        console.log("================>", this.$router)
    }
}
</script>
<style lang="less" scoped>
.main {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #cccc;
}
.el-aside {
}

.el-header {
    background-color: #fff;
    border: 1px solid #ebebeb;
    border-bottom: none;
    display: flex;
    flex-direction: column;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}
.el-main {
    background-color: #f3f3f3;
}
.content {
    height: 1000px;
    display: flex;
    flex-direction: column;
}
.nav {
    height: 60px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    &-right {
        width: 100px;
        background-color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
.el-breadcrumb {
    background-color: #fff;
    padding-left: 20px;
    border: 1px solid #ebebeb;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
    .el-breadcrumb__item {
        display: flex;
        align-items: center;
        height: 50px;
    }
}
</style>