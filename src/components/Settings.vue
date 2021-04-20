<template>
    <div class="setting">
        <h1 class="pagename">Настройки</h1>
        <div class="subheader">
            <p class="road">
                <span class="from">MedApp</span>
                <img src="../assets/images/arrow-right.svg" alt="">
                <span class="to">Настройки</span>
            </p>
        </div>



        <div class="setting_nav">
            <span v-bind:class="{setting_nav_active : i == 1}" @click="i=1">Общие</span>
            <span v-bind:class="{setting_nav_active : i == 2}" @click="i=2">Виджеты</span>
            <span v-bind:class="{setting_nav_active : i == 3}" @click="i=3">Права</span>
        </div>

        <div class="setting_block_1" v-show="i == 1">
            <h1>хуй</h1>
        </div>

        <div class="setting_block_2" v-show="i == 2">
            <h1>пизда</h1>
        </div>

        <div class="setting_block_3" v-show="i == 3">
            <h1>жопа</h1>
        </div>
    </div>
</template>


<script>
export default {
    name: 'Settings',
    data(){
        return{
            i: 1,
        }
    }
}
</script>



<style lang="sass">
@keyframes appearingBlock
  0%
    opacity: 0
  50%
    opacity: 0.5
  100%
    opacity: 1

.setting
    animation: 0.5s appearingBlock 
    margin: 0 0 0 20px
    h1
        font-style: normal
        font-weight: 600
        font-size: 1.1458333333vw //22px
        line-height: 1.40625vw //27px
        margin-bottom: 0px
        color: #437FD7
    .pagename
        font-family: Proxima Nova, sans-serif
        font-style: normal
        font-weight: 600
        font-size: 1.25VW
        line-height: 29px
        display: flex
        align-items: center
        color: #437FD7
    .subheader
        display: flex
        justify-content: space-between
        padding-right: 4.733333333333332VW
        .road
            font-style: normal
            font-weight: 600
            font-size: 0.8333333333333334VW
            line-height: 19px
            display: flex
            align-items: center
            color: #A6C8FF
            img
                margin-left: 16px
                margin-right: 16px
            .to
                color: #437FD7
                font-style: normal
                font-weight: 500
                font-size: 0.8333333333333334VW
                line-height: 19px
    .setting_nav
        margin-top: 12px 
        span
            color: #A6C8FF
            font-weight: 500
            font-size: 0.8333333333vw //16px
            line-height: 1.25vw //24px
            margin-right: 1.5625vw //30px
            cursor: pointer
            padding-bottom: 10px
            transition: 0.5s color ease

        .setting_nav_active
            color: #437FD7
            border-bottom: solid 2px #437FD7

    div
        animation: 0.2s appearingBlock 

</style>