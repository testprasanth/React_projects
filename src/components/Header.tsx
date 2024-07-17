import React from 'react';
import styles from '../styles/Header.module.css';

interface HeaderProps {
    onGetSkills: () => void;
    onAddSkills: () => void;

}

const Header: React.FC<HeaderProps> = ({ onGetSkills, onAddSkills }) => {
    return (
        <header className={styles.header}>
            <button className={styles.button} onClick={onGetSkills}>Get Skills</button>
            <button className={styles.button} onClick={onAddSkills}>Add Skills</button>
        </header>
    );
};

export default Header;
