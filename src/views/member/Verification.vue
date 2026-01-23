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
import '@/css/verification.css'
import Header from '@/components/Header.vue'

export default {
    name: 'verification', // 使用多單詞名稱以符合 vue/multi-word-component-names
    components: {
        Header
    }
}
</script>