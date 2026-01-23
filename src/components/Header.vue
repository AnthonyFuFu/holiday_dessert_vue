<template>
    <header class="header">
        <div class="header-layout">
            <nav id="nav" class="nav">
                <div class="nav-bar">
                    <div class="mobile-nav-bar">
                        <div class="hamburger">
                            <div class="bar"></div>
                            <div class="bar"></div>
                            <div class="bar"></div>
                        </div>
                    </div>
                    <ul class="logo">
                        <li><a href="/holidayDessert/index"><img src="/images/logo.svg"
                                    alt="HolidayDessertLogo"></a></li>
                    </ul>
                    <ul class="news">
                        <li>最新消息</li>
                    </ul>
                    <ul class="shop">
                        <li>商品頁面</li>
                        <li class="shop_bar">
                            <div><span>▶</span><a href="#">常溫甜點</a></div>
                            <div><span>▶</span><a href="#">冷藏甜點</a></div>
                            <div><span>▶</span><a href="#">冷凍甜點</a></div>
                            <div><span>▶</span><a href="#">禮盒專區</a></div>
                        </li>
                    </ul>
                    <ul class="contact">
                        <li>聯繫我們</li>
                        <li class="contact_bar">
                            <div><span>▶</span><a href="#">臉書</a></div>
                            <div><span>▶</span><a href="#">IG</a></div>
                            <div><span>▶</span><a href="#">電話</a></div>
                            <div><span>▶</span><a href="#">信箱</a></div>
                        </li>
                    </ul>
                    <ul class="QA">
                        <li>QA</li>
                        <li class="QA_bar">
                            <div><span>▶</span><a href="#">訂購方式</a></div>
                            <div><span>▶</span><a href="#">宅配說明</a></div>
                        </li>
                    </ul>
                    <ul class="notify-cart">
                        <li><a href="javascript:void(0);"><i class="material-icons">notifications</i></a></li>
                        <li><a href="javascript:void(0);"><i class="material-icons">shopping_cart</i></a></li>
                    </ul>
                    <ul class="sign">
                        <li v-if="!memberSession"><a href="/holidayDessert/member/login"
                                class="sign_in"><span>登入</span></a></li>
                        <li v-else><a href="javascript:void(0);" class="sign_in" @click="logout"><span>登出</span></a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </header>
</template>

<script>
import { indexService } from '@/service/IndexService';
import { getSession, removeSession } from '@/utils/storage';
import'@/css/header.css';

export default {
    name: 'Header',
    data() {
        return {
            memberSession: null,
            memberData: {
                memId: '',
                memName: '',
                memAccount: '',
                memEmail: '',
                memPassword: '',
                memGender: '',
                memPhone: '',
                memAddress: '',
                memBirthday: '',
                memStatus: '',
                memVerificationStatus: '',
                memVerificationCode: '',
                memGoogleUid: ''
            }
        };
    },
    methods: {
        logout() {
            axios
                .post(indexService.logout())
                .then((response) => {
                    if (response.data.STATUS === 'N') {
                        this.warning(response.data.MSG);
                    } else {
                        removeSession('memberSession');
                        this.memberSession = null;
                        this.$router.push('/index');
                    }
                })
                .catch((error) => {
                    console.error(error);
                    this.warning('執行失敗');
                });
        },
        loadMemberSession() {
            const memberSession = getSession('memberSession');
            if (memberSession) {
                this.updateSession(memberSession);
            }
        },
        updateSession(memberSession) {
            this.memberSession = memberSession;
            Object.assign(this.memberData, memberSession);
        },
        warning(message) {
            swal({
                title: message,
                type: "warning",
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "確定",
                closeOnConfirm: false
            });
        }
    },
    mounted() {
        this.loadMemberSession();
    }
}
</script>