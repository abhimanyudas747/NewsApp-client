import React, { useState } from 'react';
import {StyleSheet, ScrollView, Text, TextInput, View, Share, Linking } from 'react-native';
import {Avatar, Portal, TouchableRipple, Button, Appbar,Modal, Title, Paragraph, Card, DefaultTheme, DarkTheme, Provider as PaperProvider } from 'react-native-paper';


export default function About(props) {

    const toiurl = 'https://timesofindia.indiatimes.com/';
    const linkedinurl = 'https://www.linkedin.com/in/reachtoabhimanyu/'

    

    return (
        <Card style={{borderRadius: 5, padding: 5}}>

            <ScrollView>

            <Card.Content>
              <Title>About Project</Title>
              <Paragraph>
                  This project is built using React-Native and Python 3.7. 
The goal is to create a News Feed app which gives a user regularly-updated news from the internet related to a particular topic, person, or location. It scrapes the website of The Times of India (
    <Text style={{color: 'lightblue'}} onPress={() => Linking.openURL(toiurl)}>
                {toiurl}
    </Text>
) to fetch updated news in regular intervals. 
Connect with me : 
            <Text style={{color: 'lightblue'}} onPress={() => Linking.openURL(linkedinurl)}>
                {linkedinurl}
            </Text>

              </Paragraph>
              
            </Card.Content>

            </ScrollView>

        
          
         </Card>
    )
}