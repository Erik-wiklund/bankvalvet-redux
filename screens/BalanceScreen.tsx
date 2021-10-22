import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useAppSelector } from '../store/store';

function BalanceScreen() {
    const balance = useAppSelector(state => state.bank.balance);
    const transcations = useAppSelector(state => state.bank.transactions);

    return (
        <View style={styles.root}>
            <Text>Balance: {balance}$</Text>
            <Text>Transactions: </Text>
            {transcations.map((t, i) => <Text key={i}>{t}</Text>)}
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default BalanceScreen;
