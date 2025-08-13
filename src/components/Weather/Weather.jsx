import styles from "./weather.module.css";
import { useEffect, useState } from "react";
import Input from "../Input/Input";
import ShowToday from "../ShowToday/ShowToday";
import ShowWeek from "../ShowWeek/ShowWeek";

function Weather() {
  const [searchParam, setSearchParam] = useState("Yerevan");
  const [mainDay, setMainDay] = useState([]);
  const [day1, setDay1] = useState([]);
  const [day2, setDay2] = useState([]);
  const [day3, setDay3] = useState([]);
  const [day4, setDay4] = useState([]);
  const weekDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const day = new Date().getDay() - 1;
  const daysForShow = weekDays.slice(day + 1);
  const dayOfWeek = weekDays.find((elm, ind) => ind == day);
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${searchParam}&units=metric&appid=db9bad674a44c257a9dc94db022deee6`
    )
      .then((r) => r.json())
      .then((r) => {
        if (r.list) {
          const filterMainDay = r.list.filter(
            (elm, ind) => ind >= 0 && ind <= 7
          );
          const filterDay1 = r.list.filter((elm, ind) => ind >= 8 && ind <= 15);
          const filterDay2 = r.list.filter(
            (elm, ind) => ind >= 16 && ind <= 23
          );
          const filterDay3 = r.list.filter(
            (elm, ind) => ind >= 24 && ind <= 31
          );
          const filterDay4 = r.list.filter(
            (elm, ind) => ind >= 32 && ind <= 39
          );
          setMainDay(filterMainDay);
          setDay1(filterDay1);
          setDay2(filterDay2);
          setDay3(filterDay3);
          setDay4(filterDay4);
        } else {
          setMainDay(r);
        }
      });
  }, [searchParam]);
  return (
    <div className={styles.dashboard}>
      <Input setSearchParam={setSearchParam} />
      {mainDay.message ? (
        <p className={styles.message}>{mainDay.message}</p>
      ) : (
        <ShowToday mainDay={mainDay} city={searchParam} dayOfWeek={dayOfWeek} />
      )}
      {mainDay.message ? (
        <p className={styles.sorry}>Sorry</p>
      ) : (
        <ShowWeek
          daysForShow={daysForShow}
          day1={day1}
          day2={day2}
          day3={day3}
          day4={day4}
        />
      )}
    </div>
  );
}

export default Weather;
