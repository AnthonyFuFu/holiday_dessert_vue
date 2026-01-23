<template>
    <footer class="footer">
        <div class="footer-layout">
            <div class="footer-logo">
                <img src="/images/logo.svg" alt="HolidayDessertLogo">
                <div>只營業於假日的神秘小店</div>
                <div><a href="#">品牌故事</a></div>
                <div><a href="#">分店資訊</a></div>
            </div>
            <div class="separator separator-one"></div>
            <div class="footer-contact">
                <div class="footer-contact-us">聯絡我們</div>
                <div class="footer-FB-icon">
                    <a href="#">
                        <div><img src="/images/FB-icon.svg" alt="FB-icon"></div>
                        <div class="footer-icon-text">Facebook</div>
                    </a>
                </div>
                <div class="footer-IG-icon">
                    <a href="#">
                        <div><img src="/images/IG-icon.svg" alt="IG-icon"></div>
                        <div class="footer-icon-text">Instagram</div>
                    </a>
                </div>
                <div class="footer-Line-icon">
                    <a href="#">
                        <div><img src="/images/Line-icon.svg" alt="Line-icon"></div>
                        <div class="footer-icon-text">Line</div>
                    </a>
                </div>
            </div>
            <div class="separator separator-two"></div>
            <div class="footer-service">
                <div>假日甜點有限公司｜(03)4782389</div>
                <div>客服專線：09-12345678</div>
                <div>客服時間：10:00-17:00</div>
                <div>信箱：holidaydessert@gmail.com</div>
                <div>地址：桃園市平鎮區建銘路一段5號</div>
            </div>
            <div class="footer-copyright">Copyright &copy; 2024 HolidayDessert 假日甜點 All Rights Reserved.</div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style scoped>
footer.footer {
    width: 100%;
    text-align: center;
    font-family: 'Noto Sans TC', sans-serif;
}

.footer-layout {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    display: inline-block;
    width: 100%;
    margin: 0;
    padding: 30px 50px;
    background: linear-gradient(0deg, #201E2D, #201E2D), linear-gradient(0deg, #FFFFFF, #FFFFFF);
}

.footer-layout div {
    display: inline-block;
    color: #D9D9D9;
    vertical-align: middle;
}


.footer-layout .footer-logo img {
    width: 130px;
}

.footer-layout .footer-FB-icon img,
.footer-layout .footer-IG-icon img,
.footer-layout .footer-Line-icon img {
    width: 30px;
}

.footer-logo,
.footer-contact {
    width: 20%;
}

.footer-FB-icon,
.footer-IG-icon,
.footer-Line-icon {
    width: 20%;
    margin: 15px;
}

.footer-FB-icon a div.footer-icon-text,
.footer-IG-icon a div.footer-icon-text,
.footer-Line-icon a div.footer-icon-text {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.footer-logo div a {
    display: block;
    color: #D9D9D9;
    text-decoration: none;
    margin: 30px 15px;
}

.footer-FB-icon a,
.footer-IG-icon a,
.footer-Line-icon a {
    text-decoration: none;
}

.footer-contact-us {
    width: 100%;
    padding: 0 60% 5% 0;
}

.footer-service {
    width: 40%;
    padding-left: 50px;
    text-align: left;
}

.footer-service div,
.footer-logo div {
    display: block;
    margin: 5px;
}

.footer-copyright {
    width: 100%;
    margin-top: 15px;
}

.footer-layout .separator {
    height: 200px;
    border-left: 1px solid #D9D9D9;
    margin: 10px;
}

@media only screen and (max-width: 1024px) {}

@media only screen and (max-width: 768px) {

    .footer-layout .footer-logo img {
        width: 150px;
    }

    .footer-service {
        width: 100%;
        padding-left: 0;
        text-align: center;
    }

    .footer-layout .separator-two {
        display: none;
    }

    .footer-logo,
    .footer-contact {
        width: 45%;
    }
}

@media only screen and (max-width: 480px) {

    .footer-logo,
    .footer-contact {
        width: 100%;
        padding-left: 0;
        text-align: center;
    }

    .footer-layout .separator {
        display: block;
        height: 10px;
        width: 100%;
        border-top: 1px solid #D9D9D9;
        border-left: 0;
        margin: 20px 0;
    }
}
</style>