import React, { useContext, useRef } from 'react';
import { StyleSheet, Text, Dimensions, Image, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { useNavigation } from '@react-navigation/native';
import ThemeContext from '../styles/ThemeContext';

export default function CourseComponent({ courseData}) {

    const globalStyles = React.useContext(ThemeContext);
    const navigation = useNavigation();

    const _carousel = useRef();
    const [activeDotIndex, setActiveDotIndex] = React.useState(0);

    const _renderItem = ({ item, index }) => {
        return (
            <SafeAreaView style={{ marginHorizontal: 20, alignItems: 'center' }} >
                <Text style={globalStyles.title}>{item.title}</Text>
                <Image source={item.img} style={{ width: '100%', height: 200, marginTop: '15%' }} />
                <Text style={[globalStyles.text, { marginTop: '15%' }]}>{item.description}</Text>

                {index === courseData.length - 1 && ( // Render button only on last slide
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('HomeScreen')}>
                        <Text style={styles.buttonText}>Finir le cours</Text>
                    </TouchableOpacity>
                )}
            </SafeAreaView>
        );
    };

    return (
        <SafeAreaView style={[globalStyles.container, styles.safeArea]}>
            <Carousel
                ref={_carousel}
                data={courseData}
                renderItem={_renderItem}
                sliderWidth={Dimensions.get('window').width}
                itemWidth={Dimensions.get('window').width}
                onSnapToItem={index => setActiveDotIndex(index)}
            />
            <View>
                <Pagination carouselRef={_carousel} activeDotIndex={activeDotIndex} dotsLength={courseData.length} />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        alignItems: 'center',
        marginTop: '10%',
    },
    button: {
        marginTop: 20,
        padding: 10,
        backgroundColor: '#F73893',
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});
