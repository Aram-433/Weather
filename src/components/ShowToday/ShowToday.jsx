import styles from "./ShowToday.module.css";

function ShowToday({ mainDay, city }) {
  const hour = new Date().getHours();
  const times = mainDay.map((elm) => {
    let date = elm.dt_txt.split(" ")[1];
    if (date[0] == "0" && date[1] == "0") {
      return { ...elm, dt_txt: "0" };
    } else if (date[0] == "0" && date[1] != "0") {
      return { ...elm, dt_txt: date[1] };
    } else {
      return { ...elm, dt_txt: date[0] + date[1] };
    }
  });
  let presentTime = null;
  for (let i = 0; i < times.length; i++) {
    if (hour == +times[i].dt_txt) {
      presentTime = times[i];
      break;
    } else if (hour > +times[i].dt_txt) {
      presentTime = times[i + 1];
      break;
    }
  }
  const mainSrc =
    presentTime &&
    `https://openweathermap.org/img/wn/${presentTime.weather[0].icon}@2x.png`;
  return (
    <div className={styles.showToday}>
      <div className={styles.top}>
        <h1>{city}</h1>
        <p>
          {presentTime && presentTime.main.feels_like}{" "}
          <i className="bi bi-thermometer-half"></i> Now
        </p>
        <div className={styles.description}>
          {presentTime && <img src={mainSrc} alt="image" />}
          <p>{presentTime && presentTime.weather[0].description}</p>
        </div>
        <p>Today</p>
      </div>
      <div className={styles.bottom}>
        {times.map((elm, ind) => {
          return +elm.dt_txt == +presentTime.dt_txt ? (
            <div key={ind} className={styles.partOfDays}>
              <div>
                <span>Now</span>
                <p>
                  {elm.main.feels_like}{" "}
                  <i className="bi bi-thermometer-half"></i>
                </p>
              </div>
            </div>
          ) : (
            <div key={ind} className={styles.partOfDays}>
              {+elm.dt_txt < 10 ? (
                <div>
                  <p>{"0" + elm.dt_txt + ":00"}</p>
                  <span>
                    {elm.main.feels_like}{" "}
                    <i className="bi bi-thermometer-half"></i>
                  </span>
                </div>
              ) : (
                <div>
                  <p>{elm.dt_txt + ":00"}</p>
                  <span>
                    {elm.main.feels_like}{" "}
                    <i className="bi bi-thermometer-half"></i>
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ShowToday;
