import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ResultScreen from '../../screen/ResultScreen';
import FixtureScreen from '../../screen/FixtureScreen';

const GameTabNav = () => {
    const Tab = createMaterialTopTabNavigator();

    return (
        <Tab.Navigator initialRouteName='Results'>
            <Tab.Screen name="Results" component={ResultScreen} />
            <Tab.Screen name="Fixtures" component={FixtureScreen} />
        </Tab.Navigator>
    );
}

export default GameTabNav;