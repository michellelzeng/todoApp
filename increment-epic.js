const incrementEpic = action$ =>
    action$.filter(action => action.type === 'INCREMENT_DELAY')
        .delay(1000) // Asynchronously wait 1000ms then continue
        .mapTo({ type: 'INCREMENT' });
export default incrementEpic;