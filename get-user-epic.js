const incrementEpic = action$ =>
    action$.ofType('GET_USER')
        .mapTo({ type: 'SET_USER' });
export default incrementEpic;