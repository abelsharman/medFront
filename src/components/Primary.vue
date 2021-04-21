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
                    <p>3</p>
                </div>

                <div class="primary_graph">
                    <p>4</p>
                </div>
            </div>
        </div>

        <div class="primary_chat">
            <h1>Врачи</h1>
            

            <div class="primary_chat_block">
                <p>чат</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Primary'
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

                div
                    background: #FFFFFF
                    box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.1)
                    border-radius: 10px
                    width: 100%
                    margin-bottom: 1vh
                    text-align: center

                .primary_percentage
                    height: 37vh
                .primary_graph
                    height: 37vh





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