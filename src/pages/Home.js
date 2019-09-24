import React from 'react';
import { Form } from '../components';
import { Notes } from '../components'

export const Home = () => {

    const notes = new Array(3)
        .fill('empty value')
        .map(( _, index) => (
            { id: index, title: `Note ${index + 1}`}
            ))

    return (
        <div>
           <Form />

           <hr />

           <Notes  notes={notes} />
        </div>
    );
}