/*first at all enta lazmek component called " profile.js" fi folder profile 
fi folder a5er component fi waset src. 
then : he profile component gets data (fullName, bio, profession) as props = 
ma3neha houwa bech yhez lprops hedhouka 3 men l parent component li houa l app.js
ma3neha 3 hedhouka bech declarehom fil app.js ( exemple : <profile fullName ="Lamjed" /> )  (tnajem declarehom lkol fard tag ) .
and gets image as children props = 
nafs l 7kaya l component profile houwa bech ygetti men app.js donc declaration bech
tsir fi js ( children => declaration tsir fi tag paire ) . 
the function handleName functions as a prop that sends an alert message with the name 
of the profile user = bech declari l fonction hedhika kif kif fi app.js bien
sur definition bech tsir 9bal return 
w mba3ed bech tnadilha fil tag <profile/> 
li nadit fiha l props lawlanin .. 
hedha lkol bech ysir fil app.js 
fil profile.js bech tgetti l props akahou  {props.fullName} ... 
hedha l principe normalement 
m3a chwaya cours w google toussel */
/*
Create a project using create-react-app.
Create a profile folder under src.
Create a profile component under /profile.
The profile component gets data (fullName, bio, profession) as props,
and gets image as children props,
and the function handleName functions as a prop that sends an alert message with the name of the profile user.
Define the default props for Profile component. 
Use PropsType to check props.  
Use inline style.
*/
import React from 'react'
import proptypes from 'prop-types'
const Profile() {
    return (
        <div>
            <h1></h1>
        </div>
    )
    Profile.defau
}

export default Profile

