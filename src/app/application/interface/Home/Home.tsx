import { Button, Text } from "native-base"
import { SafeAreaView } from "react-native-safe-area-context"
import { useNavigation } from '@react-navigation/native'

export const Home = () => {
    const navigation = useNavigation()
    function goActivity() {
        navigation.navigate('activity')
    }
    return (
        <SafeAreaView>
            <Text size={'2xl'} >HOME HOME HOME HOME</Text>
            <Button onPress={goActivity}>Go Activities</Button>
        </SafeAreaView>
    )
}

export default Home