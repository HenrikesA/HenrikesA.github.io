import { useState, useEffect } from "react"

const Footer = () => {
    const [localTime, setLocaltime] = useState<Date>(new Date());

    useEffect(() => {
        const intervalID = setInterval(() => {
            setLocaltime(new Date())
        }, 1000)

        return () => clearInterval(intervalID)
    }, []);

    const DayOfWeek = new Intl.DateTimeFormat('en-US', {weekday: 'long'}).format(localTime);
    const localHour = localTime.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'}).replace(/\./g, ':');

  return (
    <div id="footerCtn" className="">
        <div id="dayCtn">
            {DayOfWeek}
        </div>

        <div id="imgCtn">
        </div>

        <div id="hourCtn">
            {localHour}
        </div>
    </div>
  )
}

export default Footer