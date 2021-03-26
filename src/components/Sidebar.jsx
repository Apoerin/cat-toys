import React from 'react';

import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';

const Sidebar = () => {
    return (
        <div className="ad-container">
            <Card className="ad" style={{ borderRadius: 0 }}>
                <Card.Img variant="top" src="img/popular.jpg" />
                <Card.Body style={{ border: 'none' }}>
                    <Card.Title style={{ border: 'none' }} className="custom-card-title">Check Our Popular Toy</Card.Title>
                    <Button variant="info" style={{ borderRadius: 0 }} className="custom-btn">Check Now!</Button>
                </Card.Body>
            </Card>
            <Card className="ad" style={{ borderRadius: 0 }}>
                <Card.Img variant="top" src="img/new.jpg" />
                <Card.Body style={{ border: 'none' }}>
                    <Card.Title style={{ border: 'none' }} className="custom-card-title">Check Our New Toy</Card.Title>
                    <Button variant="info" style={{ borderRadius: 0 }} className="custom-btn">Check Now!</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Sidebar;
