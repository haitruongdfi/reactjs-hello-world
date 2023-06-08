// fake data
const initState = {
    users: [
        { id: 1, name: "hai", delete: false },
        { id: 2, name: "trong", delete: false },
        { id: 3, name: "truong", delete: false }
    ]
}

const rootReducer = (reduxState = initState, action) => {
    console.log(reduxState);
    let tempUsers = [];
    switch (action.type) {
        case "appComponent/deleteUser":
            tempUsers = reduxState.users.filter(item => item.id !== action.payload.id)

            return { ...reduxState, users: tempUsers };/* This creates brand new object so that it makes SURE that React will re-render because Object or array in JS is reference. So if we just assign normally, the address in memory doesn't change, it means no new state and React doesn't rerender.Thanks this author for reminding me: https://www.youtube.com/watch?v=pa1aGfu1jiA */
        case "appComponent/uppercaseUser":

            tempUsers = reduxState.users.map((item) => {
                return { ...item, name: item.name.toUpperCase() };
            });

            return { ...reduxState, users: tempUsers };
        default:
            return reduxState;
    }

}

export default rootReducer;