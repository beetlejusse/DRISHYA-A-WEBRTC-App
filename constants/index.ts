const randomValue = Math.random().toString(36).substring(2, 8);
const timestamp = new Date().getTime();
export const randomLink = `?sessionId=${randomValue}&timestamp=${timestamp}`
const exploreLinks = [
    {
        label: 'Upcoming Meetings',
        route: `/upcoming-meetings${randomLink}`,
        imgURL: '/icons/upcoming.svg'
    },
    {
        label: 'Previous Meetings',
        route: `/previous-meetings${randomLink}`,
        imgURL: '/icons/previous.svg'
    },
    {
        label: 'Recordings',
        route: `/recordings${randomLink}`,
        imgURL: '/icons/Video.svg'
    },
    {
        label: 'Personal Room',
        route: `/personal-room${randomLink}`,
        imgURL: '/icons/add-personal.svg'
    }
]
export default exploreLinks