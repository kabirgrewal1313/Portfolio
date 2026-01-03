import "./Interests.css";
import interests from "../data/interests";

function Interests() {
  return (
    <section id="interest">
      <h1 className="InterestsHeading">Interests</h1>

      <div className="InterestsMain">
        <ul className="InterestsList">
          {interests.map((item) => (
            <li key={item.id} className="InterestCard">
              <h2>{item.title}</h2>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Interests;
