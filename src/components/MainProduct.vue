<template>
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
          <img v-else src="/images/dessert1.jpg" />
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
</template>

<script>
import { BACKEND_URL } from '@/constants/Env'
import { indexService } from '@/service/IndexService'
import axios from 'axios'

export default {
    name: 'MainProduct',
    props: {
        // 如果需要從父組件傳入數據，可以在這裡定義 props
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

<style scoped>
/* 如果有特定於此組件的樣式，可以在這裡添加 */
</style>