<template>
    <div class="popular-block">
        <div class="popular-title">熱門推薦</div>

        <!-- 使用 Vue3 Carousel -->
        <Carousel v-if="popularList.length > 0" ref="carousel" :items-to-show="getItemsToShow()" :wrap-around="true"
            :center-mode="true" :transition="300" :mouseDrag="true" :touchDrag="true" :pagination="true"
            :itemsToScroll="1" :snapAlign="'center'" class="popular-carousel owl-carousel owl-theme">
            <Slide v-for="(popular, index) in popularList" :key="index" :data-position="index" class="item">
                <div class="popular-item" @click="slideTo(index)">
                    <div class="popular-images">
                        <img v-if="popular.PD_PICTURE" :src="BACKEND_URL + '/' + popular.PD_PICTURE"
                            :alt="popular.PD_NAME" />
                        <img v-else src="/images/carousel-images1.jpg" />
                    </div>
                    <div class="popular-info">
                        <div class="popular-name">{{ popular.PD_NAME }}</div>
                        <div class="popular-price">${{ popular.PD_PRICE }}</div>
                    </div>
                </div>
            </Slide>

            <template #addons>
                <Pagination />
            </template>
        </Carousel>
    </div>
</template>

<script>
import { BACKEND_URL } from '@/constants/Env'
import { indexService } from '@/service/IndexService'
import axios from 'axios'
import { Carousel, Slide, Pagination } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

export default {
    name: 'Popular',
    components: {
        Carousel,
        Slide,
        Pagination
    },
    data() {
        return {
            BACKEND_URL,
            popularList: []
        };
    },
    created() {
        this.getPopularList();
        window.addEventListener('resize', this.handleResize);
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.handleResize);
    },
    methods: {
        getPopularList() {
            axios.post(indexService.getPopularList())
                .then(response => {
                    this.popularList = response.data.result;
                })
                .catch(error => {
                    console.log(error);
                    console.error("執行失敗");
                });
        },
        getItemsToShow() {
            const width = window.innerWidth;
            if (width < 480) return 2;
            if (width < 768) return 2;
            if (width < 1024) return 3;
            if (width < 1600) return 5;
            return 7;
        },
        handleResize() {
            if (this.$refs.carousel) {
                this.$nextTick(() => {
                    // 僅標記窗口大小更改，Vue3 Carousel 會自動調整
                    console.log('Window resized, carousel will adjust');
                });
            }
        },
        slideTo(index) {
            if (this.$refs.carousel) {
                try {
                    if (typeof this.$refs.carousel.slideTo === 'function') {
                        this.$refs.carousel.slideTo(index);
                    }
                } catch (error) {
                    console.error('Error during slide transition:', error);
                }
            }
        }
    }
};
</script>