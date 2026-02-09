import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './Experience.module.css'
import API_BASE_URL  from '../../api'
//import skills from '../../Data/skills.json'
//import history from '../../Data/history.json'

// const Experience = () => {
//   return (
//     <section id='experience' className={styles.container}>
//         <h2 className={styles.title}>Experience</h2>
//         <div className={styles.content}>
//             <div className={styles.skills}>{
//               skills.map((skill,id)=>{
//                 return <div key={id} className={styles.skill}>
//                   <div className={styles.skillImageContainer}><img src={getImageUrl(skill.imageSrc)} alt="" /></div>
//                   <p>{skill.title}</p>
//                 </div>
//               })
//               }</div>
//             <ul className={styles.history}>
//               {
//                 history.map((historyItem,id)=>{
//                   return <li key={id}>
//                     <img src={getImageUrl(historyItem.imageSrc)} alt={historyItem.organisation} />
//                     <div className={styles.historyItemDetails}>
//                       <h3>{`${historyItem.role},${historyItem.organisation}`}</h3>
//                       <p>{`${historyItem.startDate}-${historyItem.endDate}`}</p>
//                       <ul>
//                         {historyItem.experiences.map((experience,id)=>{
//                           return <li key={id}>{experience}</li>

//                         })}
//                       </ul>
//                     </div>
//                   </li>
//                 })
//               }
//             </ul>
//         </div>

//     </section>
//   )
// }

// export default Experience
const Experience = () => {
  const [skills, setSkills] = useState([]);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE_URL}/skills/`)
      .then((res) => res.json())
      .then((data) => setSkills(data))
      .catch((err) => console.error("Skills error:", err));

    fetch(`${API_BASE_URL}/experience/`)
      .then((res) => res.json())
      .then((data) => setHistory(data))
      .catch((err) => console.error("Experience error:", err));
  }, []);

  return (
    <section id="experience" className={styles.container}>
      <h2 className={styles.title}>Experience</h2>

      <div className={styles.content}>
        {/* Skills Section */}
        <div className={styles.skills}>
          {skills.map((skill) => (
            <div key={skill.id} className={styles.skill}>
              <div className={styles.skillImageContainer}>
                {/* Optional: map icons later */}
                <img
                  src={getImageUrl("skills/default.png")}
                  alt={skill.name}
                />
              </div>
              <p>{skill.name}</p>
              <small>{skill.category} • {skill.level}</small>
            </div>
          ))}
        </div>

        {/* Experience Section */}
        <ul className={styles.history}>
          {history.map((item) => (
            <li key={item.id}>
              <img
                src={getImageUrl("history/default.png")}
                alt={item.company}
              />

              <div className={styles.historyItemDetails}>
                <h3>{`${item.role}, ${item.company}`}</h3>
                <p>{`${item.start_date} - ${item.end_date || "Present"}`}</p>

                <ul>
                  {item.description
                    .split(".")
                    .filter(Boolean)
                    .map((line, idx) => (
                      <li key={idx}>{line.trim()}.</li>
                    ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Experience;