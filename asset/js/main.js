var app = new Vue(
    {
        el: '#root',
        data: {
            immagini: ['https://www.fotografiamoderna.it/wp-content/uploads/2017/12/Fotografie-paesaggi-consigli.jpg', 'https://miro.medium.com/max/1200/1*Gsq1yHsb3cV2JKuj5c_SoQ.jpeg', 'https://www.corsofotografico.com/wp-content/uploads/2020/09/quando-un-teleobiettivo-e%CC%80-meglio-di-un-grandangolo-nella-foto-di-paesaggio-featured.jpg', 'https://www.reterurale.it/flex/images/9/2/3/D.351363a0300d2b7790bd/1.jpg'],
            index: 0,
            timeout: undefined,
        },
        methods: {
            nextPhoto(){
                //this.index++
                if (this.index < 3){
                    this.index++
                } else{
                    this.index = 0
                }
            },
            prevPhoto(){
                if ( this.index > 0){
                    this.index--
                } else{
                    this.index = 0
                }
            },
            stopTimer(){
                clearInterval(this.timeout)
            },
            startTimer(){ this.timeout = setInterval(() => {
                this.nextPhoto();
            }, 3000);}
        }
    }
)