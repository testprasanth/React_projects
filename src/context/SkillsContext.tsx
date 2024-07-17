import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

interface Skill {
    emp_id: number;
    name: string;
    skills: string;
    experience: string;
    level: string;
    domain: string;
}

interface SkillsContextType {
    skills: Skill[];
    fetchSkills: () => Promise<void>;
    addSkill: (skill: Omit<Skill, 'emp_id'>) => Promise<void>;
}

const SkillsContext = createContext<SkillsContextType | undefined>(undefined);

export const SkillsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [skills, setSkills] = useState<Skill[]>([]);

    const fetchSkills = async () => {
        const response = await axios.get('http://localhost:9001/api/getSkills');
        setSkills(response.data.data);
    };

    const addSkill = async (skill: Omit<Skill, 'emp_id'>) => {
        await axios.post('http://localhost:9001/api/addSkills', skill);
        fetchSkills();
    };

    useEffect(() => {
        fetchSkills();
    }, []);

    return (
        <SkillsContext.Provider value={{ skills, fetchSkills, addSkill }}>
            {children}
        </SkillsContext.Provider>
    );
};

export const useSkills = () => {
    const context = useContext(SkillsContext);
    if (!context) throw new Error('useSkills must be used within a SkillsProvider');
    return context;
};
