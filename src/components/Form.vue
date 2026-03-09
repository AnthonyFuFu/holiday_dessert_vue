<template>
  <section class="contact-us-section">
    <form class="contact-us-area">
      <div class="contact-information">
        <div class="contact-us-title">聯絡我們</div>
        <div class="contact-us-name">
          <div>姓名</div>
          <input v-model="formCreateBy" type="text" placeholder="請輸入姓名" maxlength="30" ref="formCreateBy">
        </div>
        <div class="contact-us-phone">
          <div>電話</div>
          <input v-model="formPhone" type="tel" placeholder="請輸入電話號碼" maxlength="20" ref="formPhone">
        </div>
        <div class="contact-us-email">
          <div>Email</div>
          <input v-model="formEmail" type="email" placeholder="請輸入Email帳號" maxlength="30" autocomplete="username" ref="formEmail">
        </div>
        <div class="contact-us-text">
          <div>您的訊息</div>
          <textarea v-model="formContent" type="text" placeholder="請輸入您的訊息" ref="formContent"></textarea>
        </div>
        <div class="contact-us-send-form">
          <button id="sendForm" class="send-form" @click.prevent="sendForm">寄出信件</button>
        </div>
      </div>
    </form>
  </section>
</template>

<script>
import { indexService } from '@/service/IndexService';
import { warning } from '@/utils/notification';
import { isCellphone, isEmail } from '@/utils/regex';
import axios from 'axios';
import'@/css/contact-us.css'

export default {
    name: 'Form',
    data() {
        return {
            formCreateBy: '',
            formPhone: '',
            formEmail: '',
            formContent: ''
        }
    },
	methods: {
		checkForm() {
			//驗證資料
			if (this.formCreateBy == null || this.formCreateBy == '') {
				warning("請輸入中文姓名");
				this.$refs.formCreateBy.focus();
				return false;
			} else if (this.formPhone == null || this.formPhone == '') {
				warning("請輸入行動電話");
				this.$refs.formPhone.focus();
				return false;
			} else if (!isCellphone(this.formPhone)) {
				warning("行動電話格式不正確，請確認行動電話號碼");
				this.$refs.formPhone.focus();
				return false;
			} else if (this.formEmail == null || this.formEmail == '') {
				warning("請輸入電子信箱");
				this.$refs.formEmail.focus();
				return false;
			} else if (!isEmail(this.formEmail)) {
				warning("電子信箱格式錯誤,請確認妳的電子信箱是不是合法的");
				this.$refs.formEmail.focus();
				return false;
			} else if (this.formContent == null || this.formContent == '') {
				warning("請輸入您的訊息");
				this.$refs.formContent.focus();
				return false;
			}
			return true;
		},
		sendForm() {
			if (this.checkForm()) {
				axios.post(indexService.sendForm(),{
					formPhone: this.formPhone,
					formEmail: this.formEmail,
					formContent: this.formContent,
					formCreateBy: this.formCreateBy
				})
				.then(response => {
					if (response.data.STATUS == "T") {
				        alert(response.data.MSG);
					    location.reload();
					} else {
						warning(response.data.MSG);
					}
				})
				.catch(error => {
					console.log(error);
					alert("執行失敗");
				});
			}
		}
	}
}

</script>