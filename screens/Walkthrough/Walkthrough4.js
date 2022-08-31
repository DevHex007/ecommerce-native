import React, {useEffect} from 'react'
import{
    View,
    Image,
    Text,
    StyleSheet
}from 'react-native'
import {
    useDynamicAnimation,
    MotiImage
}from 'moti';

import {
    SIZES,
    images  
}from '../../constants'

const Walkthrough4 = ({ animate }) => {

    //Moti initial position
    const motiImage1 = useDynamicAnimation(() => {
        return {
            top: '40%',
            left: '20%'
        };
    });
    const motiImage2 = useDynamicAnimation(() => {
        return {
            top: '45%',
            left: '50%'
        };
    });
    const motiImage3 = useDynamicAnimation(() => {
        return {
            top: '53%',
            left: '35%'
        };
    });

 useEffect(() => {
    if(animate){
        motiImage1.animateTo(() => {
          return{
            top: '5%',
            left: -2
          }
        })
    }
}, [animate]) 

  return (
    <View
        style={{
            flex: 1,
            overflow: 'hidden'
        }}
    >
         <Image
            source={images.walkthrough_04_01}
            style={{
                ...styles.image,
                top: '25%',
                left: '28%',
                width: 190,
                height: 270,
                zIndex: 0
            }}
        />
        <MotiImage
            state={motiImage1}
            source={images.walkthrough_04_02}
            style={{
                ...styles.image,
                width: 120,
                height: 120
            }}
        />
        <MotiImage
            state={motiImage2}
            source={images.walkthrough_04_03}
            style={{
                ...styles.image,
                width: 120,
                height: 120
            }}
        /> 
       <MotiImage
            state={motiImage3}
            source={images.walkthrough_04_04}
            style={{
                ...styles.image,
                width: 120,
                height: 120
            }}
        /> 
    </View>
  )
}

const styles = StyleSheet.create({
    image:{
        position: 'absolute',
        width: 86,
        height: 112,
        zIndex: 0,
        borderRadius: SIZES.radius
    }

})
export default Walkthrough4;
