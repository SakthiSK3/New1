import React from 'react';

class UserData extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>username</th>
                        <th>password</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {this.props.friends && this.props.friends.map(friend => {
                        return <tr>
                            <td>{friend.username}</td>
                            <td>{friend.password}</td>
                            
                        </tr>
                    })}
                </tbody>
            </table>
        );
    }
}

export default UserData;