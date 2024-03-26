import { data } from "../data";
import { useMediaQuery } from "react-responsive";

/*
This component utilize Seperate Components technique to create a responsive table.
It provides better flexibility, readability and maintainability.
Ideal way if the UI becomes complex between different screen sizes.
*/
export default function ResponsiveTable2() {
  const isDesktop = useMediaQuery({ query: "(min-width: 1440px)" });

  return isDesktop ? <DesktopView /> : <MobileView />;
}

function MobileView() {
  return (
    <table>
      <thead>
        <tr>
          <th>Day</th>
          <th>Time</th>
          <th>Hall</th>
        </tr>
      </thead>

      {data.map((team) => (
        <tbody key={team.id}>
          <tr className="row-team">
            <td colSpan={3}>{team.teamName}</td>
          </tr>
          {team.schedule.map((schedule) => (
            <tr key={schedule.id} className="row-schedule">
              <td>{schedule.dayOfWeek}</td>
              <td className="time">
                <span className="time-badge">{schedule.timeFrom}</span>
                <span> - </span>
                <span className="time-badge">{schedule.timeTo}</span>
              </td>
              <td>{schedule.hall}</td>
            </tr>
          ))}
        </tbody>
      ))}
    </table>
  );
}

function DesktopView() {
  return (
    <table>
      <thead>
        <tr>
          <th>Team</th>
          <th>Day</th>
          <th>Time</th>
          <th>Hall</th>
        </tr>
      </thead>

      {data.map((team) => (
        <tbody key={team.id}>
          {team.schedule.map((schedule, index) => (
            <tr key={schedule.id} className="row-schedule">
              {index === 0 && <td rowSpan={2}>{team.teamName}</td>}
              <td>{schedule.dayOfWeek}</td>
              <td>
                <div className="time">
                  <span className="time-badge">{schedule.timeFrom}</span>
                  <span> - </span>
                  <span className="time-badge">{schedule.timeTo}</span>
                </div>
              </td>
              <td>{schedule.hall}</td>
            </tr>
          ))}
        </tbody>
      ))}
    </table>
  );
}
