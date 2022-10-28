import { Link } from "react-router-dom";
import { memberData } from "./membersdata";
const MembersDisplay = () => {
  return (
    <section className="secton">
      <h2>Products</h2>
      <div className="products">
        {memberData.map((member) => {
          return (
            <article key={member.memId}>
              <h4>{member.memName}</h4>
              <Link to={`/member/${member.memId}`}>Member Details</Link>
            </article>
          );
        })}
      </div>
    </section>
  );
};
export default MembersDisplay;
