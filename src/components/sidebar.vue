<template>
    <!-- <div class="main"> -->
    <el-menu default-active="0" class="el-menu-vertical" background-color="#333" text-color="#c3c3c3" @open="handleOpen" @close="handleClose"
        :collapse="isCollapse" :collapse-transition="false">
        <el-menu-item>
            <i class="el-icon-setting"></i>
            <span slot="title">管理首页</span>
        </el-menu-item>
        <el-submenu index="1">
            <template slot="title">
                <i class="el-icon-location"></i>
                <span slot="title">导航一</span>
            </template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
        </el-submenu>
        <el-submenu index="2">
            <template slot="title">
                <i class="el-icon-location"></i>
                <span slot="title">导航2</span>
            </template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
        </el-submenu>
    </el-menu>
    <!-- </div> -->
</template>

<script>
export default {
    name: 'sidebar',
    props: {
        isCollapse: {
            type: Boolean,
            default: false,
        }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-menu-vertical:not(.el-menu--collapse) {
    width: 200px;
    height: 100%;
}
.el-menu-vertical .el-menu-item {
    background-color: #232323 !important;
}
.el-menu-vertical .el-menu-item.is-active {
    background-color: #1188ff !important;
    color: #eff6ff;
}
</style>
