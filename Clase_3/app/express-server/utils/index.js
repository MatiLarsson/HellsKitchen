module.exports = {
  validArgs: (message, status) => {
    let errorMessage = null;
    if (typeof message != 'string') {
      errorMessage = 'The message is not a string';
    }
    if (typeof status != 'number') {
      errorMessage = 'The status is not a number';
    }
    return errorMessage
  }
}