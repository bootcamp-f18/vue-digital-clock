let app = new Vue({

    el: "#app",

    data: {

        clockstuff: '00:00:00',
        alarm: '00:00:00',
        alarmHours: "00",
        alarmMinutes: "00",
        alarmSeconds: "00"


    },

    created: function () {

        let self = this;
        self.clockstuff = self.setTime();

        setInterval(function() {
            self.clockstuff = self.setTime();
        }, 1000);



    },

    methods: {

        setTime: function () {
            console.log(this.alarm);
            let now = new Date();

            let hours = now.getHours();
            if (hours < 10) {
                hours = '0' + hours;
            }

            let minutes = now.getMinutes();
            if (minutes < 10) {
                minutes = '0' + minutes;
            }

            let seconds = now.getSeconds();
            if (seconds < 10) {
                seconds = '0' + seconds;
            }
            
            if (this.clockstuff == this.alarm){


              console.log("ALARM");


            }

            return hours + ':' + minutes + ':' + seconds;

        },

        alarmSet: function () {

          let my = this;


          console.log("hello");


          console.log(this.alarmHours);

          console.log(this.alarmMinutes);

          console.log(this.alarmSeconds);

          console.log("Alarm is set");
          this.alarm = this.alarmHours + ':' + this.alarmMinutes + ':' + this.alarmSeconds;

        },

        alarmClear: function () {

          this.alarm = "00:00:00";
        }

      }

});
