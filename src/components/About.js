import Card from 'react-boostrap/Card'
import Container from 'react-boostrap.Container'


export default function About () {
    return (
        <div className="aboutpage">
            <div className="aboutHeader">
                <h1>About Us</h1>
            </div>
<Container>
    <Card border="info" >
        <Card.Header className="blockquote mb-0 card-body">About Us</Card.Header>
        <Card.Body>
            <Card.Text>
                When returning from a spritual journey through the Earth, ....
            </Card.Text>
            <Card.Text>
                As the heir of the industrious McMansions fortune, Monty ....
            </Card.Text>
            <Card.Text>
                Monty decided to travel around the ...
            </Card.Text>
            <Card.Text>
                Upon his return, he dedicated about 1% ...
            </Card.Text>
        </Card.Body>
        <Card.Img style={{ width: '50%', margin: '0 auto'}}  variant="bottom" src="hotsprings.jpg" />
    </Card>
</Container>

        </div>
    )
}