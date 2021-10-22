import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { deposit } from '../store/bank/bankSlice';
import { useAppDispatch, useAppSelector } from '../store/store';

function DepositScreen() {
    const dispatch = useAppDispatch();
    const { isLoading, errorMessage } = useAppSelector(state => state.bank);
    const [value, setValue] = useState<number>();

    const onSave = () => {
        if (!value) return;
        dispatch(deposit(value));
    };

    return (
        <View style={styles.root}>
            <Text>Deposit</Text>
            <TextInput
                keyboardType="number-pad"
                placeholder="Amount"
                value={value ? String(value) : undefined}
                onChangeText={(value) => setValue(Number(value))}
            />
            <Button title="Save" onPress={onSave}/>

            <Text>{isLoading && 'LADDAR!!'}</Text>

            {errorMessage && (
                <Text style={{ color: 'red' }}>
                    Error: {errorMessage}
                </Text>
            )}
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

export default DepositScreen;
