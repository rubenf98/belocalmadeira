import { combineReducers } from 'redux'

import auth from './redux/auth'
import reservation from './redux/reservation'
import feedback from './redux/feedback'
import contact from './redux/contact'
import activity from './redux/activity'
import application from './redux/application'
import tour from './redux/tour'
import transfer from './redux/transfer'
import date from './redux/date'
import coupon from './redux/coupon'

const reducer = combineReducers({
    auth,
    reservation,
    feedback,
    contact,
    activity,
    application,
    date,
    tour,
    transfer,
    coupon
})

export default reducer