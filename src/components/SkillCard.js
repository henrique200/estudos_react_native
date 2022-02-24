import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const SkillCard = ({skills}) => {
    return (
        <View style={styles.containerNewSkills}>
            <Text style={styles.textSkills}>
                {skills}
            </Text>
        </View>
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