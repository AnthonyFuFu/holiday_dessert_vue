<template>
    <form id="contactForm" class="contact-us-area">
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
                <input v-model="formEmail" type="email" placeholder="請輸入Email帳號" maxlength="30" autocomplete="username"
                    ref="formEmail">
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
</template>

<script>
export default {
    name: 'Form',
    data() {
        return {
            formCreateBy: '',
            formPhone: '',
            formEmail: '',
            formContent: ''
        }
    }
}

// new Vue({
// 	el: '#contactForm',
// 	data: {
// 		// model 屬性
// 		formPhone:'',
// 		formEmail: '',
// 		formContent: '',
// 		formCreateBy:''
// 	},
// 	methods: {
// 		isCellphone(cellphone) {
// 			//手機格式 正規則
// 			return /^[09]{2}[0-9]{8}$/.test(cellphone);
// 		},
// 		isEmail(email) {
// 			//RFC822 正規則
// 			return /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$/.test(email);	
// 		},
// 		checkForm() {
// 			//驗證資料
// 			if (this.formCreateBy == null || this.formCreateBy == '') {
// 				this.warning("請輸入中文姓名");
// 				this.$refs.formCreateBy.focus();
// 				return false;
// 			} else if (this.formPhone == null || this.formPhone == '') {
// 				this.warning("請輸入行動電話");
// 				this.$refs.formPhone.focus();
// 				return false;
// 			} else if (!this.isCellphone(this.formPhone)) {
// 				this.warning("行動電話格式不正確，請確認行動電話號碼");
// 				this.$refs.formPhone.focus();
// 				return false;
// 			} else if (this.formEmail == null || this.formEmail == '') {
// 				this.warning("請輸入電子信箱");
// 				this.$refs.formEmail.focus();
// 				return false;
// 			} else if (!this.isEmail(this.formEmail)) {
// 				this.warning("電子信箱格式錯誤,請確認妳的電子信箱是不是合法的");
// 				this.$refs.formEmail.focus();
// 				return false;
// 			} else if (this.formContent == null || this.formContent == '') {
// 				this.warning("請輸入您的訊息");
// 				this.$refs.formContent.focus();
// 				return false;
// 			}
// 			return true;
// 		},
// 		sendForm() {
// 			if (this.checkForm()) {
// 				axios.post('/holidayDessert/form/sendForm',{
// 					formPhone: this.formPhone,
// 					formEmail: this.formEmail,
// 					formContent: this.formContent,
// 					formCreateBy: this.formCreateBy
// 				})
// // 				axios.get('/holidayDessert/form/sendForm', null,{
// // 					params:{
// // 						formPhone: this.formPhone,
// // 						formEmail: this.formEmail,
// // 						formContent: this.formContent,
// // 						formCreateBy: this.formCreateBy
// // 					}
// // 				})
// 				.then(response => {
// 					if (response.data.STATUS == "T") {
// 				        alert(response.data.MSG);
// 					    location.reload();
// 					} else {
// 						this.warning(response.data.MSG);
// 					}
// 				})
// 				.catch(error => {
// 					console.log(error);
// 					alert("執行失敗");
// 				});
// 			}
// 		},
// 		success(message) {
// 			swal({
// 				title: message,
// 				type: "success",
// 				showCancelButton: false,
// 				confirmButtonColor: "#3085d6",
// 				confirmButtonText: "確定"
// 			});
// 		},
// 		warning(message) {
// 			swal({
// 				title: message,
// 				type: "warning",
// 				confirmButtonColor: "#DD6B55",
// 				confirmButtonText: "確定",
// 				closeOnConfirm: false
// 			});
// 		}
// 	}
// });

</script>

<style scoped>
.contact-us-section {
    width: 100%;
    background-color: white;
    position: relative;
    padding: 100px 0;
    z-index: 1;
}

.contact-us-title {
    font-family: 'Noto Sans TC', sans-serif;
    font-size: 24px;
    line-height: 35px;
    letter-spacing: 3px;
    margin: 20px;
    /* font: bold; */
}

.contact-us-name div,
.contact-us-phone div,
.contact-us-email div,
.contact-us-text div {
    font-family: 'Noto Sans TC', sans-serif;
    font-size: 1.4em;
    margin: 10px;
    text-align: left;
}

.contact-us-name,
.contact-us-phone,
.contact-us-email,
.contact-us-text {
    padding: 10px;
}

.contact-us-name input,
.contact-us-phone input,
.contact-us-email input,
.contact-us-text textarea {
    outline: none;
    border: none;
    box-shadow: none;
    padding: 8px, 12px, 8px, 12px;
    border-radius: 40px;
    padding-left: 20px;
    width: 100%;
    height: 44px;
    background: #201E2D14;
    font-size: 14px;
}

.contact-information {
    display: inline-block;
}

.contact-us-email,
.contact-us-text,
.contact-us-send-form {
    display: inline-block;
    width: 100%;
    max-width: 600px;
    padding: 10px 20px;
}

.contact-us-name,
.contact-us-phone {
    display: inline-block;
    width: 48%;
    max-width: 288px;
}

.contact-us-text textarea {
    height: 254px;
    padding-top: 20px;
    resize: none;
}

.contact-information .contact-us-send-form .send-form {
    font-family: 'Noto Sans TC', sans-serif;
    font-size: 1.4em;
    margin-top: 20px;
    padding: 8px 40px;
    border-radius: 43px;
    height: 36px;
    width: 136px;
    background: #201E2D;
    border: none;
    color: white;
    float: right;
}

@media only screen and (max-width: 1024px) {}

@media only screen and (max-width: 768px) {}

@media only screen and (max-width: 480px) {

    .contact-us-name,
    .contact-us-phone,
    .contact-us-email,
    .contact-us-text {
        display: inline-block;
        max-width: 100%;
        width: 100%;
        padding: 10px 20px;
    }

}
</style>