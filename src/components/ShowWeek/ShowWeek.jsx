import styles from "./ShowWeek.module.css";

function ShowWeek({ daysForShow, day1, day2, day3, day4 }) {
  return (
    <div className={styles.final}>
      {day1.length &&
        daysForShow.map((elm, ind) => {
          return ind == 0 ? (
            <div>
              <p>{elm}</p>
              <p>{day1[0].main.feels_like}</p>
              <i className="bi bi-thermometer-half"></i>
            </div>
          ) : ind == 1 ? (
            <div>
              <p>{elm}</p>
              <p>{day2[0].main.feels_like}</p>
              <i className="bi bi-thermometer-half"></i>
            </div>
          ) : ind == 2 ? (
            <div>
              <p>{elm}</p>
              <p>{day3[0].main.feels_like}</p>
              <i className="bi bi-thermometer-half"></i>
            </div>
          ) : (
            <div>
              <p>{elm}</p>
              <p>{day4[0].main.feels_like}</p>
              <i className="bi bi-thermometer-half"></i>
            </div>
          );
        })}
    </div>
  );
}

export default ShowWeek;
