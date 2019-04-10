export const validationHook = values => {
    /* Add validation, maybe from https://github.com/jquense/yup */
    const MIN_NAME_LENGTH = 10;
    let errors = {};
    if (values.name.length < MIN_NAME_LENGTH) {
        errors.name = 'Name is way too short';
    }
    return errors;
};
