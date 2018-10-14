<template>
    <div class="fab">
        <button>
            <img src="/img/send.svg" alt="">
        </button>
    </div>
</template>
<style lang="scss" scoped>
    .fab {
        width: 90px;
        height: 240px;
        position: fixed;
        bottom: 25px;
        right: 15px;
        z-index: 1000;

        button {
            width: 70px;
            height: 70px;
            border-radius: 100%;
            background: #4CAF50;
            right: 0;
            bottom: 0;
            position: absolute;
            margin-right: 16px;
            margin-bottom: 16px;
            border: none;
            outline: none;
            color: #FFF;
            font-size: 36px;
            box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
            transition: .3s;
            cursor: pointer;

            img {
                max-width: 32px;
                min-width: 32px;
                max-height: 28x;
                min-height: 28px;
            }
        }
    }
</style>
