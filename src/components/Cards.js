import React, { useState } from 'react';
import { StyleSheet, Text, View, Modal, TouchableHighlight} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import BodyModal from './BodyModal';

export default (props) => {

    const [visible, setVisible] = useState(false);

    return (
        <View style={styles.card}>
            <View style={styles.cardContainer}>
                <Text>
                    <FontAwesome name={props.iconName} style={styles.iconCard} />
                </Text>
                <View >
                    <View style={styles.txtCard}>
                        <Text style={styles.iconTitle}>{props.code}</Text>
                        <Text style={styles.iconSub}>{`/ ${props.codein}`}</Text>
                    </View>
                    <Text style={styles.txtMicro}>{props.name}</Text>
                </View>
                <View style={styles.infoBasicUp}>
                    <Text style={styles.infoBasicTxt}>{props.bid}</Text>
                    <FontAwesome name="arrow-circle-down" style={styles.infoIconUp} />
                </View>
                <View style={styles.infoBasicDown}>
                    <Text style={styles.infoBasicTxt}>{props.ask}</Text>
                    <FontAwesome name="arrow-circle-up" style={styles.infoIconDown} />
                </View>

                { /* MODAL */}
                <View style={styles.footer}>
                    <TouchableHighlight
                        onPress={() => { setVisible(true) }}
                        style={styles.modalOpenButton}
                    >
                        <Text style={styles.modalOpenText}> <FontAwesome name="search-plus" style={styles.iconInfo} /></Text>
                    </TouchableHighlight>
                </View>

                <View>
                    <Modal visible={visible} animationType='fade'>
                        <BodyModal 
                            code={props.code}
                            codein={props.codein}
                            name={props.name}
                            bid={props.bid}
                            ask={props.ask}
                            varBid={props.varBid}
                            pctChange={props.pctChange}
                            high={props.high}
                            low={props.low}
                            iconName={['dollar', 'euro', 'bitcoin']}
                            codeMoney={props.codeMoney}
                        />
                        <View>
                            <TouchableHighlight
                                onPress={() => { setVisible(false) }}
                                style={styles.modalCloseButton}
                            >
                                <Text style={styles.modalCloseText}>
                                    <FontAwesome name="reply" style={styles.iconCloseModal} />
                                    Voltar
                                </Text>
                            </TouchableHighlight>
                        </View>
                    </Modal>
                </View>
                { /* ENDMODAL */}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        width: 150,
        height: 170,
        backgroundColor: '#dedede',
        borderRadius: 20,
        margin: 10,
        borderColor: '#000',
        elevation: 2,
    },
    cardContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20
    },
    iconCard: {
        fontSize: 28,
        color: '#000',
    },
    txtCard: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginTop: 1,
    },
    iconTitle: {
        fontSize: 18,
        fontFamily: 'Ubuntu_400Regular',
    },
    iconSub: {
        fontSize: 10,
        fontFamily: 'Ubuntu_400Regular',
    },
    txtMicro: {
        fontFamily: 'Ubuntu_400Regular',
        fontSize: 8,
        textAlign: 'center'
    },
    infoBasicUp: {
        flexDirection: 'row',
        marginTop: 10,
    },
    infoBasicDown: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    infoBasicTxt: {
        fontSize: 16,
        marginRight: 5
    },
    infoIconUp: {
        fontSize: 18,
        color: '#f7004e'
    },
    infoIconDown: {
        fontSize: 18,
        color: '#72b5a4'
    },
    footer: {
        width: '100%',
        marginBottom: -10,
    },
    iconInfo: {
        color: '#fff',
        fontSize: 16
    },
    modalOpenButton: {
        backgroundColor: '#40424c', 
        padding: 10, 
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    modalOpenText: {
        textAlign: 'right',
        marginRight: 10,
        fontSize: 14
    },
    modalCloseButton: {
        padding: 10,
        backgroundColor: '#fe8000',
        width: 340,
        borderRadius: 10,
        marginHorizontal: 10,
        marginVertical: 10,
        alignItems: 'center'
    },
    modalCloseText: {
        fontFamily: 'Ubuntu_700Bold',
        color: '#fff',
        padding: 8,
        fontSize: 16,
    },
    iconCloseModal: {
        color: '#fff',
        fontSize: 18,
    }
});