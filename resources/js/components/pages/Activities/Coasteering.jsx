import React from 'react'
import Activity from '../../common/Activity'
import PageHeader from '../../common/PageHeader'

function Coasteering() {
    const { text } = require('../../../assets/' + localStorage.getItem('language') + "/activityCoasteering");

    return (
        <div>
            <PageHeader title="Coasteering" subtitle="innovation that escides" />
            <Activity
                content={{
                    title: text.title,
                    subtitle: text.subtitle,
                    info: text.information,
                    images: [
                        "01_coasteering.jpg"
                    ],
                    section: text.section,
                    includes: text.includes,
                    activities: text.activities,
                    gallery: {
                        title: text.gallery.title,
                        subtitle: text.gallery.subtitle,
                        images: [
                            ["coasteering/01", "coasteering/07", "coasteering/10", "coasteering/13"],
                            ["coasteering/02", "coasteering/05", "coasteering/08", "coasteering/11"],
                            ["coasteering/03", "coasteering/06", "coasteering/09", "coasteering/12"],
                        ]
                    }
                }}
            />
        </div>
    )
}

export default Coasteering