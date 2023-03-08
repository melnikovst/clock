import { useEffect, useState } from 'react';
import './Clock.scss';

type ClockPropsType = {};
const getTime = (num: number) => (num < 10 ? '0' + num : num);

export const AnalogClock = (props: ClockPropsType) => {
  const getSecondsFunction = () => {
    return Number(date.getSeconds());
  };

  const [date, setDate] = useState<Date>(new Date());

  const [seconds, setSeconds] = useState(getSecondsFunction());

  useEffect(() => {
    const intervalID = setInterval(() => {
      setDate(new Date());
      setSeconds((sec) => sec + 1);
    }, 1000);

    return () => clearInterval(intervalID);
  }, []);

  const deg = 6;

  const hoursString = getTime(date.getHours() * 30);
  const minutesString = getTime(date.getMinutes() * deg);
  const secondsString = getTime(seconds * deg);

  return (
    <div className="clockWrapper">
      <div className="hour">
        <div
          className="hours"
          style={{
            transform: `rotate(${+hoursString + +minutesString / 12}deg)`,
          }}
        />
      </div>
      <div className="minute">
        <div
          className="minutes"
          style={{ transform: `rotate(${+minutesString}deg)` }}
        />
      </div>
      <div className="second">
        <div
          className="seconds"
          style={{ transform: `rotate(${+secondsString}deg)` }}
        />
      </div>
    </div>
  );
};
