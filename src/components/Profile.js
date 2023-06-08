import Avatar from './Avatar.js';
import Card from './Card.js'


function Profile() {

    return (

        <Card>
            <Avatar
                size={100}
                person={{
                    name: 'Katsuko Saruhashi',
                    imageId: 'YfeOqp2'
                }}
            />
            <Avatar
                size={80}
                person={{
                    name: 'Katsuko Saruhashi',
                    imageId: 'YfeOqp2'
                }}
            />
            <Avatar
                size={50}
                person={{
                    name: 'Katsuko Saruhashi',
                    imageId: 'YfeOqp2'
                }}
            />
        </Card>

    );
}


export default Profile