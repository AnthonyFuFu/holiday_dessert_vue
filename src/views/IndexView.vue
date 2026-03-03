<template>
    <section class="banner-box">
        <img class="banner-login" src="/images/banner-login.jpg" alt="banner">
    </section>

    <main class="main">
        <MainProduct />
        <div class="popular-block">
            <div class="popular-title">熱門推薦</div>
            <div class="popular-carousel owl-carousel owl-theme">
                <div class="popular-item item">
                    <div class="popular-images"><img src="/images/carousel-images2.jpg" /></div>
                    <div class="popular-info">
                        <div class="popular-name">品名品名品名品名</div>
                        <div class="popular-price">$200</div>
                    </div>
                </div>
                <div class="popular-item item">
                    <div class="popular-images"><img src="/images/carousel-images2.jpg" /></div>
                    <div class="popular-info">
                        <div class="popular-name">品名品名品名品名</div>
                        <div class="popular-price">$200</div>
                    </div>
                </div>
                <div class="popular-item item">
                    <div class="popular-images"><img src="/images/carousel-images1.jpg" /></div>
                    <div class="popular-info">
                        <div class="popular-name">品名品名品名品名</div>
                        <div class="popular-price">$200</div>
                    </div>
                </div>
                <div class="popular-item item">
                    <div class="popular-images"><img src="/images/carousel-images3.jpg" /></div>
                    <div class="popular-info">
                        <div class="popular-name">品名品名品名品名</div>
                        <div class="popular-price">$200</div>
                    </div>
                </div>
                <div class="popular-item item">
                    <div class="popular-images"><img src="/images/carousel-images3.jpg" /></div>
                    <div class="popular-info">
                        <div class="popular-name">品名品名品名品名</div>
                        <div class="popular-price">$200</div>
                    </div>
                </div>
            </div>
        </div>
        <NewArrival />

        <div class="comment-block">
            <div class="comment-title">假日甜點<br>Holiday Desserts</div>
            <div class="comment-description">只屬於你的快樂時光，請你和我們一起悠閒品嘗。</div>
            <div class="comment-message">
                <div class="commenter-block">
                    <div class="commenter">
                        <div class="commenter-images">
                            <img src="/images/carousel-images1.jpg" />
                        </div>
                        <div class="commenter-details">
                            <div class="commenter-name">傅勝宏1</div>
                            <div class="commenter-time">2024/05/23</div>
                        </div>
                    </div>
                    <div class="commenter-message">
                        只屬於你的快樂時光，請你和我們一起悠閒品嘗。只屬於你的快樂時光，請你和我們一起悠閒品嘗。只屬於你的快樂時光，請你和我們一起悠閒品嘗。只屬於你的快樂時光，請你和我們一起悠閒品嘗。</div>
                </div>

                <div class="commenter-block">
                    <div class="commenter">
                        <div class="commenter-images">
                            <img src="/images/carousel-images1.jpg" />
                        </div>
                        <div class="commenter-details">
                            <div class="commenter-name">傅勝宏2</div>
                            <div class="commenter-time">2024/05/23</div>
                        </div>
                    </div>
                    <div class="commenter-message">
                        只屬於你的快樂時光，請你和我們一起悠閒品嘗。只屬於你的快樂時光，請你和我們一起悠閒品嘗。只屬於你的快樂時光，請你和我們一起悠閒品嘗。只屬於你的快樂時光，請你和我們一起悠閒品嘗。</div>
                </div>

                <div class="commenter-block">
                    <div class="commenter">
                        <div class="commenter-images">
                            <img src="/images/carousel-images1.jpg" />
                        </div>
                        <div class="commenter-details">
                            <div class="commenter-name">傅勝宏3</div>
                            <div class="commenter-time">2024/05/23</div>
                        </div>
                    </div>
                    <div class="commenter-message">
                        只屬於你的快樂時光，請你和我們一起悠閒品嘗。只屬於你的快樂時光，請你和我們一起悠閒品嘗。只屬於你的快樂時光，請你和我們一起悠閒品嘗。只屬於你的快樂時光，請你和我們一起悠閒品嘗。</div>
                </div>
            </div>
        </div>
    </main>

    <!-- <button @click="showAlert">Show Alert</button> -->

    <Form />
    <ChatRoom />
</template>

<script>
import '@/css/index.css'
import '@/assets/plugins/sweetalert/sweetalert.css'
import '@/assets/plugins/sweetalert/sweetalert.min.js'
import Form from '@/components/Form.vue'
import ChatRoom from '@/components/ChatRoom.vue'
import MainProduct from '@/components/MainProduct.vue'
import NewArrival from '@/components/NewArrival.vue';

export default {
    name: 'IndexView',
    components: {
        MainProduct,
        NewArrival,
        Form,
        ChatRoom
    }
}

</script>
