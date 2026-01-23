<template>
    <Header />

    <section class="banner-box">
        <img class="banner-login" src="/images/banner-login.jpg" alt="banner">
    </section>

    <main class="main">
        <section class="verification-section">
            <form id="verification" class="verification-area">
                <div>會員E-mail驗證</div>
                <div class="verification-input">
                    <div class="email-block">
                        <div>會員註冊後，系統會發送認證信到您的信箱，點選認證信連結後，即可登入會員，若您5分鐘內未收到驗證信，請檢查您的<span
                                class="gold">垃圾郵件或垃圾桶檔案夾</span>，或者點選【<span class="gold">重新寄送驗證信</span>】</div>
                        <input v-model="memEmail" type="email" placeholder="請重新輸入Email" maxlength="30">
                    </div>
                    <div class="verification-submit" @click="reSendEmail">重新寄送驗證信</div>
                </div>
            </form>
        </section>
    </main>

</template>

<script>
import '@/assets/plugins/sweetalert/sweetalert.css'
import '@/assets/plugins/sweetalert/sweetalert.min.js'
import Header from '@/components/Header.vue'

export default {
    name: 'verification', // 使用多單詞名稱以符合 vue/multi-word-component-names
    components: {
        Header
    }
}

// const data = []
// axios.get('http://localhost:8080/holidayDessert/getMainProductList')
// 				.then(response => {
// 					data = response.data.result;
// 				})

</script>
<style scoped>
.banner-box {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100vh;
    margin: 0;
    padding: 0;
    overflow: hidden;
    z-index: -1;
}

.banner-login {
    width: 120%;
    height: 100%;
    object-fit: cover;
    object-position: top;
    position: relative;
    transform: translateX(-15%);
}

.main {
    height: auto;
    display: inline-block;
    width: 90%;
}

.verification-section {
    margin: 50px 65px;
    width: 500px;
    height: 450px;
    border-radius: 16px;
    background: #201E2DE5;
    display: inline-block;
}

.verification-area {
    padding: 50px 80px;
    height: 100%;
    width: 100%;
    text-align: center;
    font-size: large;
    font-family: 'Noto Sans TC', sans-serif;
    color: white;
}

.verification-input {
    float: left;
    width: 100%;
}

.verification-input div {
    margin-top: 30px;
}

.verification-input div div {
    font-size: 0.8em;
    text-align: left;
    font-weight: lighter;
}

.verification-area div div input[type="email"] {
    outline: none;
    border: none;
    box-shadow: none;
    margin-top: 20px;
    padding-left: 20px;
    height: 44px;
    font-size: 0.8em;
    caret-color: #ffffff7e;
    border-radius: 22px;
    width: 100%;
    background: #FFFFFF2E;
    color: white;
}

.verification-area div div input[type="email"]::placeholder {
    color: #FFFFFF2E;
    font-size: 1em;
    margin: 0;
    padding: 0;
}

.verification-area div span a {
    color: white;
    text-decoration: none;
    font-size: 0.8em;
    margin: 0 10px;
}

.verification-area div span a span {
    margin: 16.2px 0 16.2px 5px;
    font-size: 1.4em;
    padding: 0;
    height: 22px;
    vertical-align: middle;
}

.verification-submit {
    width: 180px;
    height: 36px;
    border-radius: 43px;
    background: white;
    cursor: pointer;
    color: #201E2DE5;
    line-height: 36px;
    margin: 0 55px;
    font-size: 0.8em;
    font-weight: bold;
    display: inline-block;
}

.verification-submit a {
    text-decoration: none;
    color: black;
    width: 100%;
    height: 100%;
    display: block;
}

.verification-submit:hover {
    background: #FFBD5B;
    transition: all 0.3s ease;
}

.email-block {
    display: inline-block;
}

.gold {
    color: #FFBD5B;
}

@media only screen and (max-width: 1024px) {}

@media only screen and (max-width: 768px) {

    .main {
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .verification-section {
        margin: 50px 20px;
        max-width: 450px;
        min-width: 150px;
    }

    .verification-area {
        padding: 50px 65px;
    }

    .verification-submit {
        margin: 0;
    }

}

@media only screen and (max-width: 480px) {

    .verification-area {
        padding: 50px 30px;
    }

    .verification-area div span a {
        margin: 0 5px;
    }

}

@media only screen and (max-width: 376px) {

    .verification-submit {
        width: 100%;
    }

}
</style>