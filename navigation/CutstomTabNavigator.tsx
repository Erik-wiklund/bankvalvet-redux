import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { MaterialTopTabDescriptor, MaterialTopTabNavigationProp } from '@react-navigation/material-top-tabs/lib/typescript/src/types';
import { NavigationState } from '@react-navigation/routers';
import React from 'react';

interface Props {
    state: NavigationState;
    descriptors: MaterialTopTabDescriptor;
    navigation: MaterialTopTabNavigationProp<{}>;
    position: 'top' | 'bottom';
}

const MyTabBar = (props: Props) => {
    console.log(props);
    return null;
};

const Tab = createMaterialTopTabNavigator();

export default function MyTabs() {
    return (
        <Tab.Navigator tabBar={(props: Props) => <MyTabBar {...props} />} >
        </Tab.Navigator>
    );
}
