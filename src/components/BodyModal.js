import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default (props) => {
    return (
        <>
            <View style={styles.ModalContainer}>
                <View style={styles.header}>
                    <Image source={require('../assets/logo.png')} style={{ width: 120, height: 120 }} />
                    <Text style={styles.headerTitle}>Day Money</Text>
                </View>
                <View>
                    <View style={styles.BodyCardOne}>
                        <View>
                            <FontAwesome name= {props.iconName[props.codeMoney] } style={styles.iconCardOne} />
                        </View>
                        <View style={styles.CardOneContainerTitles}>
                            <Text style={styles.CardOneTitle}>{props.code}</Text>
                            <Text style={styles.CardOneTitle}>{props.codein}</Text>
                            <Text style={styles.CardOneTitle}>{props.name}</Text>
                        </View>
                    </View>
                    
                    <View style={styles.BodyCardTwo}>
                        <Text style={styles.BodyCardTwoBid}>
                            Compra:   
                            <Text style={styles.values}>{props.bid}</Text>
                        </Text>
                        <Text style={styles.BodyCardTwoAsk}>
                            Venda:
                            <Text style={styles.values}>{props.ask}</Text>
                        </Text>
                    </View>

                    <View style={styles.BodyCardThree}>
                        <Text style={styles.CardThreeTitle}>Variações:</Text>
                        <Text style={styles.cardVarBird}>{props.varBid}</Text>
                        <Text style={styles.cardPctChange}>{`${props.pctChange} %`}</Text>
                    </View>

                    <View style={styles.BodyCardFour}>
                        <Text style={styles.CardThreeTitle}>Máxima e Mínima:</Text>

                        <View style={styles.CardBoxFourHigh}>
                            <Text style={styles.cardFourHigh}>{props.high}</Text>
                            <FontAwesome name="arrow-circle-up" style={styles.iconCardFourUp} />
                        </View>
                        <View style={styles.CardBoxFourLow}>
                            <Text style={styles.CardFourLow}>{props.low}</Text>
                            <FontAwesome name="arrow-circle-down" style={styles.iconCardFourDown} />
                        </View>
                    </View>
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    ModalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        flex: 2,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    headerTitle: {
        fontSize: 28,
        marginTop: -10,
        fontFamily: 'Ubuntu_700Bold'
    },
    BodyCardOne: {
        flexDirection: 'row',
        width: 340,
        marginBottom: 10,
        backgroundColor: '#f7f7f7',
        padding: 10,
        borderRadius: 10,
        elevation: 1,
    },
    CardOneContainerTitles: {
        flexDirection: 'column',
        justifyContent: 'center'
    },
    CardOneTitle: {
        fontFamily: 'Ubuntu_400Regular',
    },
    iconCardOne: {
        fontSize: 62,
        marginRight: 10,
        fontFamily: 'Ubuntu_400Regular',
        color: '#000'
    },
    BodyCardTwo: {
        flexDirection: 'row',
        marginBottom: 10
    },
    BodyCardTwoBid:{
        backgroundColor: '#fe8000',
        padding: 10,
        width: 160,
        height: 75,
        borderRadius: 10,
        marginRight: 10,
        fontSize: 20,
        elevation: 1,
        fontFamily: 'Ubuntu_700Bold',
        color: '#930e36',
    },
    BodyCardTwoAsk:{
        backgroundColor: '#72b5a4',
        padding: 10,
        width: 160,
        height: 75,
        elevation: 1,
        borderRadius: 10,
        marginLeft: 10,
        fontSize: 20,
        fontFamily: 'Ubuntu_700Bold',
        color: '#2b5b4e',
    },
    values: {
        color: '#fff',
        fontSize: 32,
    },
    BodyCardThree: {
        backgroundColor: '#f7f7f7',
        padding: 10,
        width: 340,
        borderRadius: 10,
        height: 85,
        elevation: 1,
        marginBottom: 10,
    },
    BodyCardFour:{
        backgroundColor: '#f7f7f7',
        padding: 10,
        width: 340,
        borderRadius: 10,
        height: 100,
        elevation: 1,
        marginBottom: 10,
    },
    CardThreeTitle:{
        fontSize: 20,
        fontFamily: 'Ubuntu_700Bold', 
    },
    cardVarBird: {
        fontSize: 20,
        fontFamily: 'Ubuntu_400Regular', 
    },
    cardPctChange: {
        fontSize: 20,
        fontFamily: 'Ubuntu_400Regular',
    },
    CardBoxFourHigh: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    CardBoxFourLow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    cardFourHigh: {
        marginRight: 10,
        fontSize: 20,
        fontFamily: 'Ubuntu_400Regular',
        color: '#a0a0a0'
    },
    CardFourLow: {
        marginRight: 10,
        fontSize: 20,
        fontFamily: 'Ubuntu_400Regular',
        color: '#a0a0a0'
    },
    iconCardFourUp: {
        fontSize: 20,
        color: '#72b5a4'
    },
    iconCardFourDown:{
        fontSize: 20,
        color: '#f7004e'
    }
});