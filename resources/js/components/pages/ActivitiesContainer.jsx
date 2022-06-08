import React from 'react'
import PageHeader from '../common/PageHeader';
import Activities from './HomepageComponents/Activities';




function ActivitiesContainer() {
    const { text } = require('../../assets/' + localStorage.getItem('language') + "/homepage");

    return (
        <>
            <PageHeader title={text.activities.title} subtitle={text.activities.subtitle} />
            <Activities text={text.activities} showTitle={false} />
        </>
    )
}

export default ActivitiesContainer