import React from 'react';
import { useSkills } from '../context/SkillsContext';
import styles from '../styles/GetSkills.module.css'; // Assuming you create this CSS module

const GetSkills: React.FC = () => {
    const { skills } = useSkills();

    return (
        <div>
            <h2 style={{ textAlign: 'center' }}>Skills List</h2>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Skills</th>
                        <th>Experience (Years)</th>
                    </tr>
                </thead>
                <tbody>
                    {skills.map(skill => (
                        <tr key={skill.emp_id}>
                            <td>{skill.name}</td>
                            <td>{skill.skills}</td>
                            <td>{skill.experience}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default GetSkills;
