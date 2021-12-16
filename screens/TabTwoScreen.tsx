import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { ScrollView, Button, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import ClarifaiView from '../components/ClarifaiView';
import { Camera } from 'expo-camera';

export default function TabTwoScreen() {
  const [openCamera, setOpenCamera] = useState(false);
  const [camera, setCamera] = useState<Camera | null>(null);
  const [imageURI, setImageURI] = useState<string | null>(null)
  const [imageBase64, setImageBase64] = useState<string|undefined>(undefined)
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const takePicture = async () => {
    if(camera){
      const data = await camera.takePictureAsync({base64:true});
      setImageURI(data.uri);
      setImageBase64(data.base64);
    }
  }

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <View style={styles.welcomeContainer}>
        <Text style={styles.headerText}>Take A Snapshot</Text>
        <View style={styles.imageWrapper}>
         
          <TouchableOpacity onPress={() => {
            setOpenCamera(!openCamera);
            setImageURI(null);
            setImageBase64(undefined);
            }} >
              {openCamera ? <Text style={styles.text}>
                Click To Close Camera
              </Text> : <Text style={styles.text}>
                Click To Open Camera
              </Text>}
          </TouchableOpacity>

          {openCamera ?
            <View style={styles.container}>
              <ScrollView
                style={styles.container}
                contentContainerStyle={styles.contentContainer}>
                              {imageURI ? 
                <Image style = {styles.camera} source = {{uri:imageURI}}/> 
                :
                  <Camera
                  ref = {ref => setCamera(ref)} 
                  style={styles.camera} 
                  type={type}>
                    <View style={styles.buttonContainer}>
                      <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                          setType(
                            type === Camera.Constants.Type.back
                              ? Camera.Constants.Type.front
                              : Camera.Constants.Type.back
                          );
                        }}>
                        <Icon
                          reverse
                          type='material-community'
                          name='cached'
                          size={20}
                        />
                      </TouchableOpacity>

                      <TouchableOpacity
                        style={styles.button}
                        onPress={() => takePicture()}>
                        <Icon
                          reverse
                          type='material-community'
                          name='camera'
                          size={20}
                        />
                      </TouchableOpacity>
                    </View>
                  </Camera> }
                  {imageBase64 ? <ClarifaiView imageResponse = {imageBase64}/> : <View></View>}
              </ScrollView>

            </View>
            
            :
            <View></View>}


        </View>


        <StatusBar style="auto" />
      </View>

    </ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  camera: {
    width: 300,
    height: 300,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
  },
  welcomeContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,
  },
  contentContainer: {
    paddingTop: 30,
    alignItems: 'center',
    alignContent: 'center'

  },
  headerText: {
    marginTop: 5,
    fontSize: 20,
    fontWeight: "bold",
  },
  button: {
    flex: 0.1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
  imageWrapper: {
    width: 400,
    height: 500,
    borderColor: "#66c8cf",
    borderWidth: 3,
    borderStyle: "dashed",
    marginTop: 40,
    marginBottom: 10,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 280,
    height: 280,
  },
  predictionWrapper: {
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
  },
  transparentText: {
    opacity: 0.8,
  },
});
