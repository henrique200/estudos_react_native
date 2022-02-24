import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Platform,
    FlatList,
} from 'react-native';
import Button from '../components/Button';
import SkillCard from '../components/SkillCard';

export const Home = () => {
    const [newSkills, setNewSckills] = useState('');
    const [mySkills, setMySkills] = useState([]);
    const [gretting, setGuetting] = useState('');

    const handleAddNewSkill = () => {
        setMySkills(oldState => [...oldState, newSkills]);
    }

    useEffect(() => {
        const currentHours = new Date().getHours();

        if(currentHours < 12){
            setGuetting('Bom Dia');
        }else if(currentHours >= 12 && currentHours < 18){
            setGuetting('Boa Tarde');
        }else{
            setGuetting('Boa noite')
        }
    }, [])

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome, José Henrique</Text>
            <Text style={styles.gretting}> {gretting} </Text>

            <TextInput
                style={styles.input}
                placeholder='New Skill'
                placeholderTextColor="#555"
                onChangeText={setNewSckills}
            />

           <Button onPress={handleAddNewSkill}/>

            <Text style={[styles.title, { marginVertical: 50 }]}>
                My Skills
            </Text>

            <FlatList
                data={mySkills}
                keyExtractor={item => item}
                renderItem={({item}) => (
                    <SkillCard 
                        skills={item}
                    />
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121015',
        paddingHorizontal: 20,
        paddingVertical: 70,
        paddingHorizontal: 30
    },
    title: {
        color: '#FFF',
        fontSize: 24,
        fontWeight: 'bold'
    },
    input: {
        backgroundColor: '#1F1E25',
        color: '#fff',
        padding: Platform.OS == 'ios' ? 15 : 10,
        fontSize: 18,
        marginTop: 30,
        borderRadius: 7,
    },
    gretting: {
        fontSize: 20,
        color: '#fff'
    }
   
 

})