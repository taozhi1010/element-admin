<template>
    <div class="main">
        <div class="center">
            <p>ACFUN</p>
            <div class="admin">
                <p>管理后台</p>
                <el-input placeholder="账号" suffix-icon="el-icon-user" v-model="admin" class="input">
                </el-input>
                <el-input placeholder="密码" v-model="passWord" show-password class="input">
                </el-input>
                <div class="code">
                    <el-input placeholder="验证码" v-model="code" class="input">
                    </el-input>

                </div>
                <el-button type="primary" class="primary" @click="login">立即登陆</el-button>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            admin: "",
            passWord: "",
            code: ""
        }
    },
    methods: {
        login() {
            localStorage.setItem("isLogin", true)
            this.$router.push({ name: 'ManagerIndex' })
        }
    }
}
</script>

<style lang="less">
.main {
    height: 100%;
    width: 100%;
    background: linear-gradient(to top, #636363, #a2ab58);
    padding-top: 50px;
    .center {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        > p {
            margin-bottom: 30px;
            font-size: 30px;
            font-weight: bold;
            color: #262626;
        }
        > div {
            width: 400px;
            height: 300px;
            padding: 20px 15px 20px 15px;
            background-color: #fff;
            display: flex;
            flex-direction: column;
            align-items: center;
            > p {
                margin-bottom: 20px;
            }
            > .input {
                margin-bottom: 10px;
            }
            > .code {
                width: 100%;
                margin-bottom: 20px;
                > .input {
                    width: 130px;
                }
            }
            > .primary {
                width: 100%;
            }
        }
    }
}
</style>