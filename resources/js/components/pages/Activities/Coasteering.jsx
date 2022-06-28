import React from 'react'
import Activity from '../../common/Activity'
import ActivityHeader from '../../common/ActivityHeader';

function Coasteering() {
    const { text } = require('../../../assets/' + localStorage.getItem('language') + "/activityCoasteering");

    return (
        <div>
            <ActivityHeader title="Coasteering" />
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
                            ["coasteering/01", "coasteering/07", "coasteering/10", "coasteering/13", "coasteering/14"],
                            ["coasteering/17", "coasteering/02", "coasteering/05", "coasteering/08", "coasteering/11", "coasteering/15"],
                            ["coasteering/03", "coasteering/06", "coasteering/09", "coasteering/12", "coasteering/16"],
                        ]
                    }
                }}
            />
        </div>
    )
}

export default Coasteering