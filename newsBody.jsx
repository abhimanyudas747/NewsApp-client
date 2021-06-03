import React, { useState } from 'react';
import {StyleSheet, ScrollView, Text, TextInput, View, Share } from 'react-native';
import {Avatar, Portal, TouchableRipple, Button, Appbar,Modal, Title, Paragraph, Card, DefaultTheme, DarkTheme, Provider as PaperProvider } from 'react-native-paper';


export default function NewsBody(props) {

    const sharenews = () => {
        Share.share(
            {
              title: props.headline,
              message: props.link
            }
          );
    }


    return (
        <Card style={{borderRadius: 5, padding: 5}}>

            <ScrollView>

       
          
          
            <Card.Cover style={{borderRadius: 5}} source={{ uri: props.imgurl }} />
            <Card.Content>
              <Title>{props.headline}</Title>
              <Paragraph>
                  {props.content}
              </Paragraph>
              <Button onPress={sharenews}>Share</Button>
              
            </Card.Content>

            </ScrollView>

        
          
         </Card>
    )
}