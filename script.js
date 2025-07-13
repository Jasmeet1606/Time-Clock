function getTime(){
            setInterval(()=>{
                let date = new Date()
                let hour=date.getHours()
                // document.write(date)
                document.getElementById("clock").innerHTML=`${date} <br> Hour is ${hour} <br> Minutes is ${date.getMinutes()} <br> Seconds is ${date.getSeconds()}`
            },1000)
        }