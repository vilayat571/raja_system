
import Singleteam from "./Singleteam";
import '../../assets/styles/index.css'
import { ITeam, teamData } from "../../constants/Team/data";

function Teams() {
  return (
    <main 
    id="raja-team"
    className="text-black xl:px-48 lg:px-28 md:px-48 sm:px-8 my-16">
      <div>
        <span id="team" className="text-3xl text-black tracking-wider font-bold block text-center mb-2">
          Our team!
        </span>
      </div>

      <div
        className="grid mt-16
  gap-2  text-center xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3"
      >
        {teamData.map((team:ITeam) => (
          <Singleteam 
          position={team.position}
           id={team.id} 
           key={team.id}
            img={team.img} 
            fullName={team.fullName}
            
            />
        ))}
      </div>
      
          </main>
  );
}

export default Teams;
