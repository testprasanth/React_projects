import React, { useState } from 'react';
import { useSkills } from '../context/SkillsContext';
import styles from '../styles/AddSkills.module.css'; // Assuming you create this CSS module

const AddSkills: React.FC = () => {
    const [name, setName] = useState('');
    const [skills, setSkills] = useState('');
    const [experience, setExperience] = useState('');
    const [level, setLevel] = useState('');
    const [domain, setDomain] = useState('');
    const { addSkill } = useSkills();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        addSkill({ name, skills, experience, level, domain });
        setName('');
        setSkills('');
        setExperience('');
        setLevel('');
        setDomain('');
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <h2 style={{ textAlign: 'center' }}>Add Skills</h2>
            <input 
                className={styles.input}
                value={name} 
                onChange={e => setName(e.target.value)} 
                placeholder="Name" 
                required 
            />
            <input 
                className={styles.input}
                value={skills} 
                onChange={e => setSkills(e.target.value)} 
                placeholder="Skills" 
                required 
            />
            <input 
                className={styles.input}
                value={experience} 
                onChange={e => setExperience(e.target.value)} 
                placeholder="Experience" 
                required 
            />
            <input 
                className={styles.input}
                value={level} 
                onChange={e => setLevel(e.target.value)} 
                placeholder="Level" 
                required 
            />
            <input 
                className={styles.input}
                value={domain} 
                onChange={e => setDomain(e.target.value)} 
                placeholder="Domain" 
                required 
            />
            <button type="submit" className={styles.button}>Add Skill</button>
        </form>
    );
};

export default AddSkills;
