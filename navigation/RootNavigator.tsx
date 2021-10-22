import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import BalanceScreen from '../screens/BalanceScreen';
import DepositScreen from '../screens/DepositScreen';
import WithdrawalScreen from '../screens/WithdrawalScreen';

type RootTabParams = {
    Balance: undefined;
    Widthdrawal: undefined;
    Deposit: undefined;
};

const Tabs = createBottomTabNavigator<RootTabParams>();

function RootNavigator() {
    return (
        <NavigationContainer>
            <Tabs.Navigator>
                <Tabs.Screen
                    name="Balance"
                    component={BalanceScreen}
                    options={{
                        tabBarIcon: ({ color }) =>
                            <MaterialCommunityIcons name="cash-usd" size={24} color={color} />
                    }}
                />
                <Tabs.Screen
                    name="Widthdrawal"
                    component={WithdrawalScreen}
                    options={{
                        tabBarIcon: ({ color }) =>
                            <MaterialCommunityIcons name="bank-transfer-out" size={24} color={color} />
                    }}
                />
                <Tabs.Screen
                    name="Deposit"
                    component={DepositScreen}
                    options={{
                        tabBarIcon: ({ color }) =>
                            <MaterialCommunityIcons name="bank-transfer-in" size={24} color={color} />
                    }}
                />
            </Tabs.Navigator>
        </NavigationContainer>
    );
}

export default RootNavigator;
