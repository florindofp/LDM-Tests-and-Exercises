const app = new Vue({
    el: "#app",
    data: {
        messages: []
    },
    methods: {
        loadJSON(callback) {

            var xobj = new XMLHttpRequest();
            xobj.overrideMimeType("application/json");
            xobj.open('GET', 'https://official-joke-api.appspot.com/random_joke', true)
            xobj.onreadystatechange = function () {
                if (xobj.readyState == 4 && xobj.status == "200") {
                    // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
                    callback(xobj.responseText);
                }
            };
            xobj.send(null);
        },
        init() {
            let that = this
            that.loadJSON(function (response) {
                // Parse JSON string into object
                var data = JSON.parse(response);
                debugger;
                that.messages = data.messages
            });
        }
    },
    mounted(){
        this.init()
    },
    template: `
      <div>
        <p v-for="message in messages"><b>Name: </b>{{message.name}} </br><b>Message: </b>{{message.message}}</br></p>
      </div>
    `
})