import React from 'react'
import Activity from '../../common/Activity'
import PageHeader from '../../common/PageHeader'

function Biking() {
    const { text } = require('../../../assets/' + localStorage.getItem('language') + "/activityBiking");

    return (
        <div>
            <PageHeader title="Biking" subtitle="innovation that escides" />
            <Activity
                content={{
                    title: text.title,
                    subtitle: text.subtitle,
                    info: text.information,
                    images: [
                        "01_biking.jpg"
                    ],
                    section: text.section,
                    includes: text.includes,
                    activities: text.activities,
                    gallery: {
                        title: text.gallery.title,
                        subtitle: text.gallery.subtitle,
                        images: [
                            ["biking/10", "biking/04", "biking/08"],
                            ["biking/02", "biking/05"],
                            ["biking/03", "biking/06"],
                        ]
                    }
                }}
            />
        </div>
    )
}

export default Biking