<template>
    <Header />

    <section class="banner-box">
        <img class="banner-login" src="/images/banner-login.jpg" alt="banner">
    </section>

    <main class="main">
        <section class="verification-section">
            <form id="verification" class="verification-area">
                <div>會員E-mail認證成功</div>
                <div class="verification-input">
                    <div class="email-block">
                        <div>親愛的會員您好，歡迎您成為假日甜點網站會員，點擊【<span class="gold">完成認證</span>】後開始瀏覽本站</div>
                    </div>
                    <div class="verification-submit"><a href="/holidayDessert/index">完成認證</a></div>
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
    name: 'verificationSuccess', // 使用多單詞名稱以符合 vue/multi-word-component-names
    components: {
        Header
    }
}
</script>