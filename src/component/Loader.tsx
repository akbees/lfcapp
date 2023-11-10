import React from 'react';
import {
    ActivityIndicator,
    StyleSheet,
    Text,
    View,
} from 'react-native';

function Loader(): JSX.Element {
    return (
        <>
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#1d9bf0" />
                <Text style={styles.text}>Loading</Text>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(10, 0, 0, 0.5)',
        position: 'absolute',
        width: '100%',
        height: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: 'white',
    },
});

export default Loader;
