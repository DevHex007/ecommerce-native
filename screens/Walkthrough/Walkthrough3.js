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

const Walkthrough3 = ({ animate }) => {

    //Moti initial position
    const motiImage1 = useDynamicAnimation(() => {
        return {
            top: '12%',
            left: '25%'
            
        };
    }); 
    const motiImage2 = useDynamicAnimation(() => {
        return {
            top: '20%',
            left: '42%'
        };
    });
    const motiImage3 = useDynamicAnimation(() => {
        return {
            top: '30%',
            left: '17%'
        };
    }); 
   const motiImage5 = useDynamicAnimation(() => {
        return {
            top: '40%',
            left: '47%'
        };
    }); 

    useEffect(() => {
        if(animate){
            motiImage1.animateTo(() => {
                return{
                    top: "5%",
                    left: "10%"
                }
            })
            motiImage2.animateTo(() => {
                return{
                    top: '10%',
                    left: '55%'
                }
            })
            motiImage3.animateTo(() => {
                return{
                    top: '45%',
                    left: '5%'
                }
            }) 
            motiImage5.animateTo(() => {
                return{
                    top: '50%',
                    left: '45%'
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
        <MotiImage
            state={motiImage1}
            source={images.walkthrough_01_01}
            style={styles.image1}
        /> 
         <MotiImage
            state={motiImage2}
            source={images.walkthrough_03_01}
            style={styles.image}
        />
         <MotiImage
            state={motiImage3}
            source={images.walkthrough_03_02}
            style={styles.image}
        /> 
        <MotiImage
            state={motiImage5}
            source={images.walkthrough_01_02}
            style={styles.image}
        />  
    </View>
  )
}

const styles = StyleSheet.create({
    image:{
        position: 'absolute',
        width: 138,
        height: 164,
        zIndex: 0,
        borderRadius: SIZES.radius
    },
    image1:{
        position: 'relative',
        width: 150,
        height: 164,
        zIndex: 1,
        borderRadius: SIZES.radius
    }
})
export default Walkthrough3;
