export const validationHook = values => {
    /* Add validation, maybe from https://github.com/jquense/yup */
    let errors = {};
    if (!values.name) {
        errors.name = 'Required';
    }
    if (![0, 1].includes(+values['is_private'])) {
        errors['is_private'] = 'Invalid is_private value'
    }
    console.log("validationHook", errors);
    // FIXME: may add validation here
    return {};
};
