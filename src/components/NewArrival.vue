<template>
  <div id="newArrival" class="new-arrival-block">
    <div class="new-arrival-background">
      <img src="/images/new-arrival-background.jpg" />
    </div>
    <div class="new-arrival-title">新品上市</div>
    <div class="new-arrival-carousel">
      <div v-for="(newArrival, index) in newArrivalList" :key="index" class="new-arrival-item">
        <div class="new-arrival-images">
          <img
            v-if="newArrival.PD_PICTURE"
            :src="BACKEND_URL + '/' + newArrival.PD_PICTURE"
            :alt="newArrival.PD_NAME"
          />
          <img v-else src="/images/carousel-images1.jpg" />
        </div>
        <div class="new-arrival-info">
          <div class="new-arrival-name">{{ newArrival.PD_NAME }}</div>
          <div class="new-arrival-price">${{ newArrival.PD_PRICE }}</div>
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
  name: 'NewArrival',
  props: {
    // 如果需要從父組件傳入數據，可以在這裡定義 props
  },
  data() {
    return {
      BACKEND_URL,
      newArrivalList: []
    }
  },
  created() {
    this.getNewArrivalList()
  },
  methods: {
    getNewArrivalList() {
      axios.post(indexService.getNewArrivalList())
        .then(response => {
          this.newArrivalList = response.data.result
        })
        .catch(error => {
          console.error(error)
        })
    }
  }
}
</script>

<style scoped>
/* 如果有特定於此組件的樣式，可以在這裡添加 */
</style>