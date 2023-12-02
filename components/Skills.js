import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { skillsIcons } from '@/data/config';

export default function SkillsSection() {
  return (
    <section className=" p-8 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-t from-[#c7d2fe] to-[#8678f9] bg-clip-text text-transparent">My Skills</h2>
      <div className="grid grid-cols-3 gap-4 justify-items-center">
        {Object.entries(skillsIcons).map(([skillName, icon]) => (
          <SkillItem key={skillName} icon={icon} skillName={skillName} />
        ))}
      </div>
    </section>
  );
};

const SkillItem = ({ icon, skillName }) => {
  return (
    <div className="flex flex-col items-center">
      <FontAwesomeIcon icon={icon} className="text-5xl mb-2" />
      <span className="text-lg font-semibold">{skillName}</span>
    </div>
  );
};
