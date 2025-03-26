import React from "react";
import Activity from "../../common/Activity";
import ActivityHeader from "../../common/ActivityHeader";

function Hiking() {
    const { text } = require("../../../assets/" +
        localStorage.getItem("language") +
        "/activityHiking");

    return (
        <div>
            <ActivityHeader title="Hiking" />
            <Activity
                content={{
                    title: text.title,
                    subtitle: text.subtitle,
                    info: text.information,
                    images: ["01_hiking.jpg"],
                    levels: text.levels,
                    section: text.section,
                    linkto: "hiking",
                    includes: text.includes,
                    activities: text.activities,
                    gallery: {
                        title: text.gallery.title,
                        subtitle: text.gallery.subtitle,
                        images: [
                            [
                                "hiking/01",
                                "hiking/04",
                                "hiking/07",
                                "hiking/10",
                                "hiking/18",
                            ],
                            [
                                "hiking/02",
                                "hiking/03",
                                "hiking/08",
                                "hiking/11",
                                "hiking/17",
                            ],
                            [
                                "hiking/05",
                                "hiking/06",
                                "hiking/09",
                                "hiking/12",
                                "hiking/15",
                            ],
                        ],
                    },
                }}
            />
        </div>
    );
}

export default Hiking;
