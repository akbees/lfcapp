import React, { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { AuthContext } from "../service/AuthProvider";

function LogoutBtn(): JSX.Element {
    const { logout } = useContext(AuthContext);

    return (
        <TouchableOpacity style={styles.btn} onPress={() => logout()} >
            <Text style={styles.btnLabel}>Logout</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    btn: {
        borderRadius: 5,
        paddingHorizontal: 5,
        paddingVertical: 3,
        marginHorizontal: 8,
        backgroundColor: 'teal',
        fontSize: 12,
    },
    btnLabel: {
        color: '#ffff',
    }
});

export default LogoutBtn;

