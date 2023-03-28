import "./List.css";

function List(props) {
  return (
    <div className="cover">
      <ul>
        <li className="listitem">{props.Name}</li>
        <li className="listitem">{props.contact}</li>
        <li className="listitem">{props.medicine}</li>
        <li>
          <button className="listButton">Donate</button>
        </li>
      </ul>
    </div>
  );
}
export default List;
