import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const CardAdherent = (props) => {
    return (
        <View style={styles.card}>
            <View style={styles.cardHeader}>
                <TouchableOpacity on>
                    <View style={styles.cardHeaderAction}>
                        <Image style={styles.cardHeaderIcon} source={require('../assets/img/edit.png')} />
                    </View>
                </TouchableOpacity>
                <View style={styles.cardHeaderAction}>
                    <Image style={styles.cardHeaderIcon} source={require('../assets/img/delete.png')} />
                </View>
            </View>
            <View style={styles.cardFigure}>
                <Image source={{ uri: `https://cpme-rest-api.herokuapp.com/${props.logo}` }} style={styles.cardImage} />
            </View>
            <Text style={styles.cardTitle}>{props.entreprise}</Text>
            <Text style={styles.cardSubtitle}>{props.section}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderBottomWidth: 2,
        borderBottomColor: '#f1f4f5',
        marginBottom: 32,

    },
    cardHeader: {
        backgroundColor: '#081d2e',
        height: 64,
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 16
    },
    cardHeaderAction: {
        backgroundColor: '#20BFC1',
        height: 32,
        width: 32,
        borderRadius: 32,
    },
    cardHeaderIcon: {
        height: 16,
        width: 16,
        margin: 8,
    },
    cardFigure: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -32
    },
    cardImage: {
        width: 64,
        height: 64,
        borderWidth: 2,
        borderColor: '#20BFC1',
        borderRadius: 64,
    },
    cardTitle: {
        fontSize: 17,
        color: '#081d2e',
        fontWeight: '700',
        textAlign: "center",
        paddingHorizontal: 32,
        paddingVertical: 16,
    },
    cardSubtitle: {
        fontSize: 15,
        color: '#20BFC1',
        fontWeight: '600',
        textAlign: "center",
        paddingHorizontal: 32,
        paddingBottom: 16,
    }
})

export default CardAdherent;