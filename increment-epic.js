const incrementEpic = action$ =>
    action$.ofType('INCREMENT_DELAY')
        .delay(1000) // Asynchronously wait 1000ms then continue
        .mapTo({ type: 'INCREMENT' });
export default incrementEpic;