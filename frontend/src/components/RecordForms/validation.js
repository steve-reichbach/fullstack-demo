import * as Yup from 'yup';
const MIN_NAME_LENGTH = 10;

export const validation = Yup.object({
    name: Yup.string("Enter a name")
        .min(MIN_NAME_LENGTH, `Name must contain at least ${MIN_NAME_LENGTH} characters`)
        .required("Name is required"),
    description: Yup.string("Enter description")
        .required("Description is required as well"),
});
