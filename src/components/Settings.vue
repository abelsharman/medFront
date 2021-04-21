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

            <p v-bind:style="{color: color}">Валюта</p>
            <select v-model="exchange">
                <option value="tenge">Тенге</option>
                <option value="ruble">Рубль</option>
                <option value="dollar">Доллар</option>
            </select>

            <p v-bind:style="{color: color}">Формат даты</p>
            <select v-model="dateFormat">
                <option value="point">31.12.2020</option>
                <option value="slash">31/12/2020</option>
                <option value="dash">31-12-2020</option>
            </select>

            <p v-bind:style="{color: color}">Формат времени</p>
            <select v-model="timeFormat">
                <option value="24">24 часа</option>
                <option value="24">24 часа</option>
                <option value="24">24 часа</option>
            </select>

            <p v-bind:style="{color: color}">Часовой пояс</p>
            <select v-model="timezone">
                <option value="azia">Азия/Алматы</option>
                <option value="azia">Азия/Алматы</option>
                <option value="azia">Азия/Алматы</option>
            </select>

            <p v-bind:style="{color: color}">Тема</p>
            <select v-model="color" @change="changeOption">
                <option value="#437FD7">Синий</option>
                <option value="#8A3FFC">Фиолетовый</option>
                <option value="#FFB3B8">Розовый</option>
            </select>

            <div class="setting_block_1_color" v-bind:style="{backgroundColor: color}"></div>

        </div>

        <div class="setting_block_2" v-show="i == 2">
            <div class="setting_ondrop_block">

            </div>

            <div class="setting_elements">
                <h1>Записи сегодня</h1>

            </div>
        </div>

        <div class="setting_block_3" v-show="i == 3">
            <h1>права</h1>
        </div>


    </div>
</template>


<script>
export default {
    name: 'Settings',
    data(){
        return{
            i: 1,
            exchange: this.$store.state.exchange,
            dateFormat: this.$store.state.dateFormat,
            timeFormat: this.$store.state.timeFormat,
            timezone: this.$store.state.timezone,
            color: this.$store.state.color,
        }
    },
    methods:{
        changeOption(){
            this.$store.state.color = this.color
        } 
    },
    computed:{
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
    padding-left: 00px
    width: 85vw
    margin-left: 15.7vw
    margin-top: 70px
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
        margin-bottom: 40px
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

    .setting_block_1
        animation: 0.2s appearingBlock 
        p
            font-weight: normal
            font-size: 0.729vw //14px
            line-height: 0.885vw //17px
            transition: 0.5s all ease
        select
            background: #FFFFFF
            box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.1)
            border-radius: 8px
            width: 20vw
            border: 0px
            font-weight: normal
            font-size: 0.729vw //14px
            line-height: 0.885vw //17px
            color: #4F4F4F
            padding: 7.5px 10px
            outline: none
            cursor: pointer

        .setting_block_1_color
            width: 30px
            height: 30px
            border-radius: 50px
            margin: 15px 0px
            transition: 0.5s all ease

</style>