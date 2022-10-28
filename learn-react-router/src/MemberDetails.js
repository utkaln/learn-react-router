import { useParams } from "react-router-dom";
import { memberData } from "./membersdata";

const MemberDetails = () => {
  const { memId } = useParams();
  console.log("memberData Length -> ", memberData.length);
  console.log("memId -> ", typeof memId);
  const memberObj = memberData.find((member) => member.memId === Number(memId));
  console.log(JSON.stringify(memberObj));
  const { memName } = memberObj;
  return (
    <section className="section product">
      <h4>{memName}</h4>
    </section>
  );
};
export default MemberDetails;
