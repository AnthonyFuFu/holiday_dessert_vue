<template>
	<Header />

	<section class="banner-box">
		<img class="banner-login" src="/images/banner-login.jpg" alt="banner">
	</section>

	<main class="main">
		<section class="register-section">
			<form class="register-area">
				<div>註冊</div>

				<div class="login-input">

					<div class="name-block">
						<div>姓名</div>
						<input type="text" placeholder="請輸入姓名" maxlength="30">
					</div>
					<div class="phone-block">
						<div>電話</div>
						<input type="tel" placeholder="請輸入電話號碼" maxlength="20">
					</div>

					<div class="email-block">
						<div>帳號</div>
						<input type="email" placeholder="請輸入Email帳號" maxlength="30" autocomplete="username">
					</div>
					<div class="pwd-block">
						<div>密碼</div>
						<input type="password" placeholder="請輸入密碼" maxlength="25" autocomplete="current-password">
						<span class="material-icons vision">visibility_off</span>
					</div>
					<div class="agree-block">
						<input type="checkbox" id="agree">
						<span for="agree"></span>
						<label for="agree">開始使用本服務或註冊前，平台用戶應確保其已仔細參閱並同意<a href="./policy.html"
								class="gold">隱私權政策</a>以及<a href="./terms.html" class="gold">使用者條款</a></label>
					</div>
					<div class="register-submit">註冊</div>
				</div>
				<div class="horizon"></div>or<div class="horizon"></div>
				<div>
					<div class="circle-container">
						<a href="/front/member/FBLogin"><img src="/images/FB-logo.svg" alt="FB-logo"></a>
					</div>
					<div class="circle-container">
						<a href="/front/member/googleLogin"><img src="/images/google-logo.svg" alt="google-logo"></a>
					</div>
					<div class="circle-container">
						<a href="/front/member/LineLogin"><img src="/images/Line-logo.svg" alt="Line-logo"></a>
					</div>
				</div>
			</form>
		</section>
	</main>

</template>

<script>
import '@/assets/plugins/sweetalert/sweetalert.css'
import '@/assets/plugins/sweetalert/sweetalert.min.js'
import Header from '@/components/Header.vue'

export default {
	name: 'register', // 使用多單詞名稱以符合 vue/multi-word-component-names
	components: {
		Header
	}
}

// const data = []
// axios.get('http://localhost:8080/holidayDessert/getMainProductList')
// 				.then(response => {
// 					data = response.data.result;
// 				})

</script>
<style scoped>
.banner-box {
	position: absolute;
	top: 0;
	width: 100%;
	height: 100vh;
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

.main {
	height: auto;
	display: inline-block;
	width: 90%;
}

.login-section {
	margin: 50px 65px;
	width: 450px;
	height: 550px;
	border-radius: 16px;
	background: #201E2DE5;
	float: right;
}

.login-area,
.register-area {
	padding: 50px 80px;
	height: 100%;
	width: 100%;
	text-align: center;
	font-size: large;
	font-family: 'Noto Sans TC', sans-serif;
	/* font-weight: bold; */
	color: white;
}

.login-input {
	float: left;
	width: 100%;
}

.login-input div {
	margin-top: 10px;
}

.login-input div div {
	font-size: 0.8em;
	text-align: left;
	font-weight: lighter;
}

.register-area div div input[type="tel"] {
	outline: none;
	border: none;
	box-shadow: none;
	margin-top: 5px;
	padding-left: 20px;
	height: 44px;
	font-size: 0.8em;
	caret-color: #ffffff7e;
	border-radius: 22px;
	width: 100%;
	background: #FFFFFF2E;
	color: white;
	/* font-style: italic; */
}

.login-area div div input[type="email"],
.register-area div div input[type="email"] {
	outline: none;
	border: none;
	box-shadow: none;
	margin-top: 5px;
	padding-left: 20px;
	height: 44px;
	font-size: 0.8em;
	caret-color: #ffffff7e;
	border-radius: 22px;
	width: 100%;
	background: #FFFFFF2E;
	color: white;
	/* font-style: italic; */
}

.login-area div div input[type="password"],
.register-area div div input[type="password"] {
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
	outline: none;
	border: none;
	box-shadow: none;
	margin-top: 5px;
	padding-left: 20px;
	height: 44px;
	font-size: 1em;
	caret-color: #ffffff7e;
	border-radius: 22px;
	width: 100%;
	background: #FFFFFF2E;
	color: white;
}

.login-area div div input[type="text"],
.register-area div div input[type="text"] {
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
	outline: none;
	border: none;
	box-shadow: none;
	margin-top: 5px;
	padding-left: 20px;
	height: 44px;
	font-size: 1em;
	caret-color: #ffffff7e;
	border-radius: 22px;
	width: 100%;
	background: #FFFFFF2E;
	color: white;
	/* font-style: italic; */
	font-size: 0.8em;
}

.login-area div div input[type="email"]::placeholder,
.register-area div div input[type="email"]::placeholder {
	color: #FFFFFF2E;
	/* font-style: italic; */
	font-size: 1em;
	margin: 0;
	padding: 0;
}

.login-area div div input[type="password"]::placeholder,
.register-area div div input[type="password"]::placeholder {
	color: #FFFFFF2E;
	/* font-style: italic; */
	font-size: 0.8em;
}

.login-input div.pwd-block {
	position: relative;
}

.vision {
	position: absolute;
	right: 10px;
	transform: translateY(62%);
	color: #CCCCCC;
	cursor: pointer;
	z-index: 1;
}

.vision-on {
	display: none;
}

.login-input div.remember-block {
	font-size: 0.8em;
	text-align: left;
}

.remember-block input[type="checkbox"] {
	display: none;
}

.remember-block input[type="checkbox"]+span {
	position: relative;
	padding-left: 20px;
	cursor: pointer;
}

.remember-block input[type="checkbox"]+span:before {
	content: '';
	position: absolute;
	left: 0;
	top: 0;
	width: 13px;
	height: 13px;
	margin: 4.5px 0;
	border: 1px solid #fff;
	border-radius: 3px;
	background: transparent;
}

.remember-block input[type="checkbox"]:checked+span:before {
	content: '\2713';
	position: absolute;
	left: 0;
	top: 0;
	width: 13px;
	height: 13px;
	font-size: 12px;
	line-height: 13px;
	text-align: center;
	color: #fff;
}

.login-area div span a,
.register-area div span a {
	color: white;
	text-decoration: none;
	font-size: 0.8em;
	margin: 0 10px;
}

.login-area div span a span,
.register-area div span a span {
	margin: 16.2px 0 16.2px 5px;
	font-size: 1.4em;
	padding: 0;
	height: 22px;
	vertical-align: middle;
}

.login-area div span.separator,
.register-area div span.separator {
	height: 1em;
	border-left: 1px solid white;
	margin: 0;
}

.login-submit {
	width: 124px;
	height: 36px;
	border-radius: 43px;
	background: white;
	cursor: pointer;
	color: #201E2DE5;
	line-height: 36px;
	margin: 0 83px;
	font-size: 0.8em;
	font-weight: bold;
}

.register-section {
	margin: 20px 65px;
	width: 450px;
	height: 620px;
	border-radius: 16px;
	background: #201E2DE5;
	float: right;
}

.register-area {
	padding: 50px 80px;
	height: 100%;
	width: 100%;
	text-align: center;
	font-size: large;
	font-family: 'Noto Sans TC', sans-serif;
	/* font-weight: bold; */
	color: white;
}

.register-submit {
	width: 124px;
	height: 36px;
	border-radius: 43px;
	background: white;
	cursor: pointer;
	color: #201E2DE5;
	line-height: 36px;
	margin: 0 83px;
	font-size: 0.8em;
	font-weight: bold;
}

.gold {
	color: #FFBD5B;
}

.login-input div.agree-block {
	font-size: 0.7em;
	text-align: center;
}

.agree-block input[type="checkbox"] {
	display: none;
}

.agree-block input[type="checkbox"]+span {
	position: relative;
	padding-left: 20px;
	cursor: pointer;
}

.agree-block input[type="checkbox"]+span:before {
	content: '';
	position: absolute;
	left: 0;
	top: 0;
	width: 13px;
	height: 13px;
	margin: 3px 0;
	border: 1px solid #fff;
	border-radius: 3px;
	background: transparent;
}

.agree-block input[type="checkbox"]:checked+span:before {
	content: '\2713';
	position: absolute;
	left: 0;
	top: 0;
	width: 13px;
	height: 13px;
	font-size: 12px;
	line-height: 13px;
	text-align: center;
	color: #fff;
}

.horizon {
	width: 40%;
	margin: 30px 3%;
	vertical-align: middle;
	border-top: solid 1px white;
	display: inline-block;
}

.circle-container {
	display: inline-block;
	background-color: white;
	text-align: center;
	margin: 3px;
	padding: 5px;
	width: 31px;
	height: 31px;
	border-radius: 50%;
	overflow: hidden;
	transition-duration: 0.3s;
}

.circle-container:hover {
	transform: scale(1.1);
	box-shadow: 0 0 10px rgba(0, 0, 0, 1);
}

.circle-container img {
	width: 100%;
	height: 100%;
	object-fit: cover;
}

@media only screen and (max-width: 1024px) {}

@media only screen and (max-width: 768px) {
	.main {
		width: 100%;
		display: flex;
		justify-content: center;
	}

	.login-section,
	.register-section {
		margin: 50px 20px;
		max-width: 450px;
		min-width: 150px;
	}

	.login-area,
	.register-area {
		padding: 50px 65px;
	}

	.login-submit,
	.register-submit {
		display: inline-block;
		margin: 0;
	}
}

@media only screen and (max-width: 480px) {

	.login-area,
	.register-area {
		padding: 50px 30px;
	}

	.login-area div span a,
	.register-area div span a {
		margin: 0 5px;
	}

	.horizon {
		width: 30%;
		margin: 30px 3%;
	}
}

@media only screen and (max-width: 376px) {

	.login-submit,
	.register-submit {
		width: 100%;
	}
}
</style>