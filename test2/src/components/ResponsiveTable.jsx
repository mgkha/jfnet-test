import { data } from "../data";

/* 
This component use CSS media Query technique to create a responsive table.
The browser can optimize rendering based on media queries.
It provides better performanace, and styles can be apply at one place.
Also it provides less code compared to another technique. Ideal for simple UI.
*/
export default function ResponsiveTable() {
  return (
    <table>
      <thead>
        <tr>
          <th className="col-team">Team</th>
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
          {team.schedule.map((schedule, index) => (
            <tr key={schedule.id} className="row-schedule">
              {index == 0 && (
                <td className="col-team" rowSpan={2}>
                  {team.teamName}
                </td>
              )}
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
