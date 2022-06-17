<template>
    <div class="content">
        <button @click="flag = !flag">切换</button>
        <transition appear name="fade">
            <div v-if="flag" class="box">演示动画</div>
        </transition>
    </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import gsap from "gsap";
const flag = ref<boolean>(true);
const beforeEnter = (el: Element) => {
    gsap.set(el, {
        scaleX: 0.8,
        scaleY: 1.2,
    });
};
const enter = (el: Element, done: gsap.Callback) => {
    gsap.to(el, {
        duration: 1,
        scaleX: 1.5,
        scaleY: 0.7,
        opacity: 1,
        x: 150,
        ease: "elastic.inOut(2.5, 1)",
        onComplete: done,
    });
};
const leave = (el: Element, done: gsap.Callback) => {
    gsap.to(el, {
        duration: 0.7,
        scaleX: 1,
        scaleY: 1,
        x: 300,
        ease: "elastic.inOut(2.5, 1)",
    });
    gsap.to(el, {
        duration: 0.2,
        delay: 0.5,
        opacity: 0,
        onComplete: done,
    });
};
</script>

<style scoped>
.box {
    width: 200px;
    height: 200px;
    background: #fff;
}
/* 开始过渡 */
.fade-enter-from {
    background: red;
    width: 0px;
    height: 0px;
    transform: rotate(360deg);
}

.fade-enter-active {
    transition: all 2.5s linear;
}

.fade-enter-to {
    background: yellow;
    width: 200px;
    height: 200px;
}

.fade-leave-from {
    width: 200px;
    height: 200px;
    transform: rotate(360deg);
}
.fade-leave-active {
    transition: all 1s linear;
}

.fade-leave-to {
    width: 0px;
    height: 0px;
}
.from {
    width: 0;
    height: 0;
}
.active {
    transition: all 2s ease;
}
.to {
    width: 200px;
    height: 200px;
}
</style>