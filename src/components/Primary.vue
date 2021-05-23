<template>
    <div class="primary">
        <div class="primary_statistics">
            <h1>Краткая статистика на сегодня</h1>

            <div class="primary_statistics_1">
                <div class="primary_capacity">
                    <p>1</p>
                </div>

                <h1>Финансы</h1>

                <div class="primary_finance">
                    <p>2</p>
                </div>


            </div>


            <div class="primary_statistics_2">
                <div class="primary_percentage">
                    <p>Процентаж оказываемых услуг</p>
                    <div class="primary_percentage_block" v-if="percent == 1">
                        <apexchart width="90%" style="text-align: left;" type="donut" :options="chartOptions" :series="series"></apexchart>
                    </div>

                    <div class="primary_percentage_block" v-if="percent == 2">
                        <apexchart width="90%" style="text-align: left;" type="donut" :options="chartOptions" :series="series"></apexchart>
                    </div>

                    <div class="primary_percentage_block" v-if="percent == 3">
                        <apexchart width="90%" style="text-align: left;" type="donut" :options="chartOptions" :series="series"></apexchart>
                    </div>


                    <div class="primary_percentage_nav">
                        <h3 v-bind:class="{primary_percentage_nav_clicked : percent == 1}" @click="weakInfo">За неделю</h3>
                        <h3 v-bind:class="{primary_percentage_nav_clicked : percent == 2}" @click="monInfo">За месяц</h3>
                        <h3 v-bind:class="{primary_percentage_nav_clicked : percent == 3}" @click="yearInfo">За год</h3>
                    </div>
                </div>

                <div class="primary_graph">
                    <p>4</p>
                </div>
            </div>
        </div>

        <div class="primary_chat">
            <h1>Врачи</h1>
            

            <div class="primary_chat_block">
                <div id="chart">
                    <p>чат</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Primary',
    data(){
        return{   
            percent: 1,   
            series: [44, 55, 13, 33, 22, 66, 20],
            widthScreen: window.innerWidth,
            chartOptions: {
                chart: {
                  type: 'donut',
                },
                labels: ['Гинекология', 'Кардиология', 'Стоматология', 'Хирургия', 'Травмотология', 'Онкология', 'Ревматология'],
                dataLabels: {
                  enabled: false
                },
                responsive: [{
                  options: {
                    chart: {
                    },
                    legend: {
                      show: false
                    }
                  }
                }],
                legend: {
                    position: 'right',
                    offsetY: 50,
                    offsetX: 0,
                    fontFamily: 'Proxima Nova, sans-serif',
                    fontWeight: '600',
                    width: 125,
                    height: 200,
                    itemMargin: {
                        horizontal: 5,
                        vertical: 4
                    },

                },
            }
        } 
    },
    methods:{
        weakInfo(){
            this.percent = 1
            this.series = [44, 55, 13, 33, 22, 66, 20]
        },
        monInfo(){
            this.percent = 2
            this.series = [40, 54, 16, 13, 42, 26, 50]
        },
        yearInfo(){
            this.percent = 3
            this.series = [30, 64, 20, 10, 32, 56, 70]
        },
    },
    mounted(){
    },
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


    .primary
        animation: appearingBlock 0.5s 
        margin: 0 0 0 20px
        font-family: Proxima Nova, sans-serif
        height: 80vh
        width: 85vw
        margin-left: 15.7vw
        margin-top: 70px

        h1
            font-style: normal
            font-weight: 600
            font-size: 1.1458333333vw //22px
            line-height: 1.40625vw //27px
            margin-bottom: 2vh
            margin-top: 2vh
            color: #437FD7
        p
            margin: 0


        .primary_statistics
            display: inline-block
            width: 63vw


            .primary_statistics_1
                display: inline-block
                vertical-align: top
                width: 34vw
                margin-right: 1vw

                div
                    background: #FFFFFF
                    box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.1)
                    border-radius: 10px
                    width: 100%
                    text-align: center


                .primary_capacity
                    height: 22vh
                .primary_finance
                    height: 47vh

            .primary_statistics_2
                display: inline-block
                width: 27vw

                

                .primary_percentage
                    position: relative
                    height: 37vh
                    background: #FFFFFF
                    box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.1)
                    border-radius: 10px
                    width: 100%
                    margin-bottom: 1vh
                    text-align: center
                    .primary_percentage_block
                        animation: appearingBlock 0.5s
                    .primary_percentage_nav
                        background: #D9E8FF
                        border-radius: 5px
                        width: 60%
                        height: 30px
                        margin-top: 20px
                        margin-left: 20%
                        
                        h3
                            display: inline-block
                            width: 33%
                            background: #D9E8FF
                            color: black
                            font-weight: 600
                            font-size: 0.625vw //12px
                            line-height: 0.78125vw //15px
                            margin: 0
                            height: 24px
                            padding-top: 6px
                            vertical-align: top
                            cursor: pointer
                            transition: 0.5s all ease
                        .primary_percentage_nav_clicked
                            background: #437FD7
                            color: white
                            border-radius: 5px

                    p
                        font-family: Proxima Nova, sans-serif
                        position: absolute
                        left: 60%
                        width: 35%
                        text-align: left
                        top: 15px
                        font-style: normal
                        font-weight: 600
                        font-size: 0.833333333vw //16px
                        line-height: 0.98958333333333vw //19px
                        color: #437FD7

                .primary_graph
                    height: 37vh
                    background: #FFFFFF
                    box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.1)
                    border-radius: 10px
                    width: 100%
                    margin-bottom: 1vh
                    text-align: center





        .primary_chat
            display: inline-block
            width: 8vw
            vertical-align: top

            .primary_chat_block
                background: #FFFFFF
                box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.1)
                border-radius: 10px
                width: 100%
                margin-bottom: 10px
                width: 20vw
                height: 75vh
                text-align: center
</style>