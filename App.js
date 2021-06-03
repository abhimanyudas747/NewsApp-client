import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import {StyleSheet, ScrollView, Text, TextInput, View, BackHandler } from 'react-native';
import {Avatar,Menu,ActivityIndicator,Dialog, Portal, Modal, TouchableRipple, Button, Appbar, Title, Divider, Paragraph, Card, DefaultTheme, DarkTheme, Provider as PaperProvider } from 'react-native-paper';
import NewsCard from './newsCard'
import About from './about'

export default function App() {
  const [menuvisible, setMenuvisible] = useState(false);
  const [news, setNews] = useState([]);
  const [loadervisible, setLoadervisible] = useState(true);
  const [connerror, setConnerror] = useState(false);
  const [aboutvisible, setAboutvisible] = useState(false);

  const hideAbout = () => {setAboutvisible(false);}
  const showAbout = () => {setAboutvisible(true);}

  const openMenu = () => setMenuvisible(true);

  const closeMenu = () => setMenuvisible(false);

  const exitapp = () => {BackHandler.exitApp();}

  const refresh = () => {

    fetch('https://newsappnative.herokuapp.com/')
    .then(response => response.json(), () => {
      setConnerror(true); 
      setTimeout(refresh, 3000);
    })
    .then(data => {
      if(news.length == 0 || data.news[0].ID > news[0].ID)
      {
        setNews(data.news); 
      }

      }
        
      )


  }

  useEffect(() => {

      refresh();
    
      if(news.length == 0)
      {
        setLoadervisible(true);
      }
      else{
        setLoadervisible(false);
      }
    
  }

  
  
  
  
  );



  return (
    <PaperProvider theme={DarkTheme}>


      <Appbar.Header >  
        <Appbar.Content title="NewsApp" subtitle="News at your fingertips, summarized." />
        
        <Menu
          visible={menuvisible}
          onDismiss={closeMenu}
          anchor={<Appbar.Action icon="dots-vertical" onPress={openMenu} />}>
          <Menu.Item onPress={() => {closeMenu();setNews([]);refresh();}} title="Refresh" />
          <Menu.Item onPress={() => {closeMenu();showAbout();}} title="About" />
          <Divider />
          <Menu.Item onPress={() => {closeMenu();exitapp();}} title="Exit" />
      </Menu>
      </Appbar.Header>

      


      <Portal>
        <Dialog visible={connerror} onDismiss={() => {}}>
          <Dialog.Title>Error</Dialog.Title>
          <Dialog.Content>
            <Paragraph>Request rejected. Please check your internet connection.</Paragraph>
          </Dialog.Content>
        </Dialog>
      </Portal>

      <Portal>
            <Modal visible={aboutvisible} onDismiss={hideAbout} style={{marginHorizontal: 15, marginTop: 50, borderRadius: 10}}>
             <About />
            </Modal>
      </Portal>

      

      <ScrollView style={{padding: 5, backgroundColor: '#000000'}}>

        {
          loadervisible ? <ActivityIndicator animating={true} color='#577049' /> : <></>
        }





        
      
      {
        news.map((item) => (<NewsCard {...item} key={item.ID} />))

      }

       
        

      </ScrollView>

      
        
      
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e3e2cc',
    alignItems: 'center',
    justifyContent: 'center',
  },
 
  newsCard: {
    backgroundColor: '#474742',
    borderRadius: 10,
    
    
  }
});
