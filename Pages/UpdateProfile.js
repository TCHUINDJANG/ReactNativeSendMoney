// import React , {useEffect , useState} from "react";
// import { View , Text , Button } from "react-native";
// import axios from "axios";



// const UpdateProfile = () => {
//     const [username , setUsername] = useState('');
//     const [email , setEmail ] = useState('');
//     const [message , setMessage] = useState('');
//     const [error , setError] = useState('');


//     useEffect(()  =>  {
//         const fetchProfile = async () => {
//             try{
//                 const response = await axios.put('http://localhost/api/users/profile/update' , 
                    
//                     {
//                         username , email
//                     },
//                     {
//                     headers: {
//                         Authorization: 'Bearer {your_token}'
//                     },
//                 });

//                 setMessage(response.data.success);

//             } catch (err) {
//                 setError('Failled to update profile');
//             }
//         };


//     return (
//         <View>
//         <Text type="text" placeholder="Username" value={username} onChangeText={setUsername}/>
//         <Text type="text" placeholder="Email" value={email} onChangeText={setEmail}/>
//     </View>
//     );

   
// };


// export default UpdateProfile;