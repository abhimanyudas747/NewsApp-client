import React, { useState } from 'react';
import {StyleSheet, ScrollView, Text, TextInput, View } from 'react-native';
import {Avatar, Portal, TouchableRipple, Button, Appbar,Modal, Title, Paragraph, Card, DefaultTheme, DarkTheme, Provider as PaperProvider } from 'react-native-paper';
import NewsBody from './newsBody'
export default function NewsCard(props) {



    const [visible, setVisible] = useState(false);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    


    return (
        <>

        <Card style={styles.newsCard}>

        <TouchableRipple onPress={showModal} rippleColor="rgba(0, 0, 0, .32)" >
          <>
          
          
            <Card.Cover style={{borderRadius: 5}} source={{ uri: props.IMGURL }} />
            <Card.Content>
              <Title style={{ fontFamily: "sans-serif", fontSize: 15}}>{props.HEADLINE}</Title>
              <Paragraph style={{fontSize: 10, alignSelf: 'flex-end'}}>{props.PUBDATE}</Paragraph>
            </Card.Content>

          </>

          </TouchableRipple>
          
         </Card>

        <Portal>
            <Modal visible={visible} onDismiss={hideModal} style={{marginHorizontal: 15, marginTop: 50, borderRadius: 10}}>
             <NewsBody imgurl={props.IMGURL} content={props.CONTENT} headline={props.HEADLINE} link={props.LINK} />
            </Modal>
        </Portal>
      

        </>
    );

}


const styles = StyleSheet.create({
 
    newsCard: {
      backgroundColor: '#474742',
      borderRadius: 10,
      marginVertical: 2
      
      
    }
  });
  