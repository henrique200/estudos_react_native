import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TouchableOpacityProps } from 'react-native';

interface SkillCardProps extends TouchableOpacityProps {
    skills: string 
}

const SkillCard = ({skills, ...rest}: SkillCardProps) => {
    return (
        <TouchableOpacity 
        style={styles.containerNewSkills}
        { ...rest }
        >
            <Text style={styles.textSkills}>
                {skills}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    containerNewSkills: {
        backgroundColor: '#1F1E25',
        padding: 15,
        borderRadius: 30,
        alignItems: 'center',
        marginBottom: 10
    },
    textSkills: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20
    }
})

export default SkillCard;