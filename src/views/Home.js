import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';
import AppLoading from 'expo-app-loading';
import { FontAwesome } from '@expo/vector-icons';

import Cards from '../components/Cards';

const Home = () => {

    const [usd, setUSD] = useState([]);
    const [cad, setCAD] = useState([]);
    const [eur, setEUR] = useState([]);
    const [btc, setBTC] = useState([]);

    const [number, setNumber] = useState(0);                // reload das pesquisas api

    if(usd === null || cad === null || eur === null || btc === null) return <AppLoading />

    useEffect(() => {
        async function fetchData() {
            const responseUSD = await fetch('https://economia.awesomeapi.com.br/all/USD-BRL');
            const dataUSD = await responseUSD.json();

            setUSD(dataUSD.USD);
        }
        fetchData();
    }, [number]);

    useEffect(() => {
        async function fetchData() {
            const responseCAD = await fetch('https://economia.awesomeapi.com.br/all/CAD-BRL');
            const dataCAD = await responseCAD.json();

            setCAD(dataCAD.CAD);
        }
        fetchData();
    }, [number]);

    useEffect(() => {
        async function fetchData() {
            const responseEUR = await fetch('https://economia.awesomeapi.com.br/all/EUR-BRL');
            const dataEUR = await responseEUR.json();

            setEUR(dataEUR.EUR);
        }
        fetchData();
    }, [number]);

    useEffect(() => {
        async function fetchData() {
            const responseBTC = await fetch('https://economia.awesomeapi.com.br/all/BTC-BRL');
            const dataBTC = await responseBTC.json();

            setBTC(dataBTC.BTC);
        }
        fetchData();
    }, [number]);


    return (
        <>
            <View style={styles.header}>
                <Image source={require('../assets/logo.png')} style={{ width: 120, height: 120 }} />
                <Text style={styles.headerTitle}>Day Money</Text>
            </View>
            <View style={styles.body}>
                <View style={[styles.bodyShadowCard, { transform: [{ rotate: '43deg' }] }]} >
                <TouchableOpacity 
                    onPress={() => { setNumber(number + 1) }} 
                    >
                    <Text style={{ padding: 10 }}>
                        <FontAwesome name="retweet" style={{ color: '#fff', fontSize: 22 }}/>
                    </Text>
                </TouchableOpacity>
                </View>
                <View style={[styles.bodyCard, { transform: [{ rotate: '0deg' }] }]}>

                    <View style={styles.alignCards}>
                        <Cards
                            code={usd.code}
                            codein={usd.codein}
                            name={usd.name}
                            bid={usd.bid}
                            ask={usd.ask}
                            varBid={usd.varBid}
                            pctChange={usd.pctChange}
                            high={usd.high}
                            low={usd.low}
                            iconName="dollar"
                            codeMoney={0}
                        />
                        <Cards
                            code={cad.code}
                            codein={cad.codein}
                            name={cad.name}
                            bid={cad.bid}
                            ask={cad.ask}
                            varBid={cad.varBid}
                            pctChange={cad.pctChange}
                            high={cad.high}
                            low={cad.low}
                            iconName="dollar"
                            codeMoney={0}
                        />
                        <Cards
                            code={eur.code}
                            codein={eur.codein}
                            name={eur.name}
                            bid={eur.bid}
                            ask={eur.ask}
                            varBid={eur.varBid}
                            pctChange={eur.pctChange}
                            high={eur.high}
                            low={eur.low}
                            iconName="euro"
                            codeMoney={1}
                        />
                        <Cards
                            code={btc.code}
                            codein={btc.codein}
                            name={btc.name}
                            bid={btc.bid}
                            ask={btc.ask}
                            varBid={btc.varBid}
                            pctChange={usd.pctChange}
                            high={btc.high}
                            low={btc.low}
                            iconName="bitcoin"
                            codeMoney={2}
                        />
                    </View>

                </View>
            </View>
        </>
    );
}

export default Home;

const styles = StyleSheet.create({
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -13
    },
    headerTitle: {
        fontSize: 28,
        marginTop: -10,
        fontFamily: 'Ubuntu_700Bold'
    },
    body: {
        flex: 4
    },
    bodyShadowCard: {
        width: 250,
        height: '100%',
        overflow: 'visible',
        backgroundColor: '#40424c',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderColor: '#40424c',
    },
    bodyCard: {
        marginTop: -410,
        width: '100%',
        height: '100%',
        overflow: 'visible',
        backgroundColor: '#fe8000',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderColor: '#fe8000',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    },
    alignCards: {
        height: '100%',
        width: '100%',
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap'
    }
});