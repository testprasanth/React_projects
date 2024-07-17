import React, { useState } from 'react';
import { SkillsProvider } from './context/SkillsContext';
import Header from './components/Header';
import GetSkills from './components/GetSkills';
import AddSkills from './components/AddSkills';
import styles from './styles/App.module.css'; // Correct path

const App: React.FC = () => {
    const [showSkills, setShowSkills] = useState(false);
    const [showAddSkills, setShowAddSkills] = useState(false);

    return (
        <SkillsProvider>
            <Header
                onGetSkills={() => { setShowSkills(true); setShowAddSkills(false); }}
                onAddSkills={() => { setShowAddSkills(true); setShowSkills(false); }} />
            <div className={styles.container}>
                {showSkills && <GetSkills />}
                {showAddSkills && <AddSkills />}
            </div>
        </SkillsProvider>
    );
};

export default App;
