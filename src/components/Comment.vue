<template>
    <div class="comment-block">
        <div class="comment-title">假日甜點<br>Holiday Desserts</div>
        <div class="comment-description">只屬於你的快樂時光，請你和我們一起悠閒品嘗。</div>

        <!-- 桌面版使用 Vue3 Carousel -->
        <Carousel v-if="isDesktop && commentList.length > 0" ref="carousel" :items-to-show="getItemsToShow()"
            :wrap-around="true" :center-mode="true" :transition="300" :autoplay="3000" :mouseDrag="true"
            :touchDrag="true" :autoWidth="true" :itemsToScroll="1" :snapAlign="'center'" :wrapAround="true"
            class="comment-message owl-carousel owl-theme">
            <Slide v-for="(comment, index) in commentList" :key="index" :data-position="index" class="item">
                <div class="commenter-block" @click="slideTo(index)">
                    <div class="commenter">
                        <div class="commenter-images">
                            <img v-if="comment.CMT_PICTURE" :src="BACKEND_URL + '/' + comment.CMT_PICTURE"
                                :alt="comment.CMT_CONTENT" />
                            <img v-else src="/images/carousel-images1.jpg" />
                        </div>
                        <div class="commenter-details">
                            <div class="commenter-name">{{ comment.CMT_CREATE_BY }}</div>
                            <div class="commenter-time">{{ comment.CMT_CREATE_TIME }}</div>
                        </div>
                    </div>
                    <div class="commenter-message">{{ comment.CMT_CONTENT }}</div>
                </div>
            </Slide>
        </Carousel>

        <!-- 移動設備顯示普通列表 -->
        <div v-if="!isDesktop && commentList.length > 0" class="comment-message">
            <div v-for="(comment, index) in commentList" :key="index" class="commenter-block item">
                <div class="commenter">
                    <div class="commenter-images">
                        <img v-if="comment.CMT_PICTURE" :src="BACKEND_URL + '/' + comment.CMT_PICTURE"
                            :alt="comment.CMT_CONTENT" />
                        <img v-else src="/images/carousel-images1.jpg" />
                    </div>
                    <div class="commenter-details">
                        <div class="commenter-name">{{ comment.CMT_CREATE_BY }}</div>
                        <div class="commenter-time">{{ comment.CMT_CREATE_TIME }}</div>
                    </div>
                </div>
                <div class="commenter-message">{{ comment.CMT_CONTENT }}</div>
            </div>
        </div>
    </div>

</template>

<script>
import { BACKEND_URL } from '@/constants/Env'
import { indexService } from '@/service/IndexService'
import axios from 'axios'
import { Carousel, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

export default {
    name: 'Comment',
    components: {
        Carousel,
        Slide
    },
    data() {
        return {
            BACKEND_URL,
            commentList: [],
            isDesktop: window.innerWidth >= 480
        };
    },
    created() {
        this.getCommentList();
        window.addEventListener('resize', this.handleResize);
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.handleResize);
    },
    methods: {
        getCommentList() {
            axios.post(indexService.getCommentList())
                .then(response => {
                    this.commentList = response.data.result;
                    this.$nextTick(() => {
                        this.checkWidth();
                    });
                })
                .catch(error => {
                    console.log(error);
                    console.error("執行失敗");
                });
        },
        getItemsToShow() {
            const width = window.innerWidth;
            if (width < 480) return 1;
            if (width < 768) return 2;
            if (width < 1024) return 3;
            return 3;
        },
        handleResize() {
            this.checkWidth();
        },
        checkWidth() {
            const prevIsDesktop = this.isDesktop;
            this.isDesktop = window.innerWidth >= 480;

            // 只有當狀態改變時才需要重新渲染
            if (prevIsDesktop !== this.isDesktop) {
                this.$nextTick(() => {
                    console.log('Screen size changed, adjusting layout');
                });
            }
        },
        // 模擬 Owl Carousel 的點擊功能
        slideTo(index) {
            if (this.$refs.carousel) {
                try {
                    if (typeof this.$refs.carousel.slideTo === 'function') {
                        this.$refs.carousel.slideTo(index);
                    }
                } catch (error) {
                    console.error('Error calling slideTo:', error);
                }
            }
        },
        destroyOwlCarousel() {
            // 兼容原始方法
            console.log('Carousel destroyed');
        }
    }
};
</script>
