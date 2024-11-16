import { View, Button} from 'react-native'
import React  from 'react'
import { logout } from '../api_accounts';


const LogoutScreen = () => {



    
    const handleLogout = async(e) => {

        e.preventDefault();
        try {
            await logout({username ,password ,email})
            alert('Logout successful')
        } catch (error) {
            alert('Logout failed' + error);
        }

    };


    return (
        <View>
            
            <Button title="Logout" onPress={handleLogout}></Button>

        </View>
    )
}


export default LogoutScreen
