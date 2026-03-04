<template>
    <section class="banner-box">
        <img class="banner-login" src="/images/banner-login.jpg" alt="banner">
    </section>
    <main class="main">
        <MainProduct />
        <Popular />
        <NewArrival />
        <Comment />
    </main>
    <Form />
    <ChatRoom />
</template>

<script>
import '@/css/index.css'
import '@/assets/plugins/sweetalert/sweetalert.css'
import '@/assets/plugins/sweetalert/sweetalert.min.js'
import MainProduct from '@/components/MainProduct.vue'
import Popular from '@/components/Popular.vue'
import NewArrival from '@/components/NewArrival.vue'
import Comment from '@/components/Comment.vue'
import Form from '@/components/Form.vue'
import ChatRoom from '@/components/ChatRoom.vue'

export default {
    name: 'IndexView',
    components: {
        MainProduct,
        Popular,
        NewArrival,
        Comment,
        Form,
        ChatRoom
    }
}

</script>
