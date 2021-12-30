export const validateSignUp = values => {
  const errors = {};
  validateFullName(values.fullname, errors);
  validateEmail(values.email, errors);
  validatePassword(values.password, errors);
  return errors;
};

export const validateSignIn = values => {
  const errors = {};
  validateEmail(values.email, errors);
  validatePassword(values.password, errors);
  return errors;
};

export const validateBlog = values => {
  const errors = {};
  validateTitle(values.title, errors);
  validateDescription(values.description, errors);
  validateContent(values.content, errors);
  validateImage(values.image, errors);
  validatePrice(values.price, errors);
  return errors;
};

const validateFullName = (fullname, errors) => {
  if (!fullname) {
    errors.fullname = 'Full name is required';
  }
};

const validateEmail = (email, errors) => {
  if (!email) {
    errors.email = 'Email is required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    errors.email = 'Invalid email address';
  }
};

const validatePassword = (password, errors) => {
  if (!password) {
    errors.password = 'Password is required';
  } else if (password.length < 6) {
    errors.password = 'Password must be at least 6 characters';
  }
};

const validateTitle = (title, errors) => {
  if (!title) {
    errors.title = 'Title is required';
  }
};

const validateDescription = (description, errors) => {
  if (!description) {
    errors.description = 'Description is required';
  }
};

const validateContent = (content, errors) => {
  if (!content) {
    errors.content = 'Content is required';
  }
};

const validateImage = (image, errors) => {
  if (!image) {
    errors.image = 'Image is required';
  } else if (!/^(http|https):\/\/[^ "]+$/i.test(image)) {
    errors.image = 'Invalid Url';
  }
};

const validatePrice = (price, errors) => {
  if (!price) {
    errors.price = 'Price is required';
  } else if (!/^[0-9]*$/.test(price)) {
    errors.price = 'Invalid Price';
  }
};