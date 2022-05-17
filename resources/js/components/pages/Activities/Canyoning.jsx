import React from 'react'
import Activity from '../../common/Activity'
import PageHeader from '../../common/PageHeader'

function Canyoning() {
    const { text } = require('../../../assets/' + localStorage.getItem('language') + "/activityCanyoning");

    return (
        <div>
            <PageHeader title="Canyoning" subtitle="innovation that escides" />
            <Activity
                content={{
                    title: text.title,
                    subtitle: text.subtitle,
                    info: text.information,
                    images: [
                        "01_canyoning.jpg"
                    ],
                    section: text.section,
                    includes: text.includes,
                    activities: text.activities,
                    gallery: {
                        title: text.gallery.title,
                        subtitle: text.gallery.subtitle,
                        images: [
                            ["canyoning/01", "canyoning/04", "canyoning/07", "canyoning/10"],
                            ["canyoning/02", "canyoning/05", "canyoning/08", "canyoning/11"],
                            ["canyoning/03", "canyoning/06", "canyoning/09", "canyoning/12", "canyoning/15"],
                        ]
                    }
                }}
            />
        </div>
    )
}

export default Canyoning