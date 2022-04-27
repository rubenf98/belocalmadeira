import React from 'react';
import { Row, Form } from 'antd';
import Participant from './Participant';



function Participants({ text, n }) {

    return (
        <div>
            <Row type="flex" justify="space-around">
                <Form.List name="person">
                    {() => (
                        <>
                            {[...Array(n)].map((p, index) =>
                                <Form.List key={index} name={index}>
                                    {() => (
                                        <Participant text={text} nParticipant={index + 1} />
                                    )}
                                </Form.List>
                            )}
                        </>)}
                </Form.List>
            </Row>
        </div>
    )
}

export default Participants
