import React from 'react'
import Activity from '../common/Activity'
import PageHeader from '../common/PageHeader'

function Canyoning() {
    const { text } = require('../../assets/' + localStorage.getItem('language') + "/activityCanyoning");


    return (
        <div>
            <PageHeader title="Canyoning" subtitle="innovation that escides" />
            <Activity
                content={{
                    title: text.title,
                    subtitle: text.subtitle,
                    info: text.information,
                    images: [
                        "01_canyoning.jpg", "02_canyoning.jpg"
                    ],
                    section: text.section,
                    includes: text.includes,
                    activities: text.activities,
                    gallery: {
                        title: text.gallery.title,
                        subtitle: text.gallery.subtitle,
                        images: [
                            ["01_canyoning", "04_canyoning", "07_canyoning", "10_canyoning"],
                            ["02_canyoning", "05_canyoning", "08_canyoning", "11_canyoning"],
                            ["03_canyoning", "06_canyoning", "09_canyoning", "12_canyoning", "15_canyoning"],
                        ]
                    }
                }}
            />
        </div>
    )
}

export default Canyoning