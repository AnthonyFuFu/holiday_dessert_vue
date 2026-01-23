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
    <Footer />
</template>

<script>
import { BACKEND_URL } from '@/constants/api'
import '@/assets/plugins/sweetalert/sweetalert.css'
import '@/assets/plugins/sweetalert/sweetalert.min.js'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Form from '@/components/Form.vue'

export default {
    name: 'IndexView',
    components: {
        Header,
        Footer,
        Form
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
            axios.post(BACKEND_URL + '/holidayDessert/getMainProductList')
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
<style scoped>
.main {
    height: auto;
    display: inline-block;
    width: 100%;
}

.banner-box {
    position: absolute;
    top: 0;
    width: 100%;
    min-height: 750px;
    max-height: 1100px;
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

.slice-block {
    margin-top: 550px;
    text-align: center;
}

.gray-block {
    width: 100%;
    height: 300px;
    background-color: #f5f5f5;
    transform: skewY(8.64deg);
    margin: 0;
    text-align: center;
    position: relative;
    z-index: 2;
}

.gray-title {
    display: flex;
    justify-content: center;
    align-items: last baseline;
    transform: skewY(-8.64deg);
    height: 120px;
}

.gray-title img {
    color: #201E2D;
    filter: brightness(0) saturate(100%) invert(11%) sepia(6%) saturate(4382%) hue-rotate(211deg) brightness(95%) contrast(102%);
    height: 50%;
}

.gray-description {
    display: flex;
    justify-content: center;
    align-items: center;
    transform: skewY(-8.64deg);
    height: 50px;
    font-weight: bold;
    color: #201E2D;
    font-family: 'Noto Sans TC', sans-serif;
    font-size: 24px;
    line-height: 35px;
    letter-spacing: 3px;
    font-size: 1.6em;
}

.gray-text {
    display: flex;
    justify-content: center;
    align-items: center;
    transform: skewY(-8.64deg);
    color: #B3B3B3;
    font-family: 'Noto Sans TC', sans-serif;
    font-size: 24px;
    line-height: 35px;
    letter-spacing: 3px;
    font-size: 1.6em;
}

.gray-text-inside {
    display: flex;
    justify-content: center;
    align-items: center;
    word-wrap: break-word;
    max-width: 665px;
}

.white-block {
    width: 100%;
    height: 665px;
    background-color: white;
    transform: skewY(8.64deg) translateY(-5px);
    margin: 0;
    text-align: center;
    position: relative;
    display: flex;
    justify-content: center;
}

.white-inside {
    width: 1160px;
    display: flex;
    height: 550px;
    transform: skewY(-8.64deg);
    text-align: center;
    justify-content: center;
}

.white-left,
.white-right {
    display: flex;
    align-items: center;
}

.white-left {
    width: 500px;
    justify-content: center;
}

.white-left img {
    width: 276px;
    height: 413px;
    border-radius: 138px;
    object-fit: cover;
}

.white-right {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 800px;
}

.white-right-top {
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
}

.white-right-btn,
.white-right-btn.active {
    cursor: pointer;
    height: 37px;
    width: 150px;
    margin: 9px;
    border-radius: 4px;
    font-size: 24px;
    line-height: 35px;
    letter-spacing: 3px;
    font-size: 1.6em;
    font-family: 'Noto Sans TC', sans-serif;
}

.white-right-btn {
    background-color: #F7F7FB;
    color: #26232C;
}

.white-right-btn.active {
    background-color: #26232C;
    color: #F7F7FB;
}

.white-right-body {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #828282;
    font-size: 24px;
    line-height: 35px;
    letter-spacing: 3px;
    font-size: 1.6em;
    font-family: 'Noto Sans TC', sans-serif;
}

.white-right-title {
    width: 90%;
    margin: 30px 20px 10px;
}

.white-right-description {
    text-align: left;
    width: 80%;
    margin: 15px;
}

.popular-block {
    margin-top: -100px;
    width: 100%;
    height: 500px;
    background-color: white;
    position: relative;
    z-index: 1;
    letter-spacing: 1.5px;
    font-family: 'Noto Sans TC', sans-serif;
}

.popular-title {
    line-height: 35px;
    letter-spacing: 3px;
    font-size: 2.4em;
}

.popular-carousel {
    margin-top: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 70px;
}

.popular-item {
    margin: 35px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.popular-images {
    width: 200px;
    height: 200px;
}

.popular-images img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 32px;
}

.popular-info {
    margin: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    font-weight: bold;
}

.popular-name,
.popular-price {
    display: inline-block;
    white-space: nowrap;
}

.popular-carousel .owl-item {
    transition: transform 0.3s ease;
}

.owl-item>.popular-item {
    cursor: pointer;
    margin: 6% 8%;
    transition: margin 0.4s ease;
}

.owl-item.center>.popular-item {
    cursor: auto;
    margin: 0;
}

.owl-item:not(.center)>.popular-item:hover {
    opacity: .75;
}

.popular-item:first-child .popular-images img {
    /* transform: translate(22%, 15%); */
}

.popular-item:last-child .popular-images img {
    /* transform: translate(-22%, 15%); */
}

.popular-item:first-child .popular-images,
.popular-item:last-child .popular-images {
    /* scale: 70%; */
}

.popular-item:first-child .popular-info .popular-name,
.popular-item:first-child .popular-info .popular-price,
.popular-item:last-child .popular-info .popular-name,
.popular-item:last-child .popular-info .popular-price {
    /* display: none; */
}

.new-arrival-background {
    position: absolute;
    width: 100%;
    height: 479px;
    z-index: -1;
}

.new-arrival-background:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 1;
    pointer-events: none;
}

.new-arrival-block img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.new-arrival-block {
    position: relative;
    z-index: 1;
    letter-spacing: 1.5px;
    color: white;
    font-family: 'Noto Sans TC', sans-serif;
}

.new-arrival-title {
    padding-top: 70px;
    line-height: 35px;
    letter-spacing: 3px;
    font-size: 2.4em;
}

.new-arrival-carousel {
    margin: 80px 0 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 52px;
}

.new-arrival-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.new-arrival-images {
    width: 160px;
    height: 160px;
}

.new-arrival-images img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 80px;
}

.new-arrival-info {
    margin: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    font-weight: bold;
}

.new-arrival-name,
.new-arrival-price {
    display: inline-block;
    white-space: nowrap;
}

.comment-block {
    width: 100%;
    padding: 80px 0;
    background-color: #F5F5F5;
}

.comment-title {
    display: flex;
    justify-content: center;
    align-items: last baseline;
    height: 80px;
    font-weight: bold;
    color: #201E2D;
    font-family: 'Noto Sans TC', sans-serif;
    font-size: 24px;
    line-height: 35px;
    letter-spacing: 3px;
    font-size: 1.6em;
}

.comment-description {
    margin: 28px 20px 90px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #201E2D;
    font-family: 'Noto Sans TC', sans-serif;
    font-size: 24px;
    line-height: 35px;
    letter-spacing: 3px;
    font-size: 1.6em;
    word-wrap: break-word;
}

.comment-message {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.commenter-block {
    margin: 11px;
    padding: 30px;
    width: 374px;
    height: 224px;
    background-color: white;
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.07);
}

.commenter {
    display: flex;
    align-items: center;
    width: 100%;
    background-color: white;
    font-family: 'Noto Sans TC', sans-serif;
}

.comment-message .commenter-block .commenter .commenter-images {
    width: 60px;
    height: 60px;
}

.comment-message .commenter-block .commenter .commenter-images img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 30px;
}

.commenter-details {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding-left: 20px;
    /* 可以根據需要調整 */
}

.commenter-name {
    letter-spacing: 2px;
    line-height: 24px;
    font-size: 1.4em;
    color: #201E2D;
}

.commenter-time {
    color: #828282;
}

.commenter-message {
    margin: 15px 0 15px;
    word-wrap: break-word;
    font-family: 'Noto Sans TC', sans-serif;
    line-height: 20px;
    letter-spacing: 2px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
}



@media only screen and (max-width: 1170px) {
    .white-inside {
        width: 1000px;
    }
}

@media only screen and (max-width: 1024px) {
    .banner-box {
        height: 750px;
    }

    .gray-title {
        height: 100px;
    }

    .gray-description {
        line-height: 20px;
        font-size: 1.5em;
    }

    .gray-text-inside {
        max-width: 465px;
    }

    .white-left img {
        width: 235px;
        height: 351px;
        border-radius: 118px;
    }

    .white-inside {
        width: 800px;
    }

    .white-right-top {
        width: 90%;
    }
}

@media only screen and (max-width: 768px) {
    .gray-title {
        height: 90px;
    }

    .gray-description {
        font-size: 1.4em;
    }

    .gray-text-inside {
        max-width: 365px;
    }

    .white-left img {
        width: 180px;
        height: 320px;
        border-radius: 90px;
    }

    .white-right-description {
        display: none;
    }

    .white-right {
        width: 400px;
    }

    .white-inside {
        width: 600px;
    }

    .white-right-top {
        width: 90%;
    }

    .white-right-btn,
    .white-right-btn.active {
        width: 136px;
    }

    .white-right-title {
        width: 80%;
    }
}

@media only screen and (max-width: 640px) {
    .white-right {
        width: 250px;
    }

    .white-left {
        width: 200px;
    }

    .white-left img {
        width: 160px;
        height: 300px;
        border-radius: 80px;
    }

    .white-right-top {
        width: 80%;
    }

    .white-right-title {
        margin: 30px 0 10px;
    }


}

@media only screen and (max-width: 480px) {
    .gray-title {
        height: 80px;
    }

    .gray-description {
        font-size: 1.3em;
    }

    .gray-text-inside {
        max-width: 334px;
    }

    .comment-message {
        display: block;
    }

    .commenter-block {
        width: 100%;
        margin: 22px 0;
    }

}

@media only screen and (max-width: 376px) {
    .gray-title {
        height: 70px;
    }

    .gray-description {
        font-size: 1.2em;
    }

    .gray-text-inside {
        max-width: 280px;
    }
}
</style>