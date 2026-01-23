<template>
    <Header />

    <section class="banner-box">
        <img class="banner-login" src="/images/banner-login.jpg" alt="banner">
    </section>

    <main class="main">

        <div id="mainProduct" class="slice-block">
            <div class="gray-block">
                <div class="gray-title">
                    <img src="/images/logo.svg" alt="HolidayDessertLogo" />
                </div>
                <div class="gray-description">Please Relax & Enjoy Our Desserts</div>
                <div class="gray-text">
                    <div class="gray-text-inside">我們在桃園楊梅區的小巷弄裡，是只營業於假日的神秘小店，在這裡想要邀請你一起品嘗我們簡單而愜意的生活。</div>
                </div>
            </div>

            <div class="white-block">
                <div class="white-inside">
                    <div class="white-left">
                        <img v-if="mainProductList[activeIndex] && mainProductList[activeIndex].PD_PICTURE"
                            :src="BACKEND_URL + '/' + mainProductList[activeIndex].PD_PICTURE"
                            :alt="mainProductList[activeIndex].PD_NAME" />
                        <img v-else :src="BACKEND_URL + '/holidayDessert/front/images/dessert1.jpg'" />
                    </div>
                    <div class="white-right">
                        <div class="white-right-top">
                            <div v-for="(mainProduct, index) in mainProductList" :key="index"
                                :class="['white-right-btn', activeIndex === index ? 'active' : '']"
                                @click="setActive(index)">{{ mainProduct.PD_NAME }}</div>
                        </div>
                        <div class="white-right-body" v-if="mainProductList.length > 0 && mainProductList[activeIndex]">
                            <div class="white-right-title">甜點描述</div>
                            <div class="white-right-description">
                                <li v-for="(description, index) in split(mainProductList[activeIndex].PD_DESCRIPTION)"
                                    :key="index">{{ description }}</li>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

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

        <div class="new-arrival-block">
            <div class="new-arrival-background"><img src="/images/new-arrival-background.jpg" /></div>
            <div class="new-arrival-title">新品上市</div>
            <div class="new-arrival-carousel">
                <div class="new-arrival-item">
                    <div class="new-arrival-images"><img src="/images/carousel-images2.jpg" /></div>
                    <div class="new-arrival-info">
                        <div class="new-arrival-name">品名品名品名品名</div>
                        <div class="new-arrival-price">$200</div>
                    </div>
                </div>
                <div class="new-arrival-item">
                    <div class="new-arrival-images"><img src="/images/carousel-images2.jpg" /></div>
                    <div class="new-arrival-info">
                        <div class="new-arrival-name">品名品名品名品名</div>
                        <div class="new-arrival-price">$200</div>
                    </div>
                </div>
                <div class="new-arrival-item">
                    <div class="new-arrival-images"><img src="/images/carousel-images1.jpg" /></div>
                    <div class="new-arrival-info">
                        <div class="new-arrival-name">品名品名品名品名</div>
                        <div class="new-arrival-price">$200</div>
                    </div>
                </div>
                <div class="new-arrival-item">
                    <div class="new-arrival-images"><img src="/images/carousel-images1.jpg" /></div>
                    <div class="new-arrival-info">
                        <div class="new-arrival-name">品名品名品名品名</div>
                        <div class="new-arrival-price">$200</div>
                    </div>
                </div>
            </div>
        </div>

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
    <Footer />
</template>

<script>
import { BACKEND_URL } from '@/constants/Env'
import { indexService } from '@/service/IndexService'
import '@/css/index.css'
import '@/assets/plugins/sweetalert/sweetalert.css'
import '@/assets/plugins/sweetalert/sweetalert.min.js'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Form from '@/components/Form.vue'
import ChatRoom from '@/components/ChatRoom.vue'

export default {
    name: 'IndexView',
    components: {
        Header,
        Footer,
        Form,
        ChatRoom
    },
    data() {
        return {
            BACKEND_URL,
            mainProductList: [],
            activeIndex: 0
        }
    },
    created() {
        this.getMainProductList()
    },
    methods: {
        getMainProductList() {
            axios.post(indexService.getMainProductList())
                .then(response => {
                    this.mainProductList = response.data.result
                })
                .catch(error => {
                    console.error(error)
                })
        },
        setActive(index) {
            this.activeIndex = index
        },
        split(description) {
            return description.split('\n')
        }
    }
}

</script>
